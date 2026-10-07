"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { contactDetails } from "@/data/contact";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [website, setWebsite] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(
          data?.error ||
            `We couldn't send that. Email ${contactDetails.email} and we'll pick it up.`
        );
        return;
      }
      router.push("/contact/thanks");
    } catch {
      setError(
        `We couldn't send that. Email ${contactDetails.email} and we'll pick it up.`
      );
    } finally {
      setSending(false);
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-500/20";

  return (
    <>
      <PageHero
        eyebrow={contactDetails.eyebrow}
        title={contactDetails.title}
        lead={contactDetails.lead}
      />

      <Section className="!pt-14 md:!pt-16">
        <Container>
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={defaultViewport}
            className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"
          >
            {/* Form */}
            <motion.div variants={fadeUp}>
                <form
                  onSubmit={onSubmit}
                  className="relative rounded-3xl border border-border bg-surface/40 p-6 sm:p-8"
                >
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  />
                  <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                    Project inquiry
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Fill in the details below. If you are still choosing a lane,{" "}
                    <Link
                      href="/services"
                      className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-navy-600 dark:hover:text-navy-300"
                    >
                      see the services
                    </Link>
                    .
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <label className="block sm:col-span-1">
                      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Full name *
                      </span>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        autoComplete="name"
                        className={fieldClass}
                        // placeholder="Jane Cooper"
                      />
                    </label>
                    <label className="block sm:col-span-1">
                      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Email *
                      </span>
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        autoComplete="email"
                        className={fieldClass}
                        // placeholder="jane@company.com"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Company
                      </span>
                      <input
                        name="company"
                        value={form.company}
                        onChange={onChange}
                        autoComplete="organization"
                        className={fieldClass}
                        // placeholder="Acme Inc."
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Phone
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        autoComplete="tel"
                        className={fieldClass}
                        placeholder="+966 …"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Service interest *
                      </span>
                      <select
                        required
                        name="service"
                        value={form.service}
                        onChange={onChange}
                        className={cn(fieldClass, "appearance-none")}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {contactDetails.serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Project details
                      </span>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        rows={5}
                        className={cn(fieldClass, "resize-y")}
                        placeholder="What are you trying to build or improve? Timeline and budget range help too."
                      />
                    </label>
                  </div>

                  {error ? (
                    <p className="mt-6 text-sm text-foreground" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-6 w-full sm:w-auto"
                    disabled={sending}
                  >
                    {sending ? "Sending…" : "Send message"}
                    <Send className="h-4 w-4" />
                  </Button>
                  <p className="mt-4 text-xs text-muted-foreground">
                    We use this to reply. Read the{" "}
                    <Link
                      href="/privacy"
                      className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-navy-600 dark:hover:text-navy-300"
                    >
                      privacy policy
                    </Link>
                    .
                  </p>
                </form>
            </motion.div>

            {/* Contact details + map */}
            <motion.aside variants={fadeUp} className="space-y-5">
              <div className="rounded-3xl border border-border bg-background p-6 sm:p-7">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Contact details
                </h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy-600/10 text-navy-700 dark:text-navy-300">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="mt-0.5 font-medium text-foreground hover:text-navy-600 dark:hover:text-navy-300"
                      >
                        {contactDetails.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-700 dark:text-teal-300">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Phone
                      </p>
                      <a
                        href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}
                        className="mt-0.5 font-medium text-foreground hover:text-navy-600 dark:hover:text-navy-300"
                      >
                        {contactDetails.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-300">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Hours
                      </p>
                      <p className="mt-0.5 font-medium text-foreground">
                        {contactDetails.hours}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-700 dark:text-rose-300">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Location
                      </p>
                      <p className="mt-0.5 font-medium text-foreground">
                        {contactDetails.location.name}
                      </p>
                      <p className="text-muted-foreground">
                        {contactDetails.location.line1}
                      </p>
                      <p className="text-muted-foreground">
                        {contactDetails.location.line2}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border">
                <iframe
                  title="AirLabs Solutions location map"
                  src={contactDetails.location.mapEmbed}
                  className="h-72 w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="border-t border-border bg-surface/50 px-4 py-3 text-xs text-muted-foreground">
                  {contactDetails.location.line1},{" "}
                  {contactDetails.location.line2}
                </div>
              </div>
            </motion.aside>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
