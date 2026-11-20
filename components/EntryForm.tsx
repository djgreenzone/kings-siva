"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function EntryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          postcode: data.get("postcode"),
          phone: data.get("phone"),
          company: data.get("company"), // honeypot
        }),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setMessage(json.error || "Could not submit. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "20px 0" }}>
        <h3 className="display" style={{ fontSize: "1.8rem", color: "var(--gold)" }}>
          You&rsquo;re in! 🌴
        </h3>
        <p style={{ opacity: 0.9, marginTop: 8 }}>
          Thanks for entering the King&rsquo;s Siva Academy &times; Beautiful Samoa
          giveaway. Winners are drawn at the event — good luck!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
      <Field name="firstName" label="First name" required />
      <Field name="lastName" label="Last name" required />
      <Field name="email" label="Email address" type="email" required />
      <Field name="postcode" label="Post code" required />
      <Field name="phone" label="Mobile number" type="tel" required placeholder="+61 000 000 000" />

      <label style={checkRow}>
        <input type="checkbox" required style={{ marginTop: 3 }} /> I confirm I am
        18+ and a Brisbane resident.
      </label>
      <label style={checkRow}>
        <input type="checkbox" required style={{ marginTop: 3 }} /> I agree to the{" "}
        <a href="/terms" className="text-cyan" style={{ textDecoration: "underline" }}>
          competition terms
        </a>
        .
      </label>
      <label style={{ ...checkRow, fontSize: "0.78rem", opacity: 0.85 }}>
        <input type="checkbox" required style={{ marginTop: 3 }} />
        <span>
          King&rsquo;s Siva Academy 🇼🇸 — By providing your phone number and
          checking the box, you agree to receive promotional and marketing
          messages, notifications, and customer service communications from
          King&rsquo;s Siva Academy 🇼🇸. Message and data rates may apply. Consent
          is not a condition of purchase. Message frequency varies. Text HELP for
          help. Text STOP to cancel.{" "}
          <a
            href="http://eepurl.com/iYwTc-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan"
            style={{ textDecoration: "underline" }}
          >
            See terms
          </a>
          ,{" "}
          <a
            href="http://eepurl.com/iYwTaw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan"
            style={{ textDecoration: "underline" }}
          >
            See Privacy Policy
          </a>
          .
        </span>
      </label>

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-5000px" }}
      />

      <button
        type="submit"
        className="btn btn-gold"
        style={{ width: "100%", marginTop: 6, opacity: status === "loading" ? 0.7 : 1 }}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Entering…" : "Enter Now"}
      </button>

      {status === "error" && (
        <p style={{ color: "#ff9a9a", fontSize: "0.85rem", textAlign: "center" }}>
          {message}
        </p>
      )}
    </form>
  );
}

const checkRow: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  fontSize: "0.88rem",
  lineHeight: 1.4,
  opacity: 0.95,
};

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: "0.82rem", letterSpacing: "0.5px", opacity: 0.85 }}>
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: 8,
          border: "1px solid rgba(76,212,230,0.4)",
          background: "rgba(245,241,228,0.06)",
          color: "var(--cream)",
          fontFamily: "var(--font-body)",
          fontSize: "1rem",
        }}
      />
    </label>
  );
}
