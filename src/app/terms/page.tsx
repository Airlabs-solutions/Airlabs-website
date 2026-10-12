import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { PrivacyBlock, PrivacySection } from "@/data/privacy";
import {
  termsAr,
  termsEn,
  termsIntro,
  termsUpdated,
  termsUpdatedAr,
} from "@/data/terms";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms and conditions",
  description:
    "The terms for using the AirLabs Solutions website, including quotes, acceptable use, and Saudi governing law.",
  path: "/terms",
});

function RichText({ text }: { text: string }) {
  const parts = text.split(/(info@airlabss\.com|Privacy Policy|سياسة الخصوصية)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part === "info@airlabss.com") {
          return (
            <a
              key={`${part}-${index}`}
              href="mailto:info@airlabss.com"
              className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-navy-600 dark:hover:text-navy-300"
            >
              {part}
            </a>
          );
        }
        if (part === "Privacy Policy" || part === "سياسة الخصوصية") {
          return (
            <Link
              key={`${part}-${index}`}
              href="/privacy"
              className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-navy-600 dark:hover:text-navy-300"
            >
              {part}
            </Link>
          );
        }
        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}

function Blocks({ blocks }: { blocks: PrivacyBlock[] }) {
  return (
    <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
      {blocks.map((block, index) => {
        if (block.kind === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 ps-5">
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.kind === "p") {
          return (
            <p key={index}>
              <RichText text={block.text} />
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}

function TermsCopy({
  sections,
  updated,
  contactLabel,
}: {
  sections: PrivacySection[];
  updated: string;
  contactLabel: string;
}) {
  return (
    <>
      <p className="text-sm text-muted-foreground">{updated}</p>
      <div className="mt-10 space-y-12">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {section.title}
            </h2>
            <Blocks blocks={section.blocks} />
            {section.title.startsWith("15.") || section.title.startsWith("١٥.") ? (
              <p className="mt-4">
                <Link
                  href="/contact"
                  className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-navy-600 dark:hover:text-navy-300"
                >
                  {contactLabel}
                </Link>
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </>
  );
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms and conditions"
        lead={termsIntro}
      />
      <Section className="!pt-16 md:!pt-20">
        <Container className="max-w-3xl">
          <TermsCopy
            sections={termsEn}
            updated={`Last updated: ${termsUpdated}`}
            contactLabel="Go to the contact page"
          />
          <div lang="ar" dir="rtl" className="mt-20 border-t border-border pt-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              الشروط والأحكام
            </h2>
            <div className="mt-8">
              <TermsCopy
                sections={termsAr}
                updated={`آخر تحديث: ${termsUpdatedAr}`}
                contactLabel="الانتقال إلى صفحة التواصل"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
