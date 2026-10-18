import React, { useState } from "react";
import { products } from "../data/products";
import { Sparkles, ArrowUpRight } from "lucide-react";

interface EverydayFindsProps {
  onSelectProduct: (productSlug: string) => void;
}

export const EverydayFinds: React.FC<EverydayFindsProps> = ({ onSelectProduct }) => {
  const [activeSubcat, setActiveSubcat] = useState<"all" | "pantry" | "personal-care" | "other">("all");

  const findsItems = products.filter(
    (p) =>
      p.categoryId === "pantry" ||
      p.categoryId === "personal-care" ||
      p.categoryId === "other"
  );

  const displayedItems =
    activeSubcat === "all"
      ? findsItems
      : findsItems.filter((p) => p.categoryId === activeSubcat);

  return (
    <section className="everyday-finds-section" aria-labelledby="finds-heading">
      <div className="section-header">
        <span className="section-eyebrow">
          <Sparkles size={13} />
          <span>SUPPORTING CATEGORIES</span>
        </span>
        <h2 id="finds-heading" className="section-title">
          Everyday Finds & Botanicals
        </h2>
        <p className="section-description">
          Mindfully curated traditional pantry staples, botanical oils, and natural care essentials.
        </p>
      </div>

      {/* Quieter Sub-Category Pill Tabs */}
      <div className="finds-tab-row" role="tablist" aria-label="Filter Everyday Finds">
        <button
          type="button"
          role="tab"
          aria-selected={activeSubcat === "all"}
          className={`finds-tab ${activeSubcat === "all" ? "is-active" : ""}`}
          onClick={() => setActiveSubcat("all")}
        >
          All Everyday Finds ({findsItems.length})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeSubcat === "pantry"}
          className={`finds-tab ${activeSubcat === "pantry" ? "is-active" : ""}`}
          onClick={() => setActiveSubcat("pantry")}
        >
          Pantry & Kitchen (2)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeSubcat === "personal-care"}
          className={`finds-tab ${activeSubcat === "personal-care" ? "is-active" : ""}`}
          onClick={() => setActiveSubcat("personal-care")}
        >
          Botanicals & Personal Care (9)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeSubcat === "other"}
          className={`finds-tab ${activeSubcat === "other" ? "is-active" : ""}`}
          onClick={() => setActiveSubcat("other")}
        >
          Specialty Curations (2)
        </button>
      </div>

      {/* Grid with Quieter Minimal Treatment */}
      <div className="finds-grid">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="finds-card"
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
            <div className="finds-card-meta">
              <span className="finds-cat-tag">
                {item.categoryId === "personal-care"
                  ? "Care"
                  : item.categoryId === "pantry"
                  ? "Pantry"
                  : "Specialty"}
              </span>
              {item.variants[0]?.label && (
                <span className="finds-size-tag">{item.variants[0].label}</span>
              )}
            </div>

            <h3 className="finds-card-title">{item.name}</h3>

            <p className="finds-card-desc">{item.description}</p>

            <div className="finds-card-footer">
              <span className="finds-inspect-btn">
                <span>View Details</span>
                <ArrowUpRight size={13} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
