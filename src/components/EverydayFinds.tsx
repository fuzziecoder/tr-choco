import React, { useState } from "react";
import { products } from "../data/products";
import { findsBentoImages } from "../data/assetManifest";
import { Sparkles, ArrowUpRight, ArrowRight } from "lucide-react";

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
          Everyday Finds &amp; Botanicals
        </h2>
        <p className="section-description">
          Mindfully curated traditional pantry staples, botanical oils, and natural care essentials.
        </p>
      </div>

      {/* Editorial Bento Showcase Grid (Exact Reference Image Style) */}
      <div className="finds-bento-container">
        <div className="finds-bento-grid">
          {/* Card 1: Top Left - Pantry Staples */}
          <div
            className="bento-find-card bento-card-pantry"
            role="button"
            tabIndex={0}
            onClick={() => onSelectProduct("ghee-400ml")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelectProduct("ghee-400ml")}
            aria-label="Discover Pure Simmered Desi Ghee and Raw Honey"
          >
            <div className="bento-card-bg-wrap">
              <img
                src={findsBentoImages.pantry}
                alt="Pure Simmered Desi Ghee & Raw Honey"
                className="bento-card-img bento-card-img-right"
                loading="lazy"
                decoding="async"
                width={500}
                height={320}
              />
            </div>
            <div className="bento-card-content">
              <span className="bento-meta-text">2 Products · Kitchen Staples</span>
              <div className="bento-pill-tag dark">Traditional Pantry</div>
              <h3 className="bento-card-title dark-text">
                Pure Simmered Desi Ghee &amp; Raw Forest Honey
              </h3>
            </div>
          </div>

          {/* Card 2: Bottom Left - Botanical Radiance */}
          <div
            className="bento-find-card bento-card-oils"
            role="button"
            tabIndex={0}
            onClick={() => onSelectProduct("kasturi-manjal")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelectProduct("kasturi-manjal")}
            aria-label="Explore Pure Herbal Radiance and Wild Kasturi Manjal"
          >
            <div className="bento-card-bg-wrap">
              <img
                src={findsBentoImages.oils}
                alt="Wild Kasturi Manjal & Herbal Extracts"
                className="bento-card-img bento-card-img-right"
                loading="lazy"
                decoding="async"
                width={500}
                height={320}
              />
            </div>
            <div className="bento-card-content">
              <span className="bento-meta-text">Herbal Care · Traditional Botanicals</span>
              <div className="bento-pill-tag dark">Botanical Care</div>
              <h3 className="bento-card-title dark-text">
                Authentic Herbal Radiance: Pure Wild Kasturi Manjal &amp; Rosewater Care
              </h3>
            </div>
          </div>

          {/* Card 3: Center Column - Tall Full Height Feature */}
          <div
            className="bento-find-card bento-card-center"
            role="button"
            tabIndex={0}
            onClick={() => onSelectProduct("body-lotion")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelectProduct("body-lotion")}
            aria-label="Elevate Your Daily Ritual with Swasthya Botanical Care"
          >
            <div className="bento-card-bg-wrap">
              <img
                src={findsBentoImages.ritualCenter}
                alt="Swasthya Botanical Ritual & Body Care"
                className="bento-card-img bento-card-img-cover"
                loading="lazy"
                decoding="async"
                width={500}
                height={660}
              />
              <div className="bento-card-gradient-overlay" />
            </div>
            <div className="bento-card-content bento-content-tall">
              <span className="bento-meta-text light">12 Products · Swasthya Care</span>
              <div className="bento-pill-tag light">Botanical Body Care</div>
              <h3 className="bento-card-title light-text">
                Elevate Your Daily Ritual: Cold Moisturiser &amp; Jojoba Nourishing Lotions
              </h3>
            </div>
          </div>

          {/* Card 4: Top Right - Skincare Jar */}
          <div
            className="bento-find-card bento-card-aloe"
            role="button"
            tabIndex={0}
            onClick={() => onSelectProduct("aloe-vera-gel")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelectProduct("aloe-vera-gel")}
            aria-label="Get Silky Smooth Skin with Pure Swasthya Aloe Vera Face Gel"
          >
            <div className="bento-card-bg-wrap">
              <img
                src={findsBentoImages.aloeJar}
                alt="Swasthya Aloe Vera Face Gel Cream"
                className="bento-card-img bento-card-img-right"
                loading="lazy"
                decoding="async"
                width={500}
                height={320}
              />
            </div>
            <div className="bento-card-content">
              <span className="bento-meta-text">100g Jar · All Skin Types</span>
              <div className="bento-pill-tag dark">Skincare</div>
              <h3 className="bento-card-title dark-text">
                Get Silky Smooth Skin: Shop Our Pure Botanical Aloe Vera Face Gel
              </h3>
            </div>
          </div>

          {/* Card 5: Bottom Right - Vibrant Crimson Washes */}
          <div
            className="bento-find-card bento-card-wash"
            role="button"
            tabIndex={0}
            onClick={() => onSelectProduct("body-wash")}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelectProduct("body-wash")}
            aria-label="Sensual and Invigorating Body Washes and Cleansers"
          >
            <div className="bento-card-bg-wrap">
              <img
                src={findsBentoImages.vibrantWash}
                alt="Luxury Botanical Body and Face Washes"
                className="bento-card-img bento-card-img-right"
                loading="lazy"
                decoding="async"
                width={500}
                height={320}
              />
            </div>
            <div className="bento-card-content">
              <span className="bento-meta-text light">8 Formulations · 200 ml</span>
              <div className="bento-pill-tag white">Luxury Washes</div>
              <h3 className="bento-card-title light-text">
                Sensual &amp; Invigorating: Saffron, Lavender &amp; Citrus Foaming Cleansers
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Category Filter Navigation */}
      <div className="finds-browse-divider">
        <span className="browse-divider-label">Explore All Catalog Items</span>
      </div>

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
          Pantry &amp; Kitchen (2)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeSubcat === "personal-care"}
          className={`finds-tab ${activeSubcat === "personal-care" ? "is-active" : ""}`}
          onClick={() => setActiveSubcat("personal-care")}
        >
          Botanicals &amp; Personal Care (9)
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

      {/* Visual Product Grid with Images and Details */}
      <div className="finds-visual-grid">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className="finds-visual-card"
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
            {/* Product Image Area */}
            <div
              className="finds-visual-img-wrap"
              style={{ backgroundColor: item.palette?.bg || "#F9F6F0" }}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="finds-visual-img"
                  loading="lazy"
                />
              ) : (
                <div className="finds-visual-placeholder">
                  <span className="placeholder-icon">✦</span>
                  <span className="placeholder-label">{item.name}</span>
                </div>
              )}
              {item.editorialBadge && (
                <span className="finds-visual-badge">{item.editorialBadge}</span>
              )}
            </div>

            {/* Product Details Content */}
            <div className="finds-visual-body">
              <div className="finds-card-meta">
                <span className="finds-cat-tag">
                  {item.categoryId === "personal-care"
                    ? "Care & Botanicals"
                    : item.categoryId === "pantry"
                    ? "Pantry & Kitchen"
                    : "Specialty Curation"}
                </span>
                {item.variants[0]?.label && (
                  <span className="finds-size-tag">{item.variants[0].label}</span>
                )}
              </div>

              <h3 className="finds-visual-title">{item.name}</h3>

              <p className="finds-visual-desc">{item.description}</p>

              <div className="finds-visual-footer">
                <span className="finds-inspect-btn">
                  <span>View Details</span>
                  <ArrowUpRight size={14} />
                </span>
                <span className="finds-explore-action">
                  <span>Explore</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

