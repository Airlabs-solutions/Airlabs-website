import { Download, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { contactDetails } from "@/data/contact";
import { business, siteUrl } from "@/data/seo";

const websiteLabel = siteUrl.replace(/^https:\/\//, "");

const actions = [
  {
    label: "Call",
    value: contactDetails.phone,
    href: `tel:${business.phoneE164}`,
    icon: Phone,
  },
  {
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    icon: Mail,
  },
  {
    label: "Website",
    value: websiteLabel,
    href: siteUrl,
    icon: Globe,
  },
  {
    label: "Office",
    value: `${contactDetails.location.line1}, ${contactDetails.location.line2}`,
    href: `https://www.google.com/maps?q=${business.latitude},${business.longitude}`,
    icon: MapPin,
  },
] as const;

export default function CardPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-5 py-16">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md">
        <Logo height={42} />
        <h1 className="mt-8 font-display text-3xl font-semibold tracking-tight text-foreground">
          AIRLabs Solutions
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{contactDetails.hours}</p>

        <ul className="mt-8 divide-y divide-border border-y border-border">
          {actions.map((action) => (
            <li key={action.label}>
              <a
                href={action.href}
                className="flex items-start gap-4 py-4 transition-colors hover:text-navy-700 dark:hover:text-navy-300"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-600/10 text-navy-700 dark:text-navy-300">
                  <action.icon className="h-4 w-4" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {action.label}
                  </span>
                  <span className="mt-0.5 block text-sm font-medium text-foreground">
                    {action.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/card/vcard"
          className="mt-8 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-navy-600 px-7 font-display text-base font-medium text-white shadow-lg shadow-navy-600/20 transition-colors hover:bg-navy-700 dark:bg-navy-500 dark:hover:bg-navy-400"
        >
          <Download className="h-4 w-4" aria-hidden />
          Save contact
        </a>
      </div>
    </div>
  );
}
