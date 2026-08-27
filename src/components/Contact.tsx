import { useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/utils/motion";
import { personal } from "@/data/personal";
import { socials, emailLink } from "@/data/socials";
import { cn } from "@/utils/cn";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
type FormErrors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "loading" | "success" | "error";

const emptyForm: FormState = { name: "", email: "", subject: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  else if (values.name.trim().length < 2) errors.name = "Name is a bit short.";

  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address.";

  if (!values.subject.trim()) errors.subject = "Please add a subject.";

  if (!values.message.trim()) errors.message = "Please write a message.";
  else if (values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";

  return errors;
}

/**
 * 🔌 CONTACT FORM INTEGRATION — replace this placeholder with your provider.
 *
 *  • EmailJS:
 *      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY);
 *  • Formspree:
 *      await fetch("https://formspree.io/f/XXXX", {
 *        method: "POST",
 *        headers: { "Content-Type": "application/json", Accept: "application/json" },
 *        body: JSON.stringify(values),
 *      });
 *  • Your own backend:
 *      await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });
 *
 * Throw an error on failure to surface the error UI below.
 */
async function sendContactMessage(values: FormState): Promise<void> {
  // ⚠️ PLACEHOLDER — simulates a network request.
  await new Promise((resolve) => setTimeout(resolve, 1300));
  void values;
}

const infoItems = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  { icon: MapPin, label: "Location", value: personal.location },
  {
    icon: Phone,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/[^+\d]/g, "")}`,
  },
];

export function Contact() {
  const [values, setValues] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setValues((v) => ({ ...v, [key]: value }));
      if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      await sendContactMessage(values);
      setStatus("success");
      setValues(emptyForm);
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none transition focus:ring-2 focus:ring-brand-2/30";

  return (
    <section id="contact" className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something <span className="text-gradient">together</span>
            </>
          }
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <Reveal className="space-y-4">
            {infoItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="glass flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/40">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-1/20 to-brand-2/20 text-brand-2">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted">
                      {item.label}
                    </p>
                    <p className="truncate text-sm font-medium text-ink">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            <div className="glass-strong flex items-center gap-4 rounded-2xl p-5">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Open to work</p>
                <p className="text-xs text-muted">{personal.availability}</p>
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Find me on
              </p>
              <div className="flex flex-wrap gap-2">
                {[...socials, emailLink].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="glass grid h-10 w-10 place-items-center rounded-full text-muted transition-all hover:-translate-y-1 hover:text-brand-2"
                  >
                    <s.icon className="h-[18px] w-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-strong space-y-4 rounded-2xl p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                    aria-invalid={!!errors.name}
                    className={cn(
                      inputBase,
                      errors.name ? "border-rose-500/60" : "border-line",
                    )}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    placeholder="jane@example.com"
                    aria-invalid={!!errors.email}
                    className={cn(
                      inputBase,
                      errors.email ? "border-rose-500/60" : "border-line",
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={values.subject}
                  onChange={update("subject")}
                  placeholder="Let's work together"
                  aria-invalid={!!errors.subject}
                  className={cn(
                    inputBase,
                    errors.subject ? "border-rose-500/60" : "border-line",
                  )}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-rose-500">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={update("message")}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  className={cn(
                    inputBase,
                    "resize-none",
                    errors.message ? "border-rose-500/60" : "border-line",
                  )}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-rose-500">{errors.message}</p>
                )}
              </div>

              {/* Status banners */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    Thanks! Your message has been sent — I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-400"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
