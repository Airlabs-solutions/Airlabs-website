import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  privacyAr,
  privacyEn,
  privacyIntro,
  privacyUpdated,
  privacyUpdatedAr,
  type PrivacyBlock,
  type PrivacySection,
} from "@/data/privacy";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "How AirLabs Solutions collects, uses, and protects personal data on this website under the Saudi Personal Data Protection Law.",
  path: "/privacy",
});

function RichText({ text }: { text: string }) {
  const parts = text.split(/(info@airlabss\.com|sdaia\.gov\.sa)/g);
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
        if (part === "sdaia.gov.sa") {
          return (
            <a
              key={`${part}-${index}`}
              href="https://sdaia.gov.sa"
              className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-navy-600 dark:hover:text-navy-300"
            >
              {part}
            </a>
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
        if (block.kind === "p") {
          return (
            <p key={index}>
              <RichText text={block.text} />
            </p>
          );
        }
        if (block.kind === "ul" || block.kind === "ol") {
          const List = block.kind === "ul" ? "ul" : "ol";
          return (
            <List
              key={index}
              className={
                block.kind === "ul"
                  ? "list-disc space-y-2 ps-5"
                  : "list-decimal space-y-2 ps-5"
              }
            >
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </List>
          );
        }
        return (
          <div key={index} className="overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-start">
                  {block.headers.map((header) => (
                    <th
                      key={header}
                      className="px-3 py-3 font-semibold text-foreground"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-border align-top">
                    {row.map((cell) => (
                      <td key={cell} className="px-3 py-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

function PolicyCopy({
  sections,
  updated,
}: {
  sections: PrivacySection[];
  updated: string;
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
            {section.title.startsWith("13.") || section.title.startsWith("١٣.") ? (
              <p className="mt-4">
                <Link
                  href="/contact"
                  className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-navy-600 dark:hover:text-navy-300"
                >
                  {section.title.startsWith("13.")
                    ? "Go to the contact page"
                    : "الانتقال إلى صفحة التواصل"}
                </Link>
              </p>
            ) : null}
          </section>
        ))}
      </div>
    </>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy policy" lead={privacyIntro} />
      <Section className="!pt-16 md:!pt-20">
        <Container className="max-w-3xl">
          <PolicyCopy sections={privacyEn} updated={`Last updated: ${privacyUpdated}`} />
          <div lang="ar" dir="rtl" className="mt-20 border-t border-border pt-16">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              سياسة الخصوصية
            </h2>
            <div className="mt-8">
              <PolicyCopy
                sections={privacyAr}
                updated={`آخر تحديث: ${privacyUpdatedAr}`}
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
