import React from "react";
import { products } from "../data/products";
import type { CatalogueProduct } from "../types/catalogue";
import { Coffee, ArrowRight } from "lucide-react";
import { SpecularCTA } from "./SpecularCTA";

interface CafeSectionProps {
  onSelectProduct: (productSlug: string) => void;
}

export const CafeSection: React.FC<CafeSectionProps> = ({ onSelectProduct }) => {
  // Curated café items from the central dataset (no duplication of product data)
  const cafeSlugs = [
    "hot-chocolate-coffee",
    "drinking-chocolate",
    "blue-tea",
    "herbal-tea-all-varieties",
    "avocado-sandwich",
    "avocado-milkshake",
    "egg-puffs",
    "veg-puffs",
    "brownie-with-chocolate",
  ];

  const cafeItems = cafeSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is CatalogueProduct => p !== undefined);

  return (
    <section id="cafe" className="cafe-section" aria-labelledby="cafe-heading">
      <div className="section-header">
        <span className="section-eyebrow">
          <Coffee size={13} />
          <span>CAFÉ & DRINKS</span>
        </span>
        <h2 id="cafe-heading" className="section-title">
          Comforting Café Moments
        </h2>
        <p className="section-description">
          Warm brews, flaky savory bakes, and nourishing refreshments served at our boutique tasting counter.
        </p>
      </div>

      <div className="cafe-grid">
        {cafeItems.map((item) => (
          <div
            key={item.id}
            className="cafe-item-card"
            style={{
              backgroundColor: item.palette?.bg || "#FFFDF5",
              borderColor: item.palette?.border || "#EFE7DA",
            }}
            role="button"
            tabIndex={0}
            onClick={() => onSelectProduct(item.slug)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectProduct(item.slug);
              }
            }}
            aria-label={`View details for ${item.name}`}
          >
            <div className="cafe-item-header">
              <span className="cafe-badge">{item.categoryId.toUpperCase()}</span>
              {item.editorialBadge && (
                <span className="cafe-special-badge">{item.editorialBadge}</span>
              )}
            </div>

            <h3 className="cafe-item-title">{item.name}</h3>

            <p className="cafe-item-desc">{item.description}</p>

            <div className="cafe-item-footer">
              <span className="cafe-format-tag">
                {item.variants[0]?.label || "Artisan Serve"}
              </span>
              <span className="cafe-arrow-link" aria-hidden="true">
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="cafe-cta-wrap">
        <SpecularCTA
          variant="secondary"
          size="md"
          href="#catalogue"
        >
          Explore All Teas & Café Offerings
        </SpecularCTA>
      </div>
    </section>
  );
};
