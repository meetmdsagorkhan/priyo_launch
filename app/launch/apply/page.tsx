import type { LaunchPlan } from "@/lib/types";

import { ApplicationWizard } from "@/components/launch/application-wizard";

const validPlans = new Set(["starter", "growth", "global"]);

export default function ApplyPage({
  searchParams,
}: {
  searchParams?: { plan?: string };
}) {
  const requestedPlan = searchParams?.plan;
  const initialPlan = (requestedPlan && validPlans.has(requestedPlan) ? requestedPlan : "growth") as LaunchPlan;

  return <ApplicationWizard initialPlan={initialPlan} />;
}

