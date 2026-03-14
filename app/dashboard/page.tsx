import { DashboardShell } from "@/components/launch/dashboard-shell";

export default function DashboardPage({
  searchParams,
}: {
  searchParams?: { draft?: string };
}) {
  return (
    <main className="launch-shell min-h-screen">
      <section className="section-shell py-16">
        <DashboardShell initialDraftToken={searchParams?.draft} />
      </section>
    </main>
  );
}
