"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Accessibility,
  Activity,
  Calendar,
  CircleParking,
  Heart,
  Home,
  Inbox,
  LayoutGrid,
  Megaphone,
  MoreHorizontal,
  MousePointer2,
  SlidersHorizontal,
  Star,
  TrendingUp,
  Utensils,
  Wifi,
} from "lucide-react";
import type { HeroSlideId } from "@/data/hero-slides";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function HeroShowcaseVisual({
  slideId,
  accent,
}: {
  slideId: HeroSlideId;
  accent: string;
}) {
  switch (slideId) {
    case "software":
      return <SoftwareShowcase accent={accent} />;
    case "mobile":
      return <MobileShowcase accent={accent} />;
    case "marketing":
      return <MarketingShowcase accent={accent} />;
    default:
      return <SoftwareShowcase accent={accent} />;
  }
}

const crmRows = [
  {
    name: "Acme renewal",
    status: { label: "Done", className: "bg-emerald-500 text-white" },
    channel: { label: "ERP", className: "bg-rose-500 text-white" },
    date: "Nov 12",
    type: "Enterprise",
  },
  {
    name: "Inventory sync",
    status: { label: "Done", className: "bg-emerald-500 text-white" },
    channel: { label: "API", className: "bg-sky-500 text-white" },
    date: "Nov 8",
    type: "Integration",
  },
  {
    name: "CRM onboard",
    status: { label: "Working", className: "bg-amber-400 text-amber-950" },
    channel: { label: "CRM", className: "bg-violet-500 text-white" },
    date: "Oct 28",
    type: "Workflow",
  },
  {
    name: "Billing portal",
    status: { label: "Done", className: "bg-emerald-500 text-white" },
    channel: { label: "Web", className: "bg-orange-500 text-white" },
    date: "Oct 14",
    type: "Portal",
  },
];

