import React from "react";
import { products } from "../data/products";
import type { CatalogueProduct } from "../types/catalogue";
import { Coffee, ArrowRight } from "lucide-react";
import { SpecularCTA } from "./SpecularCTA";

interface CafeSectionProps {
  onSelectProduct: (productSlug: string) => void;
}

export const CafeSection: React.FC<CafeSectionProps> = ({ onSelectProduct }) => {
  // Curated café items from the central dataset
  const cafeSlugs = [
    "brownie-tub",
    "mini-cookies-dip",
    "brownie-with-chocolate",
    "donut",
    "avocado-sandwich",
    "veg-sandwich",
    "chocolate-sandwich",
    "masala-sweetcorn",
    "sweetcorn",
    "avocado-milkshake",
    "hot-chocolate-coffee",
    "cold-chocolate-coffee",
    "tea",
    "coffee",
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
            {/* Card Image Slot (Displays image when available, or elegant monogram placeholder) */}
            <div className="cafe-item-img-wrap">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="cafe-item-img"
                  loading="lazy"
                />
              ) : (
                <div className="cafe-item-placeholder">
                  <span className="cafe-placeholder-initial">
                    {item.name.charAt(0)}
                  </span>
                  <span className="cafe-placeholder-brand">TR HOSUR</span>
                </div>
              )}
              {item.editorialBadge && (
                <span className="cafe-special-badge">{item.editorialBadge}</span>
              )}
            </div>

            <div className="cafe-item-body">
              <div className="cafe-item-header">
                <span className="cafe-badge">{item.categoryId.toUpperCase()}</span>
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
