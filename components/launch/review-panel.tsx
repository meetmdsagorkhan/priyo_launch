import { GlassCard } from "./glass-card";

export function ReviewPanel({ title, rows }: { title: string; rows: { label: string; value: string }[] }) {
  return (
    <GlassCard className="p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 space-y-3">
        {rows.map((row) => (
          <div key={`${title}-${row.label}`} className="flex flex-col gap-1 rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">{row.label}</span>
            <span className="text-sm text-white">{row.value}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

