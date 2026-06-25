import { GlassCard } from "./glass-card";

export function ComparisonTable({
  rows,
}: {
  rows: { label: string; atlas: string; firstbase: string; priyo: string }[];
}) {
  return (
    <GlassCard className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <div className="min-w-[760px]">
          <div className="grid grid-cols-[1.2fr_repeat(3,1fr)] border-b border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
            <div className="px-5 py-4">Capability</div>
            <div className="px-5 py-4">Stripe Atlas</div>
            <div className="px-5 py-4">Firstbase</div>
            <div className="bg-primary/10 px-5 py-4 text-primary">Priyo Horizon</div>
          </div>
          {rows.map((row) => (
            <div key={row.label} className="grid grid-cols-[1.2fr_repeat(3,1fr)] border-b border-white/6 text-sm text-muted last:border-b-0">
              <div className="px-5 py-4 text-white">{row.label}</div>
              <div className="px-5 py-4">{row.atlas}</div>
              <div className="px-5 py-4">{row.firstbase}</div>
              <div className="bg-primary/5 px-5 py-4 font-medium text-primary">{row.priyo}</div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

