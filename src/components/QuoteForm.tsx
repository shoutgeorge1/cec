"use client";

import { type FormEvent, type ReactNode, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const businessTypes = [
  "Party / inflatable rental company",
  "Family entertainment center / venue",
  "School / church / nonprofit",
  "Corporate / advertising",
  "Reseller / dealer",
  "Other",
] as const;

const interests = [
  "Commercial bounce houses",
  "Commercial water slides",
  "Obstacle courses",
  "Wholesale / multi-unit fleet",
  "Custom design",
  "Starter package",
  "Not sure — need guidance",
] as const;

const inputClass =
  "w-full rounded-sm border border-[var(--line)] bg-white px-3 py-2 text-ink outline-none placeholder:text-ink-muted focus:border-primary focus:ring-2 focus:ring-primary/25";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    // Scaffold only: capture locally until CRM/email wiring is approved.
    // Do not send external email from this form without George approval.
    console.info("[quote-draft]", Object.fromEntries(data.entries()));

    await new Promise((r) => setTimeout(r, 450));
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-tertiary/30 bg-bg-neutral p-6">
        <h2 className="text-2xl font-bold text-ink">
          Quote request captured (local draft)
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          This scaffold stores the submission in the browser console only until a
          CRM or email endpoint is connected. No message was emailed.
        </p>
        <button
          type="button"
          className="mt-5 text-sm font-semibold text-tertiary"
          onClick={() => setStatus("idle")}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Company / organization" name="company" required />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField label="Business type" name="businessType" required>
          <option value="">Select…</option>
          {businessTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectField>
        <SelectField label="Primary interest" name="interest" required>
          <option value="">Select…</option>
          {interests.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectField>
        <Field
          label="Approx. units / budget range"
          name="quantityOrBudget"
          placeholder="e.g. 3 units / $25–40k"
        />
        <Field
          label="Needed by"
          name="timeline"
          placeholder="e.g. before spring season"
        />
      </div>

      <label className="block text-sm">
        <span className="mb-1.5 block text-ink-soft">Project details</span>
        <textarea
          name="details"
          required
          rows={5}
          className={inputClass}
          placeholder="Sizes, themes, wet/dry, indoor/outdoor, delivery region, must-have features…"
        />
      </label>

      <label className="block text-sm">
        <span className="mb-1.5 block text-ink-soft">How did you hear about us?</span>
        <input
          name="referral"
          className={inputClass}
          placeholder="Search, referral, trade show, returning customer…"
        />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Submit quote request"}
      </button>

      {status === "error" ? (
        <p className="text-sm text-primary">
          Something went wrong. Try again or email sales directly.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block text-ink-soft">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClass}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block text-ink-soft">
        {label}
        {required ? " *" : ""}
      </span>
      <select
        name={name}
        required={required}
        className={inputClass}
        defaultValue=""
      >
        {children}
      </select>
    </label>
  );
}
