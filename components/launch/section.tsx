import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  title,
  description,
  className,
  children,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("section-shell", className)}>
      <div className="mb-10 max-w-3xl">
        {eyebrow ? (
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
            <p className="mono-label">{eyebrow}</p>
          </div>
        ) : null}
        <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

