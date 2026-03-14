import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { GlassCard } from "./glass-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingCard({
  name,
  priceLabel,
  summary,
  features,
  href,
  highlight,
}: {
  name: string;
  priceLabel: string;
  summary: string;
  features: string[];
  href: string;
  highlight?: boolean;
}) {
  return (
    <GlassCard
      className={cn(
        "flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1",
        highlight
          ? "border-primary/30 bg-[linear-gradient(180deg,rgba(0,230,138,0.16),rgba(15,26,46,0.88))] shadow-glow"
          : "bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(15,26,46,0.88))]"
      )}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="mono-label mb-3">{highlight ? "Recommended" : "Package"}</p>
          <h3 className="text-2xl font-semibold text-white">{name}</h3>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">{summary}</p>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-black/10 px-4 py-3 text-right">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary">Starting at</div>
          <div className="mt-1 text-right font-mono text-2xl text-white">{priceLabel}</div>
        </div>
      </div>
      <div className="space-y-3 text-sm text-slate-100">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3">
            <Check className="h-4 w-4 text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href={href}>
          <Button className="w-full justify-between" variant={highlight ? "primary" : "secondary"}>
            Select {name}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </GlassCard>
  );
}

