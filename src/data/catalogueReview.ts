export interface NormalizationRecord {
  category: "safe-normalization" | "duplicate-consolidation" | "code-collision" | "identity-question" | "unmapped-fields";
  item: string;
  sourceObservation: string;
  resolution: string;
  auditImpact: string;
}

export const catalogueReviewReport: NormalizationRecord[] = [
  {
    category: "safe-normalization",
    item: "Weight and Volume Formats",
    sourceObservation: "Inconsistent representation across export rows: '1kg', '250G', '500g', '-250g', 'Filling1kg'.",
    resolution: "Safely standardized to canonical international format with uniform spacing: '250 g', '500 g', '750 g', '1 kg', '100 g', and '400 ml'.",
    auditImpact: "Zero data loss. Standardized filtering across weight and volume chips."
  },
  {
    category: "safe-normalization",
    item: "Basic - Day & Night / Day & Night — Basic",
    sourceObservation: "1 kg was labeled 'Day & Night – Basic 1kg', while 250g, 500g, 750g were labeled 'Basic - Day & Night'.",
    resolution: "Consolidated all 4 sizes under the canonical family identity 'Day & Night — Basic'.",
    auditImpact: "Unified into single product card with multi-size selector."
  },
  {
    category: "safe-normalization",
    item: "Roasted Cashew white / Dark Cashew",
    sourceObservation: "Lowercase 'white' in 'Roasted Cashew white' and varied en-dashes/hyphens.",
    resolution: "Normalized title case to 'Roasted Cashew White' and standardized typography.",
    auditImpact: "Visual consistency without altering product specification."
  },
  {
    category: "duplicate-consolidation",
    item: "Dark Honey Sizes (250 g, 500 g, 750 g)",
    sourceObservation: "Dark Honey 250g, 500g, and 750g appeared twice in sequential source rows (pages 3 & 11).",
    resolution: "Consolidated duplicate rows into one clean verified variant per size. Recorded consolidation in audit log.",
    auditImpact: "Prevented duplicate variant chips from rendering in user modal."
  },
  {
    category: "code-collision",
    item: "White Crunchy vs White Cherry",
    sourceObservation: "Both families utilize the source item code prefix 'WCHY' in portions of the export.",
    resolution: "Maintained complete product independence. Preserved distinct IDs: 'prod-white-crunchy' and 'prod-white-cherry'.",
    auditImpact: "No collision in internal database keys or catalogue routing."
  },
  {
    category: "code-collision",
    item: "Pineapple — Flavour vs Pista — Flavour",
    sourceObservation: "Both flavour entries were assigned the identical item code 'PF' in source exports.",
    resolution: "Treated as two distinct flavour listings ('pineapple-flavour' and 'pista-flavour').",
    auditImpact: "Separate catalogue listings with independent slugs."
  },
  {
    category: "identity-question",
    item: "Dama Fruit & Nut & Nice Pista",
    sourceObservation: "Uncommon nomenclature in source export without chocolate base definition.",
    resolution: "Preserved exact supplier wording. No assumption made regarding white, milk, or dark base; placed in Flavours & Favourites.",
    auditImpact: "Honest catalogue representation without fabricated attributes."
  },
  {
    category: "identity-question",
    item: "Day & Night — Basic vs Day & Night — Filling",
    sourceObservation: "Distinct variants labeled 'Basic' and 'Filling' with separate item codes (DNB vs DNF).",
    resolution: "Kept completely separate as two distinct product families.",
    auditImpact: "Customers can clearly view both solid layered block and soft ganache filling."
  },
  {
    category: "identity-question",
    item: "Stuffed Cookies & Chocolate — 5 Varieties",
    sourceObservation: "Single line item with code SCC5 mentioning 5 varieties without row enumeration.",
    resolution: "Kept as a single product listing. Did not invent variety names.",
    auditImpact: "Clean presentation as an assorted gift box."
  },
  {
    category: "identity-question",
    item: "Cherry / Cherry with Chocolate / White Cherry Top",
    sourceObservation: "Four distinct cherry-related entries across confectionery and chocolate sections.",
    resolution: "Preserved all four as completely separate listings without conflation.",
    auditImpact: "Accurate representation of diverse confectionery forms."
  },
  {
    category: "unmapped-fields",
    item: "Selling Prices, Purchase Prices & Taxes",
    sourceObservation: "Numeric columns in flattened export are unaligned and unverified across row offsets.",
    resolution: "Set sellingPrice to null for all unverified entries. Never expose purchase prices or invent prices/discounts.",
    auditImpact: "Showcase mode prevents misleading financial data while retaining pristine product discovery."
  }
];
