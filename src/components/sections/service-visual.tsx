"use client";

import {
  Activity,
  Bot,
  CheckCircle2,
  Database,
  Globe,
  MessageSquare,
  Network,
  Radio,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  TrendingUp,
  Wifi,
  Zap,
} from "lucide-react";
import type { ServiceCategory } from "@/types";

export function ServiceVisual({ service }: { service: ServiceCategory }) {
  switch (service.slug) {
    case "software-development":
      return <SoftwareVisual />;
    case "mobile-app-development":
      return <MobileVisual />;
    case "automation-ai":
      return <AIVisual />;
    case "web-development":
      return <WebVisual />;
    case "digital-marketing":
      return <MarketingVisual />;
    case "it-infrastructure":
      return <InfrastructureVisual />;
    default:
      return <SoftwareVisual />;
  }
}

function SoftwareVisual() {
  return (
    <div className="relative flex h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-navy-950/90 to-background p-4 sm:p-6 text-foreground shadow-2xl">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-1 sm:ml-2 truncate font-mono text-[10px] sm:text-xs text-muted-foreground">
            api.airlabs.internal/v2/cluster
          </span>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-emerald-500/10 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Production Active
        </span>
      </div>

      {/* Architecture & API Mockup */}
      <div className="my-4 space-y-3 font-mono text-xs">
        <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] p-3">
          <div className="flex items-center gap-2">
            <span className="rounded bg-navy-600/30 px-1.5 py-0.5 text-[10px] font-semibold text-navy-400">
              GET
            </span>
            <span className="text-white/80">/api/v2/enterprise/auth</span>
          </div>
          <span className="text-emerald-400">200 OK (8ms)</span>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] p-3">
          <div className="flex items-center gap-2">
            <span className="rounded bg-emerald-600/30 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-400">
              POST
            </span>
            <span className="text-white/80">/api/v2/events/dispatch</span>
          </div>
          <span className="text-emerald-400">201 Created (14ms)</span>
        </div>

        <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] p-3">
          <div className="flex items-center gap-2">
            <span className="rounded bg-sky-600/30 px-1.5 py-0.5 text-[10px] font-semibold text-sky-400">
              STREAM
            </span>
            <span className="text-white/80">/ws/telemetry/live</span>
          </div>
          <span className="flex items-center gap-1 text-sky-300">
            <Activity className="h-3 w-3 animate-pulse" /> Syncing
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-2.5 pt-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
          <p className="text-[11px] text-muted-foreground">Availability</p>
          <p className="mt-1 font-display text-lg font-bold text-white">99.99%</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
          <p className="text-[11px] text-muted-foreground">p95 Latency</p>
          <p className="mt-1 font-display text-lg font-bold text-emerald-400">&lt; 18ms</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
          <p className="text-[11px] text-muted-foreground">Security</p>
          <p className="mt-1 font-display text-lg font-bold text-navy-300">SOC2 Type II</p>
        </div>
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative flex h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-navy-950/90 to-background p-4 sm:p-6 text-foreground shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Smartphone className="h-4 w-4 text-navy-400" />
          <span className="text-xs font-semibold text-white/90">
            AirLabs Mobile Engine
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] text-white/80">
            iOS 17+
          </span>
          <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] text-white/80">
            Android 14+
          </span>
        </div>
      </div>

      {/* Phone App Frame Preview */}
      <div className="mx-auto my-3 w-full max-w-[280px] rounded-3xl border-2 border-white/20 bg-background/80 p-4 shadow-xl backdrop-blur">
        {/* Dynamic Island */}
        <div className="mx-auto mb-3 h-4 w-24 rounded-full bg-white/20" />

        <div className="space-y-2.5">
          <div className="rounded-xl bg-navy-600/20 p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-navy-200">Active Users</span>
              <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                +34.2%
              </span>
            </div>
            <p className="mt-1 font-display text-xl font-bold text-white">48,920</p>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-white/5 p-2 text-xs">
            <span className="flex items-center gap-2 text-white/80">
              <Zap className="h-3.5 w-3.5 text-amber-400" /> Frame Rate
            </span>
            <span className="font-mono text-emerald-400">60 FPS Smooth</span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-white/5 p-2 text-xs">
            <span className="flex items-center gap-2 text-white/80">
              <CheckCircle2 className="h-3.5 w-3.5 text-navy-300" /> Biometric FaceID
            </span>
            <span className="text-white/60">Enabled</span>
          </div>
        </div>
      </div>

      {/* App Store Readiness Footnote */}
      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs">
        <span className="text-muted-foreground">App Store & Play Store</span>
        <span className="flex items-center gap-1 font-medium text-emerald-400">
          <CheckCircle2 className="h-3.5 w-3.5" /> 100% Approval Rate
        </span>
      </div>
    </div>
  );
}