function SoftwareShowcase({ accent }: { accent: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[320px] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-[#f7f8fa] shadow-2xl sm:min-h-[380px]">
      {/* Mini sidebar */}
      <aside
        aria-hidden
        className="flex w-9 shrink-0 flex-col items-center gap-3 border-r border-slate-200/80 bg-white py-3 sm:w-10"
      >
        <span
          className="flex h-6 w-6 items-center justify-center rounded-lg text-[10px] font-bold text-white"
          style={{ backgroundColor: accent }}
        >
          A
        </span>
        {[Home, Inbox, Heart, Calendar, LayoutGrid].map((Icon, i) => (
          <Icon
            key={i}
            className={cn(
              "h-3.5 w-3.5",
              i === 0 ? "text-slate-800" : "text-slate-400"
            )}
          />
        ))}
      </aside>

      <div className="relative min-w-0 flex-1 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
              Operations board
            </h3>
            <div className="mt-1.5 flex gap-3 text-[10px] font-medium text-slate-400">
              <span className="border-b-2 border-slate-800 pb-0.5 text-slate-800">
                Main table
              </span>
              <span>Board</span>
              <span>Dashboard</span>
            </div>
          </div>
          <span
            className="hidden rounded-full px-2 py-0.5 text-[10px] font-semibold text-white sm:inline"
            style={{ backgroundColor: accent }}
          >
            Live CRM
          </span>
        </div>

        {/* Group */}
        <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-violet-600">
          <span className="text-[8px]">▼</span> Active deals
          <span className="font-normal text-slate-400">4</span>
        </div>

        {/* Column headers */}
        <div className="mt-1.5 grid grid-cols-[minmax(0,1.3fr)_0.7fr_0.7fr_0.55fr] gap-1 border-b border-slate-200 pb-1 text-[9px] font-medium uppercase tracking-wide text-slate-400 sm:grid-cols-[minmax(0,1.4fr)_0.75fr_0.75fr_0.6fr_0.7fr]">
          <span>Task</span>
          <span>Status</span>
          <span>System</span>
          <span className="hidden sm:inline">Date</span>
          <span>Type</span>
        </div>

        {/* Rows */}
        <div className="relative mt-0.5 space-y-0">
          {crmRows.map((row, i) => (
            <motion.div
              key={row.name}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.35, ease: EASE }}
              className="grid grid-cols-[minmax(0,1.3fr)_0.7fr_0.7fr_0.55fr] items-center gap-1 border-b border-slate-100 py-1.5 text-[10px] sm:grid-cols-[minmax(0,1.4fr)_0.75fr_0.75fr_0.6fr_0.7fr] sm:text-[11px]"
            >
              <span className="truncate font-medium text-slate-800">
                {row.name}
              </span>
              <span>
                <span
                  className={cn(
                    "inline-flex rounded-md px-1.5 py-0.5 text-[9px] font-semibold sm:text-[10px]",
                    row.status.className,
                    i === 0 && "ring-2 ring-emerald-300/80 ring-offset-1"
                  )}
                >
                  {row.status.label}
                </span>
              </span>
              <span>
                <span
                  className={cn(
                    "inline-flex rounded px-1.5 py-0.5 text-[9px] font-semibold sm:text-[10px]",
                    row.channel.className
                  )}
                >
                  {row.channel.label}
                </span>
              </span>
              <span className="hidden text-slate-500 sm:inline">{row.date}</span>
              <span className="truncate text-slate-500">{row.type}</span>
            </motion.div>
          ))}
        </div>

        {/* Second group peek */}
        <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-sky-600">
          <span className="text-[8px]">▼</span> Closed this month
          <span className="font-normal text-slate-400">2</span>
        </div>
        <div className="mt-1 grid grid-cols-[minmax(0,1.3fr)_0.7fr] items-center gap-1 border-b border-slate-100 py-1.5 text-[10px] opacity-60">
          <span className="font-medium text-slate-700">Vendor portal</span>
          <span className="inline-flex w-fit rounded-md bg-emerald-500 px-1.5 py-0.5 text-[9px] font-semibold text-white">
            Done
          </span>
        </div>

        {/* Floating hover card */}
        <motion.div
          aria-hidden
          className="absolute right-3 top-14 z-20 flex items-center gap-2.5 rounded-2xl border border-fuchsia-200/80 bg-white px-3 py-2 shadow-[0_12px_40px_rgba(15,23,42,0.14)] sm:right-5 sm:top-16 sm:gap-3 sm:px-3.5 sm:py-2.5"
          initial={reduce ? false : { opacity: 0, y: 10, scale: 0.94 }}
          animate={
            reduce
              ? { opacity: 1, y: 0, scale: 1 }
              : {
                  opacity: [0, 1, 1, 1, 0],
                  y: [10, 0, 0, 0, -4],
                  scale: [0.94, 1, 1, 1, 0.98],
                }
          }
          transition={
            reduce
              ? { duration: 0.3 }
              : {
                  duration: 5.5,
                  times: [0, 0.18, 0.55, 0.82, 1],
                  repeat: Infinity,
                  ease: EASE,
                }
          }
          style={{
            boxShadow:
              "0 12px 40px rgba(15,23,42,0.12), 0 0 0 1px rgba(232,121,249,0.35)",
          }}
        >
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white sm:h-9 sm:w-9"
            style={{
              background: `linear-gradient(135deg, ${accent}, #6366f1)`,
            }}
          >
            D
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-900 sm:text-sm">
              Dan, Ops Lead
            </p>
            <p className="text-[10px] text-slate-400">Assigned · CRM onboard</p>
          </div>
          <motion.span
            className="shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-sky-400 px-2.5 py-1 text-[10px] font-semibold text-white sm:px-3 sm:text-[11px]"
            animate={
              reduce
                ? undefined
                : { scale: [1, 1.04, 1], boxShadow: ["0 0 0 0 rgba(139,92,246,0)", "0 0 0 6px rgba(139,92,246,0.25)", "0 0 0 0 rgba(139,92,246,0)"] }
            }
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          >
            Reviewing
          </motion.span>
        </motion.div>

        {/* Animated cursor + click glow */}
        {!reduce && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute z-30"
            initial={{ left: "58%", top: "42%", opacity: 0 }}
            animate={{
              left: ["58%", "58%", "42%", "42%", "68%", "68%", "58%"],
              top: ["42%", "42%", "58%", "58%", "48%", "48%", "42%"],
              opacity: [0, 1, 1, 1, 1, 1, 0],
            }}
            transition={{
              duration: 5.5,
              times: [0, 0.08, 0.28, 0.4, 0.62, 0.78, 1],
              repeat: Infinity,
              ease: EASE,
            }}
          >
            {/* Click ripple */}
            <motion.span
              className="absolute -left-3 -top-3 h-10 w-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(52,211,153,0.55) 0%, rgba(56,189,248,0.35) 45%, rgba(167,139,250,0.2) 70%, transparent 75%)",
              }}
              animate={{
                scale: [0.4, 1.15, 0.85, 1.2, 0.5],
                opacity: [0, 0.9, 0.5, 0.85, 0],
              }}
              transition={{
                duration: 5.5,
                times: [0, 0.3, 0.42, 0.7, 1],
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <MousePointer2 className="relative h-5 w-5 fill-slate-800 text-slate-800 drop-shadow-md" />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function MobileShowcase({ accent }: { accent: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[340px] w-full items-center justify-center bg-transparent py-2 sm:min-h-[400px]">
      {/* Soft floor shadow only — no outer card */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 h-8 w-40 rounded-[100%] bg-slate-900/20 blur-xl sm:w-48"
      />

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="relative z-10 w-[210px] rounded-[2.35rem] bg-[#1c1c1e] p-[7px] shadow-[0_28px_60px_rgba(15,23,42,0.28)] sm:w-[236px]"
      >
        {/* Side buttons hint */}
        <span
          aria-hidden
          className="absolute -left-[2px] top-24 h-8 w-[2px] rounded-l-sm bg-[#3a3a3c]"
        />
        <span
          aria-hidden
          className="absolute -left-[2px] top-36 h-12 w-[2px] rounded-l-sm bg-[#3a3a3c]"
        />
        <span
          aria-hidden
          className="absolute -right-[2px] top-28 h-16 w-[2px] rounded-r-sm bg-[#3a3a3c]"
        />

        <div className="relative overflow-hidden rounded-[1.95rem] bg-[#f3f3f5]">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-2 z-20 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-black" />

          <div className="flex items-center justify-between px-4 pb-1 pt-3.5 text-[9px] font-semibold text-slate-900">
            <span>9:41</span>
            <span className="flex items-center gap-0.5 opacity-70">
              <span className="h-1.5 w-3 rounded-[1px] border border-slate-900/80" />
            </span>
          </div>

          {/* App chrome */}
          <div className="flex items-center justify-between px-3.5 pt-1">
            <div className="flex items-center gap-1.5">
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-bold text-slate-900"
                style={{ backgroundColor: accent }}
              >
                A
              </span>
              <span className="text-[11px] font-bold tracking-tight text-slate-900">
                airlabs
              </span>
            </div>
            <MoreHorizontal className="h-4 w-4 text-slate-700" />
          </div>

          <div className="mt-3 flex items-start justify-between px-3.5">
            <div>
              <p className="font-display text-[15px] font-semibold leading-tight text-slate-900">
                Field Ops
              </p>
              <p className="mt-0.5 text-[9px] text-slate-500">
                Dubai · Live routes
              </p>
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700">
              <SlidersHorizontal className="h-3.5 w-3.5" />
            </span>
          </div>

          {/* Listing cards */}
          <div className="mt-2.5 space-y-2.5 px-3 pb-4">
            {[
              {
                title: "Marina Service Hub",
                meta: "2.1 km from depot",
                price: "SAR 180",
                img: "from-slate-400 via-slate-300 to-stone-200",
              },
              {
                title: "Downtown Ops Desk",
                meta: "4.8 km from depot",
                price: "SAR 240",
                img: "from-stone-400 via-neutral-300 to-zinc-200",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.15, duration: 0.4, ease: EASE }}
                className="overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(15,23,42,0.06)]"
              >
                <div
                  className={cn(
                    "relative h-[72px] bg-gradient-to-br sm:h-[84px]",
                    card.img
                  )}
                >
                  <span className="absolute left-1.5 top-1.5 rounded-full bg-white/95 px-1.5 py-0.5 text-[7px] font-medium text-slate-600">
                    Official partner
                  </span>
                  <span className="absolute bottom-1.5 right-1.5 flex items-center gap-0.5 rounded-full bg-white/95 px-1.5 py-0.5">
                    {Array.from({ length: 4 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-2 w-2 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </span>
                </div>
                <div className="p-2">
                  <p className="truncate text-[10px] font-bold leading-snug text-slate-900">
                    {card.title}
                  </p>
                  <p className="mt-0.5 text-[8px] text-slate-500">{card.meta}</p>
                  <div className="mt-1.5 flex gap-2 text-slate-700">
                    <Accessibility className="h-2.5 w-2.5" />
                    <Utensils className="h-2.5 w-2.5" />
                    <Wifi className="h-2.5 w-2.5" />
                    <CircleParking className="h-2.5 w-2.5" />
                  </div>
                  <div className="mt-2 flex items-end justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-bold text-slate-900">
                        {card.price}
                      </p>
                      <p className="text-[7px] leading-tight text-slate-400">
                        per visit
                        <br />
                        Inc. fees
                      </p>
                    </div>
                    <motion.span
                      className="rounded-md px-2 py-1.5 text-[8px] font-bold text-slate-900"
                      style={{ backgroundColor: accent }}
                      animate={
                        reduce || i !== 0
                          ? undefined
                          : { scale: [1, 1.04, 1] }
                      }
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.8,
                      }}
                    >
                      Book now
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MarketingShowcase({ accent }: { accent: string }) {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex h-full min-h-[320px] w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-950 via-slate-950 to-emerald-950 p-4 shadow-2xl sm:min-h-[380px] sm:p-5">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-0 h-44 w-44 rounded-full blur-3xl"
        style={{ background: accent, opacity: 0.28 }}
      />

      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <Megaphone className="h-4 w-4 text-amber-300" />
          <span className="text-xs font-semibold text-white/90">
            Growth dashboard
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
          <Activity className="h-3 w-3" /> Live loop
        </span>
      </div>

      <div className="relative z-10 mt-4 grid grid-cols-2 gap-2">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4, ease: EASE }}
          className="rounded-xl border border-white/10 bg-white/5 p-3"
        >
          <p className="text-[10px] text-slate-400">Inbound leads</p>
          <p className="mt-1 font-display text-2xl font-semibold text-white">+248%</p>
          <p className="text-[10px] text-emerald-300">QoQ growth</p>
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4, ease: EASE }}
          className="rounded-xl border border-white/10 bg-white/5 p-3"
        >
          <p className="text-[10px] text-slate-400">ROAS</p>
          <p className="mt-1 font-display text-2xl font-semibold text-amber-300">3.8x</p>
          <p className="text-[10px] text-slate-400">Verified</p>
        </motion.div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.45 }}
        className="relative z-10 mt-3 flex-1 rounded-xl border border-white/10 bg-white/[0.03] p-3"
      >
        <div className="mb-2 flex items-center justify-between text-[10px] text-slate-400">
          <span className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-emerald-400" /> Traffic curve
          </span>
          <span className="text-emerald-300">All-time high</span>
        </div>
        <svg className="h-20 w-full" viewBox="0 0 280 70" fill="none">
          <defs>
            <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,58 Q50,52 90,40 T170,28 T230,14 T280,6 L280,70 L0,70 Z"
            fill="url(#heroChartFill)"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
          <motion.path
            d="M0,58 Q50,52 90,40 T170,28 T230,14 T280,6"
            stroke="#34d399"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.45, duration: 1.2, ease: EASE }}
          />
        </svg>
      </motion.div>

      <div className="relative z-10 mt-3 flex gap-2 overflow-hidden">
        {["SEO", "Paid", "Social"].map((tag, i) => (
          <motion.span
            key={tag}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.35, ease: EASE }}
            className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold text-amber-200"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
