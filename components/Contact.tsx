"use client";

import { useState, type FormEvent } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "UI/UX Design",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = "Please provide your name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share a brief description of your project.";
    }
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  }

  function handleReset() {
    setFormData({ name: "", email: "", service: "UI/UX Design", message: "" });
    setSubmitted(false);
  }

  return (
    <section id="contact" className="border-t border-[#E0E0E0] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column — 5 cols */}
          <div className="lg:col-span-5">
            <p className="font-mono-tag text-xs font-semibold tracking-widest text-[#3B5BDB] uppercase">
              // 03 &mdash; Get In Touch
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-[#141414] sm:text-3xl md:text-4xl">
              Got a project in mind?
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#8C8C8C]">
              We partner with visionary founders and ambitious teams. Whether starting from scratch
              or elevating an existing product, let&rsquo;s start a conversation.
            </p>

            {/* Contact Details with 1px border cards */}
            <div className="mt-8 space-y-4">
              <div className="border border-[#E0E0E0] bg-white p-5 rounded-xl shadow-xs transition-colors hover:border-[#3B5BDB]/40">
                <p className="font-mono-tag text-[10px] font-semibold tracking-wider text-[#8C8C8C] uppercase">
                  DIRECT INQUIRIES
                </p>
                <a
                  href="mailto:hello@formastudio.co"
                  className="mt-1 block font-heading text-base font-bold text-[#141414] transition-colors hover:text-[#3B5BDB]"
                >
                  hello@formastudio.co
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[#E0E0E0] bg-white p-5 rounded-xl shadow-xs transition-colors hover:border-[#3B5BDB]/40">
                  <p className="font-mono-tag text-[10px] font-semibold tracking-wider text-[#8C8C8C] uppercase">
                    STUDIO HQ
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#141414]">
                    Amsterdam, NL
                  </p>
                  <p className="text-xs text-[#8C8C8C]">Keizersgracht 421</p>
                </div>

                <div className="border border-[#E0E0E0] bg-white p-5 rounded-xl shadow-xs transition-colors hover:border-[#3B5BDB]/40">
                  <p className="font-mono-tag text-[10px] font-semibold tracking-wider text-[#8C8C8C] uppercase">
                    HOURS
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#141414]">
                    09:00 &mdash; 18:00
                  </p>
                  <p className="text-xs text-[#8C8C8C]">Mon &mdash; Fri CET</p>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="mt-6 flex items-center gap-2.5 font-mono-tag text-xs text-[#8C8C8C]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Response SLA: &lt; 24 hours guaranteed</span>
            </div>
          </div>

          {/* Right Column — 7 cols */}
          <div className="lg:col-span-7">
            {submitted ? (
              /* Success State */
              <div className="flex h-full min-h-[440px] flex-col items-center justify-center rounded-2xl border border-[#E0E0E0] bg-white p-8 text-center sm:p-10 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3B5BDB]/10 text-[#3B5BDB]">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="mt-5 font-heading text-2xl font-bold text-[#141414]">
                  Message received!
                </h3>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-[#8C8C8C]">
                  Thank you for reaching out, <span className="font-semibold text-[#141414]">{formData.name}</span>.
                  Our team is reviewing your project details and will be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E0E0E0] bg-[#F7F7F5] px-5 py-2 font-mono-tag text-xs font-semibold text-[#141414] transition-colors hover:bg-white hover:border-[#141414]"
                >
                  Send another message &rarr;
                </button>
              </div>
            ) : (
              /* Contact Form */
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 rounded-2xl border border-[#E0E0E0] bg-white p-6 sm:p-8 md:p-10 shadow-sm"
              >
                {/* Interested Service Selector */}
                <div>
                  <label className="mb-2 block font-mono-tag text-[10px] font-semibold tracking-wider text-[#8C8C8C] uppercase">
                    Interested Discipline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["UI/UX Design", "Web Development", "Branding", "Digital Marketing"].map(
                      (service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setFormData((d) => ({ ...d, service }))}
                          className={`rounded-full px-3.5 py-1.5 font-mono-tag text-[11px] font-medium transition-all ${
                            formData.service === service
                              ? "bg-[#141414] text-white"
                              : "border border-[#E0E0E0] bg-[#F7F7F5] text-[#141414] hover:bg-white hover:border-[#3B5BDB]/40"
                          }`}
                        >
                          {service}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block font-mono-tag text-[10px] font-semibold tracking-wider text-[#141414] uppercase"
                  >
                    Your Name <span className="text-[#3B5BDB]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData((d) => ({ ...d, name: e.target.value }));
                      if (errors.name) setErrors((d) => ({ ...d, name: undefined }));
                    }}
                    className={`w-full rounded-xl border bg-[#F7F7F5] px-4 py-3 text-sm text-[#141414] outline-none transition-colors placeholder:text-[#8C8C8C] focus:bg-white focus:border-[#3B5BDB] ${
                      errors.name ? "border-red-500 bg-red-50/20" : "border-[#E0E0E0]"
                    }`}
                    placeholder="e.g. Jane Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 font-mono-tag text-xs text-red-500 flex items-center gap-1">
                      <span>&bull;</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block font-mono-tag text-[10px] font-semibold tracking-wider text-[#141414] uppercase"
                  >
                    Email Address <span className="text-[#3B5BDB]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData((d) => ({ ...d, email: e.target.value }));
                      if (errors.email) setErrors((d) => ({ ...d, email: undefined }));
                    }}
                    className={`w-full rounded-xl border bg-[#F7F7F5] px-4 py-3 text-sm text-[#141414] outline-none transition-colors placeholder:text-[#8C8C8C] focus:bg-white focus:border-[#3B5BDB] ${
                      errors.email ? "border-red-500 bg-red-50/20" : "border-[#E0E0E0]"
                    }`}
                    placeholder="e.g. jane@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 font-mono-tag text-xs text-red-500 flex items-center gap-1">
                      <span>&bull;</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block font-mono-tag text-[10px] font-semibold tracking-wider text-[#141414] uppercase"
                  >
                    Project Scope &amp; Vision <span className="text-[#3B5BDB]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData((d) => ({ ...d, message: e.target.value }));
                      if (errors.message) setErrors((d) => ({ ...d, message: undefined }));
                    }}
                    className={`w-full resize-none rounded-xl border bg-[#F7F7F5] px-4 py-3 text-sm text-[#141414] outline-none transition-colors placeholder:text-[#8C8C8C] focus:bg-white focus:border-[#3B5BDB] ${
                      errors.message ? "border-red-500 bg-red-50/20" : "border-[#E0E0E0]"
                    }`}
                    placeholder="Tell us about your brand goals, target timeline, and key requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 font-mono-tag text-xs text-red-500 flex items-center gap-1">
                      <span>&bull;</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#141414] py-3.5 text-xs font-semibold tracking-wider uppercase text-white transition-all duration-200 hover:bg-[#3B5BDB] disabled:opacity-70"
                >
                  <span>{isSubmitting ? "Transmitting..." : "Send Commission Inquiry"}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
