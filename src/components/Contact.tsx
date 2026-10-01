"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Sparkles, 
  ExternalLink,
  Copy,
  Check,
  Loader2
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const PROJECT_TYPES = [
  "Business Website",
  "Landing Page",
  "Portfolio Website",
  "E-Commerce Website",
  "Responsive Web Design / Rework",
  "Custom Web Application",
  "Other / General Inquiry",
];

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    projectType: PROJECT_TYPES[0],
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [directlySent, setDirectlySent] = useState(false);
  const [draftCopied, setDraftCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please write a brief message (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `[Portfolio Inquiry - ${formData.projectType}] from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Hapinayan,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n\n--\nSent from your portfolio website.`
    );
    return `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          "Project Type": formData.projectType,
          Message: formData.message,
          _subject: `[Portfolio Inquiry] ${formData.name} - ${formData.projectType}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        setDirectlySent(true);
        setSubmitted(true);
      } else {
        // Fallback to mailto
        window.location.href = getMailtoLink();
        setDirectlySent(false);
        setSubmitted(true);
      }
    } catch {
      // Fallback to mailto if offline or blocked
      window.location.href = getMailtoLink();
      setDirectlySent(false);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyMessageDraft = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setDraftCopied(true);
    setTimeout(() => setDraftCopied(false), 2500);
  };

  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 relative"
      aria-label="Contact Section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-300 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Start a Conversation
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mt-3 mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
            Have a project in mind, need a quote, or want to discuss web development? Send me a message and I&apos;ll get back to you promptly.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/90 bg-white/80 dark:bg-[#0c1427]/85 backdrop-blur-xl p-6 sm:p-10 shadow-2xl">
          
          {submitted ? (
            <div className="text-center py-8 space-y-5 animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {directlySent ? "Message Sent to Hapinayan!" : "Message Ready!"}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  {directlySent
                    ? `Thank you! Your message has been delivered directly to ${personal.email}. I will review your requirements and reply as soon as possible.`
                    : "Your default email client has been prepared with your message. If it didn't open automatically, click the button below or copy your draft."}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={getMailtoLink()}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs shadow-md shadow-sky-500/25 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Email Client</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={copyMessageDraft}
                  type="button"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-xs hover:border-sky-500 transition-all"
                >
                  {draftCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-500">Draft Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Draft Text</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      projectType: PROJECT_TYPES[0],
                      message: "",
                    });
                  }}
                  type="button"
                  className="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 underline font-mono"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="contact-name"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none bg-slate-50/70 dark:bg-slate-900/60 text-slate-900 dark:text-white ${
                      errors.name 
                        ? "border-rose-500/80 focus:ring-2 focus:ring-rose-500/20" 
                        : "border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label 
                    htmlFor="contact-email"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                  >
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="e.g. john@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none bg-slate-50/70 dark:bg-slate-900/60 text-slate-900 dark:text-white ${
                      errors.email 
                        ? "border-rose-500/80 focus:ring-2 focus:ring-rose-500/20" 
                        : "border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Project Type Select */}
              <div className="space-y-2">
                <label 
                  htmlFor="contact-project-type"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Project Type <span className="text-rose-500">*</span>
                </label>
                <select
                  id="contact-project-type"
                  value={formData.projectType}
                  onChange={(e) => {
                    setFormData({ ...formData, projectType: e.target.value });
                    if (errors.projectType) setErrors({ ...errors, projectType: undefined });
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                >
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type} className="bg-white dark:bg-slate-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label 
                  htmlFor="contact-message"
                  className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300"
                >
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Tell me about your goals, features, or questions..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none bg-slate-50/70 dark:bg-slate-900/60 text-slate-900 dark:text-white resize-y ${
                    errors.message 
                      ? "border-rose-500/80 focus:ring-2 focus:ring-rose-500/20" 
                      : "border-slate-200 dark:border-slate-800 focus:border-sky-500 dark:focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button & Help note */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 disabled:opacity-75 text-white font-semibold text-sm tracking-wide shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <div className="text-center sm:text-right text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Direct email: <a href={`mailto:${personal.email}`} className="text-sky-500 hover:underline">{personal.email}</a>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
