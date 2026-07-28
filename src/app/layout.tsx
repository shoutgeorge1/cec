import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationJsonLd, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

/** Matches Shopify Paper theme: body + headings = Source Sans Pro family. */
const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700"],
});

/** Matches Shopify Paper theme: nav = Montserrat. */
const nav = Montserrat({
  subsets: ["latin"],
  variable: "--font-nav",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${nav.variable} antialiased`}>
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
