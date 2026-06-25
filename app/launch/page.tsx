import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Check,
  FileBadge2,
  Globe2,
  Landmark,
  MailCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { ComparisonTable } from "@/components/launch/comparison-table";
import { FAQAccordion } from "@/components/launch/faq-accordion";
import { GlassCard } from "@/components/launch/glass-card";
import { GlowBadge } from "@/components/launch/glow-badge";
import { PricingCard } from "@/components/launch/pricing-card";
import { Section } from "@/components/launch/section";
import { Button } from "@/components/ui/button";
import { COMPARISON_ROWS, FAQ_ITEMS, PLAN_DETAILS } from "@/lib/launch-config";

const trustBadges = [
  "Non-US founders welcome",
  "Banks & Fintech ready",
  "EIN assistance included",
  "Banking with Priyo Pay",
];

const featureCards = [
  { title: "LLC Formation", icon: Building2 },
  { title: "EIN Letter", icon: FileBadge2 },
  { title: "Registered Agent", icon: ShieldCheck },
  { title: "U.S. Business Address", icon: Landmark },
  { title: "Operating Agreement", icon: BriefcaseBusiness },
  { title: "Priyo Pay Fintech Account", icon: Banknote },
];

const featureGrid = [
  "LLC Formation",
  "EIN Filing Assistance",
  "Registered Agent Service",
  "U.S. Business Address",
  "Operating Agreement",
  "Compliance Monitoring",
  "Priyo Pay Business Account",
];

const problemPoints = [
  "Opening U.S. bank accounts",
  "Understanding IRS requirements",
  "Filing company paperwork",
  "Getting access to global payments",
];

const timeline = [
  "Submit your company details",
  "We form your LLC",
  "Receive EIN and formation documents",
  "Activate your Priyo Pay fintech account",
];

const socialProof = ["Stripe Ready", "PayPal Compatible", "Global Founders Welcome", "IRS EIN Filing Support"];
const heroStats = [
  { label: "Setup speed", value: "1 guided flow" },
  { label: "Founder fit", value: "Non-US ready" },
  { label: "Offer", value: "$100 + fees" },
];
const solutionHighlights = [
  "Formation, EIN, and fintech setup in one operating system",
  "Designed for cross-border founders, not only U.S. residents",
  "Package structure mapped to Priyo's real service offerings",
];

