"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { ...form },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full glass rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-colors placeholder:text-white/25";
  const inputStyle = {
    border: "1px solid rgba(255,255,255,0.1)",
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#1661BE" }}>
            Contact
          </span>
          <h1 className="text-5xl font-bold text-white mt-4 mb-6">Get in Touch</h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
            Tell us about your technology challenge and we&apos;ll be in touch shortly.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="glass-strong rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="text-sm mb-2 block" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm mb-2 block" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm mb-2 block" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Company
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                  style={inputStyle}
                  placeholder="Your organisation"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                  placeholder="Tell us about your technology challenge..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 text-white font-bold rounded-xl transition-all disabled:opacity-50"
                style={{ background: "#C74634" }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  Message sent! We&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-5 pt-4">
            {[
              {
                title: "Prefer a call?",
                body: "Book a free 30-minute consultation with one of our advisors to discuss your specific needs.",
              },
              {
                title: "Location",
                body: "Melbourne, Victoria, Australia. We serve clients nationally and across the Asia-Pacific region.",
              },
              {
                title: "Email",
                body: null,
                email: "hello@threerp.com.au",
              },
              {
                title: "Response time",
                body: "We respond to all enquiries within one business day.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="glass rounded-2xl p-7"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                {card.email ? (
                  <a
                    href={`mailto:${card.email}`}
                    className="text-sm transition-colors"
                    style={{ color: "#1661BE" }}
                  >
                    {card.email}
                  </a>
                ) : (
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {card.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
