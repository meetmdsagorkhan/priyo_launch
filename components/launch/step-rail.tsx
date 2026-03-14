import { Check } from "lucide-react";

import { STEP_META } from "@/lib/launch-config";
import { cn } from "@/lib/utils";

export function StepRail({ currentStep }: { currentStep: number }) {
  return (
    <div className="glass-panel sticky top-28 hidden h-fit p-4 lg:block">
      <div className="mb-4 px-2">
        <p className="mono-label mb-2">Application flow</p>
        <p className="text-sm text-muted">A guided atlas-style setup for global founders.</p>
      </div>
      <div className="space-y-2">
        {STEP_META.map((step) => {
          const isActive = currentStep === step.id;
          const isComplete = currentStep > step.id;
          return (
            <div
              key={step.id}
              className={cn(
                "rounded-2xl border p-4 transition",
                isActive ? "border-primary/40 bg-white/8 shadow-glow" : "border-white/8 bg-white/[0.02]",
                isComplete ? "border-primary/20" : null
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-mono",
                    isActive || isComplete
                      ? "border-primary/40 bg-primary/15 text-primary"
                      : "border-white/10 bg-white/5 text-muted"
                  )}
                >
                  {isComplete ? <Check className="h-4 w-4" /> : step.id}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{step.label}</p>
                  <p className="mt-1 text-xs leading-5 text-muted">{step.caption}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

