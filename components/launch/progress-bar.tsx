export function ProgressBar({ step, total }: { step: number; total: number }) {
  const width = Math.max((step / total) * 100, 4);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
        <span>Step {Math.min(step, total)} of {total}</span>
        <span>{Math.round(width)}% complete</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/6">
        <div className="h-full rounded-full bg-gradient-to-r from-primary to-[#6cf9d2] shadow-[0_0_20px_rgba(0,230,138,0.35)]" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

