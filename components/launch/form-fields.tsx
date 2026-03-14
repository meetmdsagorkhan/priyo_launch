import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export function FintechInput({
  label,
  error,
  helper,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  helper?: string;
}) {
  return (
    <label className={cn("block space-y-2", className)}>
      <span className="text-sm font-medium text-white">{label}</span>
      <input
        {...props}
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-primary/50 focus:bg-white/[0.07]"
      />
      {error ? (
        <span className="flex items-center gap-2 text-sm text-rose-300"><AlertCircle className="h-4 w-4" />{error}</span>
      ) : helper ? (
        <span className="text-sm text-muted">{helper}</span>
      ) : null}
    </label>
  );
}

export function TextareaField({
  label,
  error,
  helper,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
  helper?: string;
}) {
  return (
    <label className={cn("block space-y-2", className)}>
      <span className="text-sm font-medium text-white">{label}</span>
      <textarea
        {...props}
        className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-primary/50 focus:bg-white/[0.07]"
      />
      {error ? <span className="text-sm text-rose-300">{error}</span> : helper ? <span className="text-sm text-muted">{helper}</span> : null}
    </label>
  );
}

export function SelectField({
  label,
  error,
  children,
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("block space-y-2", className)}>
      <span className="text-sm font-medium text-white">{label}</span>
      <select
        {...props}
        className="w-full rounded-2xl border border-white/10 bg-card-deep px-4 py-3 text-white outline-none transition focus:border-primary/50"
      >
        {children}
      </select>
      {error ? <span className="text-sm text-rose-300">{error}</span> : null}
    </label>
  );
}

