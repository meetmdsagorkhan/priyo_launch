import { z } from "zod";

export const addressSchema = z.object({
  street: z.string().min(1, "Street is required."),
  city: z.string().min(1, "City is required."),
  state: z.string().min(1, "State or province is required."),
  postalCode: z.string().min(1, "Postal code is required."),
  country: z.string().min(1, "Country is required."),
});

export const uploadDocumentSchema = z.object({
  id: z.string().min(1),
  fileName: z.string().min(1),
  mimeType: z.string().min(1),
  size: z.number().positive(),
  type: z.enum(["passport_id", "proof_of_address", "ein_letter", "formation_certificate", "operating_agreement"]),
  uploadStatus: z.enum(["pending_upload", "uploaded", "generated"]),
  storageKey: z.string().nullable().optional(),
});

export const founderSchema = z.object({
  fullLegalName: z.string().min(2, "Full legal name is required."),
  emailAddress: z.email("Enter a valid email address."),
  phoneNumber: z.string().min(7, "Phone number is required."),
});

export const founderBootstrapSchema = founderSchema.extend({
  passportDocument: uploadDocumentSchema.nullable().optional(),
});

export const companySchema = z.object({
  primaryLLCName: z.string().min(2, "Primary LLC name is required."),
  alternativeLLCName: z.string().optional(),
  industry: z.enum([
    "software_saas",
    "freelancing",
    "ecommerce",
    "consulting",
    "marketing_agency",
    "crypto_web3",
    "other",
  ]),
  businessDescription: z.string().min(10, "Tell us a bit more about the business."),
  businessWebsite: z.union([z.literal(""), z.url("Enter a valid website URL.")]),
});

export const ownershipOwnerSchema = z.object({
  name: z.string().min(1, "Owner name is required."),
  ownershipPercentage: z.number().min(1, "Ownership percentage must be at least 1.").max(100, "Ownership percentage cannot exceed 100."),
  citizenshipCountry: z.string().min(1, "Citizenship country is required."),
  address: addressSchema,
});

export const ownershipSchema = z
  .object({
    numberOfOwners: z.number().min(1).max(10),
    soleOwner: z.boolean(),
    owners: z.array(ownershipOwnerSchema).min(1, "At least one owner is required."),
  })
  .superRefine((value, ctx) => {
    if (value.soleOwner) {
      if (value.owners.length !== 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["owners"],
          message: "Sole owner applications should contain a single owner.",
        });
      }
      if (value.owners[0] && value.owners[0].ownershipPercentage !== 100) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["owners", 0, "ownershipPercentage"],
          message: "A sole owner must hold 100% ownership.",
        });
      }
    }

    const total = value.owners.reduce((sum, owner) => sum + owner.ownershipPercentage, 0);
    if (Math.round(total) !== 100) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["owners"],
        message: "Total ownership must equal 100%.",
      });
    }
  });

export const businessAddressSchema = z
  .object({
    mode: z.enum(["priyo_registered_address", "custom"]),
    customAddress: addressSchema,
    addRegisteredAgent: z.boolean(),
  })
  .superRefine((value, ctx) => {
    if (value.mode !== "custom") {
      return;
    }

    const result = addressSchema.safeParse(value.customAddress);
    if (!result.success) {
      for (const issue of result.error.issues) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["customAddress", ...(issue.path ?? [])],
          message: issue.message,
        });
      }
    }
  });

export const bankingSetupSchema = z
  .object({
    wantPriyoPayBusinessAccount: z.boolean(),
    expectedMonthlyRevenue: z.enum(["below_5k", "between_5k_50k", "above_50k"]).or(z.literal("")),
    businessModel: z.enum(["saas", "freelancing", "ecommerce", "marketplace", "agency"]).or(z.literal("")),
    expectedCustomerRegions: z.array(z.enum(["usa", "europe", "global"])),
    requiredPaymentMethods: z.array(z.enum(["ach", "card_payments", "wire_transfers", "virtual_cards"])),
  })
  .superRefine((value, ctx) => {
    if (!value.wantPriyoPayBusinessAccount) {
      return;
    }

    if (!value.expectedMonthlyRevenue) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["expectedMonthlyRevenue"],
        message: "Expected monthly revenue is required for Priyo Pay review.",
      });
    }

    if (!value.businessModel) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["businessModel"],
        message: "Business model is required for Priyo Pay review.",
      });
    }

    if (!value.expectedCustomerRegions.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["expectedCustomerRegions"],
        message: "Select at least one customer region.",
      });
    }

    if (!value.requiredPaymentMethods.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["requiredPaymentMethods"],
        message: "Select at least one payment method.",
      });
    }
  });

export const applicationDraftSchema = z.object({
  applicationId: z.string().optional(),
  draftToken: z.string().optional(),
  currentStep: z.number().min(1).max(7),
  selectedPlan: z.enum(["starter", "growth", "global"]),
  founder: founderSchema,
  company: companySchema,
  stateOfFormation: z.enum(["delaware", "wyoming", "new_mexico", "florida"]),
  ownership: ownershipSchema,
  businessAddress: businessAddressSchema,
  bankingSetup: bankingSetupSchema,
});

export const draftCreateSchema = z.object({
  selectedPlan: z.enum(["starter", "growth", "global"]),
  founder: founderBootstrapSchema,
});

export const uploadRequestSchema = z.object({
  draftToken: z.string().min(1),
  documentType: z.enum(["passport_id", "proof_of_address", "ein_letter", "formation_certificate", "operating_agreement"]),
  fileName: z.string().min(1),
  mimeType: z.string().min(1),
  size: z.number().min(1).max(20 * 1024 * 1024),
});

export const uploadCompleteSchema = z.object({
  draftToken: z.string().min(1),
  documentId: z.string().min(1),
});