function AIVisual() {
  return (
    <div className="relative flex h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-navy-950/90 to-background p-4 sm:p-6 text-foreground shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-semibold text-white/90">
            Autonomous AI & Workflow Orchestrator
          </span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400">
          <Radio className="h-3 w-3 animate-pulse" /> Live Agent
        </span>
      </div>

      {/* Interactive Workflow Flowchart */}
      <div className="my-3 space-y-2.5">
        <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-slate-950">
            <MessageSquare className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-white">Omnichannel Trigger</p>
            <p className="truncate text-[11px] text-emerald-200/80">
              WhatsApp Business, Website Chat, & Email Inbound
            </p>
          </div>
        </div>

        <div className="flex justify-center py-0.5">
          <div className="h-4 w-0.5 bg-gradient-to-b from-emerald-500 to-navy-400" />
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-navy-500/30 bg-navy-500/10 p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy-600 text-white">
            <Bot className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-white">AirLabs Reasoning LLM</p>
            <p className="truncate text-[11px] text-navy-200/80">
              Intent extraction, inventory check & custom business logic
            </p>
          </div>
        </div>

        <div className="flex justify-center py-0.5">
          <div className="h-4 w-0.5 bg-gradient-to-b from-navy-400 to-sky-400" />
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-sky-500/30 bg-sky-500/10 p-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-600 text-white">
            <Database className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-white">Automated CRM & Actions</p>
            <p className="truncate text-[11px] text-sky-200/80">
              HubSpot/Salesforce updated & order confirmed in 0.8s
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs">
        <span className="text-muted-foreground">Automation Uptime</span>
        <span className="font-semibold text-white">24/7 Uninterrupted</span>
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="relative flex h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-navy-950/90 to-background p-4 sm:p-6 text-foreground shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-navy-400" />
          <span className="font-mono text-xs text-white/90">
            https://yourbrand.com
          </span>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
          SSL Protected • Global CDN
        </span>
      </div>

      {/* Lighthouse Scores */}
      <div className="my-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Core Web Vitals Benchmark
        </p>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-500/10 font-display text-sm font-bold text-emerald-300">
              100
            </div>
            <span className="mt-1.5 text-[10px] text-white/70">Performance</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-500/10 font-display text-sm font-bold text-emerald-300">
              100
            </div>
            <span className="mt-1.5 text-[10px] text-white/70">Accessibility</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-500/10 font-display text-sm font-bold text-emerald-300">
              100
            </div>
            <span className="mt-1.5 text-[10px] text-white/70">Best Practices</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-500/10 font-display text-sm font-bold text-emerald-300">
              100
            </div>
            <span className="mt-1.5 text-[10px] text-white/70">SEO</span>
          </div>
        </div>
      </div>

      {/* Web Technology Stack Badges */}
      <div className="flex flex-wrap gap-2 pt-2">
        {["Next.js 14", "React Server Components", "Tailwind CSS", "Shopify Headless", "TypeScript"].map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/80"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function MarketingVisual() {
  return (
    <div className="relative flex h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-navy-950/90 to-background p-4 sm:p-6 text-foreground shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-semibold text-white/90">
            Growth & Acquisition Analytics
          </span>
        </div>
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
          Active Campaign Loop
        </span>
      </div>

      {/* Growth Metric Chart Mockup */}
      <div className="my-3 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] text-muted-foreground">Inbound Leads</p>
            <p className="mt-1 font-display text-2xl font-bold text-white">+248%</p>
            <p className="text-[10px] text-emerald-400">Quarter over Quarter</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] text-muted-foreground">Return on Ad Spend</p>
            <p className="mt-1 font-display text-2xl font-bold text-emerald-400">3.8x</p>
            <p className="text-[10px] text-white/60">Verified Attribution</p>
          </div>
        </div>

        {/* SVG Chart Line */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>Organic & Paid Traffic Curve</span>
            <span className="text-emerald-400">All-Time High</span>
          </div>
          <svg className="h-16 w-full" viewBox="0 0 300 70" fill="none">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#25fabe" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#25fabe" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,60 Q40,55 80,45 T160,35 T220,18 T300,5 L300,70 L0,70 Z"
              fill="url(#chartGradient)"
            />
            <path
              d="M0,60 Q40,55 80,45 T160,35 T220,18 T300,5"
              stroke="#25fabe"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs">
        <span className="text-muted-foreground">SEO & GEO (AI Search)</span>
        <span className="font-semibold text-white">#1 Top 3 Rankings</span>
      </div>
    </div>
  );
}

function InfrastructureVisual() {
  return (
    <div className="relative flex h-full min-h-[260px] sm:min-h-[340px] lg:min-h-[380px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-navy-950/90 to-background p-4 sm:p-6 text-foreground shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-navy-400" />
          <span className="text-xs font-semibold text-white/90">
            Enterprise Infrastructure & Network Stack
          </span>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
          <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
          Secure & Online
        </span>
      </div>

      {/* Network & Hardware Status */}
      <div className="my-3 space-y-2.5">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-600/30 text-navy-300">
              <Network className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Core Network & Firewall</p>
              <p className="text-[10px] text-muted-foreground">10 Gbps SFP+ Optical Uplink</p>
            </div>
          </div>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
            Zero Dropped Packets
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600/30 text-emerald-300">
              <Wifi className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Wi-Fi 6E & Smart Office</p>
              <p className="text-[10px] text-muted-foreground">100% Floor Coverage & Roaming</p>
            </div>
          </div>
          <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
            32 Nodes Active
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600/30 text-sky-300">
              <Server className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Hardware Supply & Licensing</p>
              <p className="text-[10px] text-muted-foreground">Workstations & Microsoft 365 / Google Setup</p>
            </div>
          </div>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
            Turnkey
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs">
        <span className="text-muted-foreground">Support SLAs</span>
        <span className="font-semibold text-white">&lt; 15-Minute Critical Response</span>
      </div>
    </div>
  );
}
