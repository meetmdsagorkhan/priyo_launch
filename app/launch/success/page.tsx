import Link from "next/link";
import { ArrowRight, CheckCircle2, MailCheck, ShieldCheck, Sparkles } from "lucide-react";

import { GlassCard } from "@/components/launch/glass-card";
import { Button } from "@/components/ui/button";

export default function SuccessPage({ searchParams }: { searchParams?: { draft?: string } }) {
  const draftToken = searchParams?.draft ?? "pending";

  return (
    <main className="launch-shell min-h-screen">
      <section className="section-shell flex min-h-screen items-center justify-center py-16">
        <div className="w-full max-w-4xl space-y-6">
          <GlassCard className="border-primary/20 bg-[linear-gradient(180deg,rgba(0,230,138,0.12),rgba(10,18,30,0.94))] p-8 shadow-glow sm:p-10">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/15 text-primary">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <p className="mono-label mb-4">Application submitted</p>
            <h1 className="text-4xl font-semibold text-white">Your application has been submitted successfully.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
              Priyo Horizon has your company formation request. Our team will review your details, begin LLC formation, and keep you updated by email.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/15 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Draft reference: {draftToken}
            </div>
          </GlassCard>

          <div className="grid gap-4 md:grid-cols-3">
            {[{ icon: ShieldCheck, title: "Review underway", copy: "Our team will review your application and documents." }, { icon: Sparkles, title: "Formation begins", copy: "We will begin LLC formation once the review is cleared." }, { icon: MailCheck, title: "Email updates", copy: "You will receive progress updates and next steps by email." }].map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.title} className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-primary"><Icon className="h-5 w-5" /></div>
                  <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.copy}</p>
                </GlassCard>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href={`/dashboard?draft=${draftToken}`}><Button size="lg">Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            <Link href="/launch"><Button size="lg" variant="secondary">Back to Launch</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