export default function LaunchLandingPage() {
  return (
    <main className="launch-shell">
      <section className="section-shell pt-8 sm:pt-10">
        <div className="glass-panel flex flex-col gap-6 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(0,230,138,0.65)]" />
              <p className="mono-label !mb-0">Priyo Horizon</p>
            </div>
            <p className="text-sm text-muted">Global company formation with integrated fintech banking setup.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#pricing"><Button variant="ghost">See Pricing</Button></Link>
            <Link href="/launch/apply"><Button>Start My LLC</Button></Link>
          </div>
        </div>
      </section>

      <section className="section-shell grid items-center gap-12 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
        <div className="relative">
          <div className="card-orb left-6 top-6 h-40 w-40 bg-primary/40" />
          <GlowBadge><Sparkles className="h-4 w-4" /> Global Company Formation</GlowBadge>
          <h1 className="gradient-heading text-balance mt-6 max-w-4xl text-5xl font-semibold leading-[0.98] sm:text-6xl xl:text-[4.75rem]">
            Start Your U.S. Company From Anywhere in the World
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Form your LLC, get your EIN, and open a U.S. fintech business account with Priyo Pay - all in one simple platform powered by Priyo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/launch/apply"><Button size="lg">Start My LLC</Button></Link>
            <Link href="#pricing"><Button size="lg" variant="secondary">See Pricing</Button></Link>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/8 bg-white/[0.035] px-4 py-4 backdrop-blur-xl">
                <div className="font-mono text-[11px] uppercase tracking-[0.26em] text-primary">{item.label}</div>
                <div className="mt-2 text-lg font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 backdrop-blur-xl">
                <Check className="h-4 w-4 text-primary" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-8 left-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="absolute left-8 top-12 h-48 w-48 rounded-full border border-white/6" />
          <div className="relative space-y-4">
            <GlassCard className="animate-float max-w-[26rem] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="mono-label">Formation</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">Certificate of Formation</h3>
                  <p className="mt-2 text-sm text-muted">U.S. LLC approved and delivered to your dashboard.</p>
                </div>
                <BadgeCheck className="h-10 w-10 text-primary" />
              </div>
            </GlassCard>
            <GlassCard className="ml-8 max-w-[24rem] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="mono-label">Tax</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">EIN Letter</h3>
                  <p className="mt-2 text-sm text-muted">IRS filing support with digital delivery and founder-friendly guidance.</p>
                </div>
                <MailCheck className="h-10 w-10 text-cyan-300" />
              </div>
            </GlassCard>
            <GlassCard className="mr-4 max-w-[25rem] border-primary/20 bg-[linear-gradient(135deg,rgba(0,230,138,0.16),rgba(15,26,46,0.92))] p-5 shadow-glow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="mono-label text-[#bbffe1]">Banking</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">Banking with Priyo Pay</h3>
                  <p className="mt-2 text-sm text-slate-200/85">Activate your fintech business account after formation and EIN support are complete.</p>
                </div>
                <Globe2 className="h-10 w-10 text-[#9ff7cf]" />
              </div>
            </GlassCard>
            <GlassCard className="ml-14 max-w-[18rem] border-white/8 bg-[rgba(8,14,26,0.76)] p-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Readiness signal</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(0,230,138,0.8)]" />
                <p className="text-sm text-white">Formation + banking in one guided sequence</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <Section eyebrow="Social proof" title="Built for founders who need global payments from day one" description="Position your U.S. company to accept payments, open platform relationships, and operate with confidence.">
        <div className="grid gap-4 md:grid-cols-4">
          {socialProof.map((item) => (
            <GlassCard key={item} className="p-5 text-center transition duration-300 hover:-translate-y-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">Verified</p>
              <p className="mt-3 text-base font-semibold text-white">{item}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="The problem" title="Starting a U.S. company is complicated for global founders" description="Priyo Horizon turns fragmented formation, tax, and banking tasks into one clear experience.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {problemPoints.map((point) => (
            <GlassCard key={point} className="p-5 transition duration-300 hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-300">
                <ArrowRight className="h-5 w-5 rotate-45" />
              </div>
              <p className="text-lg font-semibold text-white">{point}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="The solution" title="Priyo Horizon handles everything" description="Formation, EIN support, banking readiness, and operating documents in one coordinated flow.">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="p-6 sm:p-8">
            <p className="mono-label mb-4">Why it feels faster</p>
            <div className="space-y-4">
              {solutionHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-primary" />
                  <p className="text-sm leading-6 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
          </GlassCard>
          <div className="grid gap-4 md:grid-cols-2">
          {featureCards.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title} className="p-6 transition duration-300 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Handled inside the same Priyo Horizon workflow so founders move faster with fewer vendors.</p>
              </GlassCard>
            );
          })}
          </div>
        </div>
      </Section>

      <Section eyebrow="How it works" title="A guided four-step launch timeline" description="The onboarding mirrors a premium fintech product: guided, calm, and designed for clarity.">
        <div className="grid gap-4 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <GlassCard key={item} className="p-6 transition duration-300 hover:-translate-y-1">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-mono text-xs text-primary">
                0{index + 1}
              </div>
              <p className="mt-4 text-lg font-semibold text-white">{item}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Features" title="Everything needed to launch and operate" description="The platform bundles formation services with the banking setup global founders actually need.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureGrid.map((item) => (
            <GlassCard key={item} className="p-5">
              <p className="text-base font-semibold text-white">{item}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section id="pricing" eyebrow="Pricing" title="Choose a launch package that matches your operating stage" description="Packages now follow Priyo's Basic, Standard, and Premium formation structure, with Basic starting at $100 plus state fees.">
        <div className="mb-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="p-6">
            <p className="mono-label mb-3">Launch pricing</p>
            <p className="max-w-2xl text-lg leading-8 text-white">Start lean with Basic or move straight into Standard or Premium if you want higher-touch support for approvals, filings, and operating setup.</p>
          </GlassCard>
          <GlassCard className="p-6">
            <p className="mono-label mb-3">Included mindset</p>
            <p className="text-sm leading-7 text-muted">Every package is presented as a guided product experience rather than a flat legal checklist, so the journey still feels premium even before live payments are added.</p>
          </GlassCard>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {Object.entries(PLAN_DETAILS).map(([key, plan]) => (
            <PricingCard
              key={key}
              name={plan.name}
              priceLabel={plan.priceLabel}
              summary={plan.summary}
              features={plan.features}
              highlight={plan.highlight}
              href={`/launch/apply?plan=${key}`}
            />
          ))}
        </div>
      </Section>

      <Section eyebrow="Comparison" title="Why Priyo Horizon stands out" description="The differentiator is simple: company formation and fintech account readiness live in the same product.">
        <ComparisonTable rows={COMPARISON_ROWS} />
      </Section>

      <Section eyebrow="FAQ" title="Answers for non-US founders" description="Clear answers to the questions founders usually ask before they commit.">
        <FAQAccordion items={FAQ_ITEMS} />
      </Section>

      <Section eyebrow="Launch now" title="Launch your U.S. company today" description="Move from idea to entity setup, EIN support, and Priyo Pay readiness in one flow.">
        <GlassCard className="flex flex-col items-start justify-between gap-6 p-8 lg:flex-row lg:items-center">
          <div>
            <p className="mono-label mb-3">Global founders welcome</p>
            <p className="max-w-2xl text-lg text-muted">Start the guided application, pick the right launch package, and let Priyo coordinate the formation journey with a cleaner, faster fintech-style onboarding flow.</p>
          </div>
          <Link href="/launch/apply">
            <Button size="lg">Start My LLC</Button>
          </Link>
        </GlassCard>
      </Section>
    </main>
  );
}
