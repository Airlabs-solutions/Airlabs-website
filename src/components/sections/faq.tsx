"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { faq, faqIntro, type FaqPart } from "@/data/faq";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

function Answer({ parts }: { parts: readonly FaqPart[] }) {
  return (
    <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
      {parts.map((part, index) =>
        part.href ? (
          <Link
            key={index}
            href={part.href}
            className="font-medium text-foreground underline decoration-border underline-offset-4 hover:text-navy-600 dark:hover:text-navy-300"
          >
            {part.text}
          </Link>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </p>
  );
}

export function Faq() {
  return (
    <Section id="faq" className="!py-12 md:!py-16">
      <Container>
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="mx-auto max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-wider text-navy-600 dark:text-navy-300"
          >
            {faqIntro.eyebrow}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
          >
            {faqIntro.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-balance text-muted-foreground sm:text-lg"
          >
            {faqIntro.lead}
          </motion.p>

          <div className="mt-12 border-t border-border">
            {faq.map((item, index) => (
              <motion.details
                key={item.question}
                variants={fadeUp}
                className="group border-b border-border"
                {...(index === 0 ? { open: true } : {})}
              >
                <summary className="cursor-pointer list-none py-5 font-display text-lg font-medium tracking-tight text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-6">
                    {item.question}
                    <span
                      aria-hidden
                      className="mt-1 text-muted-foreground transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <div className="pb-6">
                  <Answer parts={item.answer} />
                </div>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
