"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { Container } from "@/components/ui/container";
import { services } from "@/data/services";

const socials = [
  { label: "LinkedIn", icon: LinkedinIcon, href: "#" },
  { label: "X", icon: SiX, href: "#" },
  { label: "Instagram", icon: SiInstagram, href: "#" },
  { label: "Facebook", icon: SiFacebook, href: "#" },
];

export function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (pathname === "/card") return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <Logo height={34} />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A full-stack IT partner for web, software, mobile, AI automation,
              digital marketing, and infrastructure, under one roof. Software
              is reviewed before launch, and data is stored with encryption
              and limited access.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-navy-600 hover:text-navy-600 dark:hover:text-navy-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-navy-600 dark:hover:text-navy-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-navy-600 dark:hover:text-navy-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                info@airlabss.com
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                +966 551076120
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                4790 King Fahd Bin Abdulaziz Rd، Riyad Bank Building, Aqrabiya 7598, Al Khobar 34441, Kingdom of Saudi Arabia
              </li>
            </ul>

            <h3 className="mt-8 text-sm font-semibold text-foreground">Stay in the loop</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Occasional notes on what we&apos;re building, no spam.
            </p>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="flex items-center gap-2 rounded-full border border-border bg-background p-1.5 focus-within:border-navy-600">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-transparent px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-600 text-white transition-colors hover:bg-navy-700 dark:bg-navy-500 dark:hover:bg-navy-400"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {submitted && (
                <p className="mt-2 text-xs text-navy-600 dark:text-navy-300">
                  Thanks — you&apos;re on the list.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} AirLabs Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-navy-600 dark:hover:text-navy-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-navy-600 dark:hover:text-navy-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
