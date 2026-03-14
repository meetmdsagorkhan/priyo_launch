import { cn } from "@/lib/utils";

export function GlassCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("glass-panel", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_24%,transparent_76%,rgba(255,255,255,0.03))]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

