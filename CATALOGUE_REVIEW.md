# Cocoa Atelier — Catalogue Normalization & Review Report

## Executive Summary
This report documents the end-to-end normalization, deduplication, collision resolution, and audit rules applied to the product dataset extracted from the supplier export.

The source export comprised unaligned tabular records where numerical fields (purchase price, tax rate, quantity, and selling price) could not be unambiguously aligned across rows. To guarantee integrity, all unverified selling prices are held as `null` (hidden in customer-facing views rather than rendering ₹0 or artificial discounts).

---

## 1. Safe Normalization
| Item / Field | Source Observation | Normalization Applied | Rationale & Safety |
| :--- | :--- | :--- | :--- |
| **Weight Units** | `1kg`, `250G`, `500g`, `-250g`, `Filling1kg` | Standardized to canonical international format: `250 g`, `500 g`, `750 g`, `1 kg`, `100 g`. | Eliminates typographical noise and allows exact filtering by size. |
| **Volume Units** | `Ghee - 400 ml` | Standardized to `400 ml` (`volumeMl: 400`). | Distinguishes volumetric liquid measures from dry weights. |
| **Day & Night Inversion** | `Basic - Day & Night` (250g, 500g, 750g) vs `Day & Night – Basic 1kg` | Consolidated all 4 sizes under the canonical family `Day & Night — Basic`. | Eliminates fragmented family cards and groups all four confirmed variants into one card. |
| **Punctuation & Hyphens** | Inconsistent en-dashes (`–`), hyphens (`-`), and spaces | Standardized to clean en-dashes (`—`) with uniform spacing across titles. | Enhances editorial visual elegance. |
| **Title Casing** | `Roasted Cashew white 1kg` | Normalized to `Roasted Cashew White`. | Preserves product identity while adhering to luxury atelier casing standards. |

---

## 2. Duplicate Consolidation
| Product Family | Source Rows Affected | Source Codes | Consolidation Details |
| :--- | :--- | :--- | :--- |
| **Dark Honey** | Pages 3 & 11 repeated `Dark Honey – 250g`, `500g`, and `750g` entries | `DH250`, `DH500`, `DH750` | Duplicates consolidated into one verified variant set: `250 g`, `500 g`, `750 g`, and `1 kg`. Prevents duplicate selection chips in customer dialogs. |

---

## 3. Code Collision Resolution
| Item Codes | Colliding Products | Resolution |
| :--- | :--- | :--- |
| `WCHY` | `White Crunchy` & `White Cherry` | Both products share the `WCHY` prefix in the source export. Resolved by keeping internal slugs completely separate (`white-crunchy` and `white-cherry`). |
| `PF` | `Pineapple — Flavour` & `Pista — Flavour` | Both items shared the code `PF`. Resolved by creating separate unique IDs (`prod-pineapple-flavour` and `prod-pista-flavour`). |

---

## 4. Identity & Classification Decisions
1. **Ambiguous Chocolate Bases**:
   - Products such as `Nice Pista`, `Roasted Almond`, `Dama Fruit & Nut`, `Orange`, and `Hazelnut` did not specify whether the base is white, milk, or dark chocolate.
   - *Decision*: Assigned to `Flavours & Favourites` rather than inventing an unconfirmed cocoa base.
2. **Day & Night Separation**:
   - `Day & Night — Basic` and `Day & Night — Filling` are kept as two distinct product families with their own variants.
3. **Assortment Integrity**:
   - `Stuffed Cookies & Chocolate — 5 Varieties` is preserved as a single listing (`SCC5`). No artificial variety names were invented.
4. **Flavour Listings without Stated Weight**:
   - `Mango — Flavour`, `Strawberry — Flavour`, `Pineapple — Flavour`, and `Pista — Flavour` have no weight confirmed in source data. Stored with single standard variant without fabricated grammage.
5. **Distinct Cherry Listings**:
   - Preserved as four distinct products: `Cherry`, `Cherry with Chocolate`, `White Cherry`, and `White Cherry Top`.
6. **Other / Requires Confirmation**:
   - `Sandalwood Colors` and `Wine Bottle` are preserved in a neutral category (`other`) pending stakeholder clarification.

---

## 5. Unmapped & Financial Fields
- **Selling Prices**: Retained as `null`. The storefront displays a luxury showcase status: *"Verified boutique pricing upon opening"*.
- **Purchase Prices**: Fully excluded from all public code and client bundles.
- **Taxes & HSN/SAC**: Not exposed to customer UI.
- **Stock Counts**: Omitted to avoid misleading artificial scarcity indicators.

---

## 6. Full Product Families (72 Listings) Summary
- **24 Chocolate Families with 4 Confirmed Sizes (250 g, 500 g, 750 g, 1 kg)**: 96 total variants across 24 product cards.
- **4 Flavour Listings**: Standalone listings.
- **15 Confectionery & Treats**: Including confirmed 100 g sizes for Fruit Jelly and Choco Chips.
- **3 Cakes & Bakery**: Brownie with Chocolate, Red Velvet, Chocolate Bun.
- **9 Tea & Coffee**: Filter coffee, blue tea, hot chocolate coffee, drinking chocolate, etc.
- **4 Café Food & Drinks**: Egg puffs, veg puffs, avocado sandwich, avocado milkshake.
- **2 Pantry Staples**: Ghee (400 ml) and pure honey.
- **9 Personal Care & Botanicals**: Essential oils, rosewater combo, aloe gel, bath brush.
- **2 Other / Requiring Confirmation**: Sandalwood Colors and Wine Bottle.
