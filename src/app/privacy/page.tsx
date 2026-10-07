import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { privacyIntro, privacySections, privacyUpdated } from "@/data/privacy";
import { pageMetadata } from "@/data/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "What AirLabs Solutions collects on this website, why the contact form is emailed, and how to ask for deletion.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        lead={privacyIntro}
      />
      <Section className="!pt-16 md:!pt-20">
        <Container className="max-w-3xl">
          <p className="text-sm text-muted-foreground">Updated {privacyUpdated}</p>
          <div className="mt-10 space-y-12">
            {privacySections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.title === "Ask us" ? (
                    <p>
                      <Link
                        href="/contact"
                        className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-navy-600 dark:hover:text-navy-300"
                      >
                        Go to the contact page
                      </Link>
                      .
                    </p>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
