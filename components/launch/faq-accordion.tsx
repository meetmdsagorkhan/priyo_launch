import { ChevronDown } from "lucide-react";

import { GlassCard } from "./glass-card";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <GlassCard key={item.question} className="group overflow-hidden p-0 transition duration-300 hover:border-primary/20">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-white">
              <span>{item.question}</span>
              <ChevronDown className="h-5 w-5 text-primary transition group-open:rotate-180" />
            </summary>
            <div className="border-t border-white/8 px-6 py-5 text-sm leading-7 text-muted">{item.answer}</div>
          </details>
        </GlassCard>
      ))}
    </div>
  );
}

