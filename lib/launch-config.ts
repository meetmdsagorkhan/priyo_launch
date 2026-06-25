import type {
  BusinessModel,
  CustomerRegion,
  FormationState,
  Industry,
  LaunchPlan,
  PaymentMethod,
  RevenueBand,
} from "./types";

export const LOCAL_DRAFT_KEY = "priyo-horizon:draft:v1";
export const LOCAL_SUBMISSION_KEY = "priyo-horizon:last-submitted";

export const PLAN_DETAILS: Record<
  LaunchPlan,
  {
    name: string;
    priceLabel: string;
    amount: number;
    summary: string;
    features: string[];
    highlight?: boolean;
  }
> = {
  starter: {
    name: "Basic",
    priceLabel: "$100 + state fees",
    amount: 10000,
    summary: "The entry package for founders who want formation, EIN support, and essential U.S. setup services.",
    features: [
      "LLC Formation",
      "Annual State Compliance",
      "EIN Letter",
      "Acceptance Agent Certificate",
      "1 bank or 1 payment gateway application",
      "Business Office Address",
      "Mail Forwarding (1 Year)",
      "Registered Agent (1 Year)",
      "USA Phone Number",
      "E-commerce Business Guideline",
    ],
  },
  growth: {
    name: "Standard",
    priceLabel: "Custom quote + state fees",
    amount: 0,
    summary: "Adds operating agreement support, BOI filing, tax consultancy, and stronger bank and gateway approval help.",
    features: [
      "Everything in Basic",
      "Operating Agreement",
      "1 approved business bank",
      "1 approved payment gateway",
      "BOI Filing",
      "Tax Consultancy",
      "Priority launch support",
    ],
    highlight: true,
  },
  global: {
    name: "Premium",
    priceLabel: "Custom quote + state fees",
    amount: 0,
    summary: "The highest-touch package with ITIN support and multi-bank, multi-gateway setup for advanced operators.",
    features: [
      "Everything in Standard",
      "Multiple business bank options",
      "Multiple payment gateway options",
      "ITIN Support",
      "Advanced tax consultancy",
      "Expanded launch coordination",
    ],
  },
};

export const STEP_META = [
  { id: 1, label: "Founder Info", caption: "Identity and contact details" },
  { id: 2, label: "Company", caption: "Business name and industry" },
  { id: 3, label: "Formation State", caption: "Choose your LLC jurisdiction" },
  { id: 4, label: "Ownership", caption: "Founders and equity split" },
  { id: 5, label: "Business Address", caption: "Registered address and agent" },
  { id: 6, label: "Banking Setup", caption: "Priyo Pay readiness" },
  { id: 7, label: "Review", caption: "Confirm and submit" },
] as const;

export const INDUSTRY_OPTIONS: { value: Industry; label: string }[] = [
  { value: "software_saas", label: "Software / SaaS" },
  { value: "freelancing", label: "Freelancing" },
  { value: "ecommerce", label: "Ecommerce" },
  { value: "consulting", label: "Consulting" },
  { value: "marketing_agency", label: "Marketing Agency" },
  { value: "crypto_web3", label: "Crypto / Web3" },
  { value: "other", label: "Other" },
];

export const FORMATION_STATE_OPTIONS: {
  value: FormationState;
  label: string;
  benefits: string;
}[] = [
  {
    value: "delaware",
    label: "Delaware",
    benefits: "Best-known legal framework for venture-backed and international founders.",
  },
  {
    value: "wyoming",
    label: "Wyoming",
    benefits: "Founder-friendly annual fees and straightforward maintenance requirements.",
  },
  {
    value: "new_mexico",
    label: "New Mexico",
    benefits: "Low-maintenance setup often chosen for lean remote-first businesses.",
  },
  {
    value: "florida",
    label: "Florida",
    benefits: "Useful when U.S. operational presence or East Coast relationships matter.",
  },
];

export const REVENUE_OPTIONS: { value: RevenueBand; label: string }[] = [
  { value: "below_5k", label: "Less than $5k" },
  { value: "between_5k_50k", label: "$5k-$50k" },
  { value: "above_50k", label: "$50k+" },
];

export const BUSINESS_MODEL_OPTIONS: { value: BusinessModel; label: string }[] = [
  { value: "saas", label: "SaaS" },
  { value: "freelancing", label: "Freelancing" },
  { value: "ecommerce", label: "Ecommerce" },
  { value: "marketplace", label: "Marketplace" },
  { value: "agency", label: "Agency" },
];

export const CUSTOMER_REGION_OPTIONS: { value: CustomerRegion; label: string }[] = [
  { value: "usa", label: "USA" },
  { value: "europe", label: "Europe" },
  { value: "global", label: "Global" },
];

export const PAYMENT_METHOD_OPTIONS: { value: PaymentMethod; label: string }[] = [
  { value: "ach", label: "ACH" },
  { value: "card_payments", label: "Card Payments" },
  { value: "wire_transfers", label: "Wire Transfers" },
  { value: "virtual_cards", label: "Virtual Cards" },
];

export const FAQ_ITEMS = [
  {
    question: "Can non-US residents open an LLC?",
    answer:
      "Yes. Priyo Horizon is designed for global founders and the flow is tailored for non-US applicants who want a U.S. entity without relocating.",
  },
  {
    question: "Do I need a Social Security Number?",
    answer:
      "No. The application flow assumes founders may not have an SSN and instead collects the identity and residency information needed for Priyo's review process.",
  },
  {
    question: "How long does LLC formation take?",
    answer:
      "Timelines vary by state, but the product messaging and dashboard are built around a guided review, document delivery, and status updates by email.",
  },
  {
    question: "Can I open Stripe with this LLC?",
    answer:
      "Yes. Priyo Horizon positions the entity and documentation to help founders become Stripe and PayPal ready once the business is formed.",
  },
  {
    question: "How does the Priyo Pay account work?",
    answer:
      "Applicants can request a Priyo Pay business account during onboarding. Priyo uses that information to assess banking readiness alongside formation data.",
  },
];

export const COMPARISON_ROWS = [
  { label: "LLC formation", atlas: "Included", firstbase: "Included", priyo: "Included" },
  { label: "EIN assistance", atlas: "Included", firstbase: "Included", priyo: "Included" },
  {
    label: "Integrated fintech banking",
    atlas: "Partner ecosystem",
    firstbase: "Partner ecosystem",
    priyo: "Priyo Pay built in",
  },
  { label: "Non-US founder onboarding", atlas: "Supported", firstbase: "Supported", priyo: "Purpose-built" },
  {
    label: "Business address and compliance options",
    atlas: "Add-ons",
    firstbase: "Included in higher tiers",
    priyo: "Included in Premium",
  },
];

export function getPlanDefaults(plan: LaunchPlan) {
  return {
    einFiling: true,
    registeredAgent: true,
    businessAddress: true,
    complianceMonitoring: true,
    priyoPayAccount: plan !== "starter",
  };
}

