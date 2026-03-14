import { cn } from "@/lib/utils";

export function GlowBadge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.28em] text-primary shadow-[0_0_30px_rgba(0,230,138,0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}

