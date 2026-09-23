"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { defaultViewport, fadeUp, staggerContainer } from "@/lib/motion";

type Filter = "All" | PortfolioCategory;

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === filter),
    [filter]
  );

  return (
    <Section id="portfolio">
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={defaultViewport}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-wider text-navy-600 dark:text-navy-300"
          >
            Selected work
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-balance font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            Recent projects
          </motion.h2>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {(["All", ...portfolioCategories] as Filter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "relative rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                filter === cat
                  ? "border-transparent text-white"
                  : "border-border text-muted-foreground hover:border-navy-600 hover:text-navy-600 dark:hover:text-navy-300"
              )}
            >
              {filter === cat && (
                <motion.span
                  layoutId="portfolio-filter-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-navy-600"
                />
              )}
              <span className="relative">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border card-elevate hover:border-navy-600/40"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-navy-700 to-charcoal-900">
                <span className="font-display text-4xl font-bold text-white/10 transition-transform duration-500 group-hover:scale-110">
                  {item.category}
                </span>
                <div className="absolute inset-0 flex translate-y-full flex-col justify-end bg-navy-900/90 p-5 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm text-white/85">{item.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white">
                    View case study <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
              <div className="bg-surface/50 p-5">
                <span className="text-xs font-medium uppercase tracking-wider text-navy-600 dark:text-navy-300">
                  {item.category}
                </span>
                <h3 className="mt-1 font-display text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-navy-600/10 px-2.5 py-1 text-xs text-navy-700 dark:text-navy-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
