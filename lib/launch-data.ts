import type { ApplicationDraftValues, LaunchPlan } from "./types";
import { getPlanDefaults } from "./launch-config";

export function emptyAddress(country = "") {
  return {
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country,
  };
}

export function createDefaultDraft(selectedPlan: LaunchPlan = "growth"): ApplicationDraftValues {
  return {
    currentStep: 1,
    selectedPlan,
    founder: {
      fullLegalName: "",
      emailAddress: "",
      phoneNumber: "",
    },
    company: {
      primaryLLCName: "",
      alternativeLLCName: "",
      industry: "",
      businessDescription: "",
      businessWebsite: "",
    },
    stateOfFormation: "",
    ownership: {
      numberOfOwners: 1,
      soleOwner: true,
      owners: [
        {
          name: "",
          ownershipPercentage: 100,
          citizenshipCountry: "",
          address: emptyAddress(""),
        },
      ],
    },
    businessAddress: {
      mode: "priyo_registered_address",
      customAddress: emptyAddress("United States"),
      addRegisteredAgent: getPlanDefaults(selectedPlan).registeredAgent,
    },
    bankingSetup: {
      wantPriyoPayBusinessAccount: getPlanDefaults(selectedPlan).priyoPayAccount,
      expectedMonthlyRevenue: "",
      businessModel: "",
      expectedCustomerRegions: [],
      requiredPaymentMethods: [],
    },
  };
}

export function normalizeDraft(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  incoming: any,
  fallbackPlan: LaunchPlan = "growth",
): ApplicationDraftValues {
  const selectedPlan = incoming?.selectedPlan ?? fallbackPlan;
  const base = createDefaultDraft(selectedPlan);

  // Handle migration from old founder structure and optional form values
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const founderData = incoming?.founder as any;
  const normalizedFounder = {
    fullLegalName: founderData?.fullLegalName ?? base.founder.fullLegalName,
    emailAddress: founderData?.emailAddress ?? base.founder.emailAddress,
    phoneNumber: founderData?.phoneNumber ?? base.founder.phoneNumber,
  };

  return {
    ...base,
    ...incoming,
    selectedPlan,
    founder: normalizedFounder,
    company: {
      ...base.company,
      ...incoming?.company,
    },
    ownership: {
      ...base.ownership,
      ...incoming?.ownership,
      owners:
        incoming?.ownership?.owners?.length
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ? incoming.ownership.owners.map((owner: any) => ({
              ...base.ownership.owners[0],
              ...owner,
              address: {
                ...base.ownership.owners[0].address,
                ...owner.address,
              },
            }))
          : base.ownership.owners,
    },
    businessAddress: {
      ...base.businessAddress,
      ...incoming?.businessAddress,
      customAddress: {
        ...base.businessAddress.customAddress,
        ...incoming?.businessAddress?.customAddress,
      },
    },
    bankingSetup: {
      ...base.bankingSetup,
      ...incoming?.bankingSetup,
      expectedCustomerRegions:
        incoming?.bankingSetup?.expectedCustomerRegions ?? base.bankingSetup.expectedCustomerRegions,
      requiredPaymentMethods:
        incoming?.bankingSetup?.requiredPaymentMethods ?? base.bankingSetup.requiredPaymentMethods,
    },
  };
}

