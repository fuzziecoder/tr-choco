import React from "react";
import { heroImages } from "../data/assetManifest";
import type { CategoryId, CollectionId } from "../types/catalogue";
import { ArrowRight, Plus, Sparkles, Heart } from "lucide-react";

interface BentoShowcaseProps {
  onSelectProduct: (productSlug: string) => void;
  onFilterCategory: (categoryId: CategoryId) => void;
  onFilterCollection: (collectionId: CollectionId) => void;
}

export const BentoShowcase: React.FC<BentoShowcaseProps> = ({
  onSelectProduct,
  onFilterCategory,
  onFilterCollection,
}) => {
  return (
    <section className="bento-section" aria-label="Curated Boutique Vitrine">
      <div className="bento-grid">
        {/* ============================================================
            ROW 1 & 2: Asymmetric 3-Column Bento (Screenshot Exact)
            ============================================================ */}

        {/* Column 1: Left Tall Card + Left Bottom Card */}
        <div className="bento-col bento-col-left">
          {/* Card 1: Left Tall (Lavender Tinted with Floating Macaron) */}
          <div
            className="bento-card card-tall card-lavender-glow"
            role="button"
            tabIndex={0}
            onClick={() => onSelectProduct("white-strawberry")}
            onKeyDown={(e) => e.key === "Enter" && onSelectProduct("white-strawberry")}
            aria-label="View White Strawberry Macaron Details"
          >
            <div className="bento-image-container">
              <img
                src={heroImages.macaronLavender}
                alt="Gourmet pink strawberry macaron with creamy vanilla filling"
                className="bento-image"
                loading="eager"
                decoding="async"
                width={380}
                height={260}
              />
            </div>
            <div className="bento-overlay-caption">
              <span className="caption-tag">White Strawberry</span>
              <p className="caption-sub">Hand-piped Ganache</p>
            </div>
          </div>

          {/* Card 2: Left Small Underneath (Pale Sage with Cherry Cupcake) */}
          <div
            className="bento-card card-square card-sage"
            role="button"
            tabIndex={0}
            onClick={() => onSelectProduct("cherry-with-chocolate")}
            onKeyDown={(e) => e.key === "Enter" && onSelectProduct("cherry-with-chocolate")}
            aria-label="View Cherry with Chocolate Confectionery"
          >
            <div className="bento-image-container">
              <img
                src={heroImages.cupcakeCherry}
                alt="Vanilla cupcake with buttercream swirl and glossy red cherry"
                className="bento-image"
                loading="eager"
                decoding="async"
                width={380}
                height={200}
              />
            </div>
            <div className="bento-overlay-caption">
              <span className="caption-tag">Cherry Confection</span>
            </div>
          </div>
        </div>

        {/* Column 2: Center Top Lavender Editorial + Center Landscape Card */}
        <div className="bento-col bento-col-center">
          {/* Card 3: Center Top Lavender Editorial Card */}
          <div
            className="bento-card card-editorial card-lavender"
            role="button"
            tabIndex={0}
            onClick={() => onFilterCollection("truffles-filled")}
            onKeyDown={(e) => e.key === "Enter" && onFilterCollection("truffles-filled")}
            aria-label="Browse Truffles & Filled Chocolates Collection"
          >
            <div className="editorial-meta-dots" aria-hidden="true">
              <span className="dot dot-cream" />
              <span className="dot dot-blush" />
              <span className="dot dot-cocoa" />
            </div>

            <div className="editorial-content">
              <span className="editorial-eyebrow">LAYERS OF LOVELY</span>
              <h2 className="editorial-heading">Signature Truffles & Pralines</h2>
              <p className="editorial-desc">
                Slow-churned hazelnut ganache, fresh cream infusion, and toasted coconut shells.
              </p>
            </div>

            <div className="editorial-footer">
              <span className="bento-pill-btn">
                <Plus size={13} />
                <span>Explore Truffles</span>
              </span>
            </div>
          </div>

          {/* Card 4: Center Large Landscape Product Card */}
          <div
            className="bento-card card-landscape card-warm-white"
            role="button"
            tabIndex={0}
            onClick={() => onFilterCategory("cakes-bakery")}
            onKeyDown={(e) => e.key === "Enter" && onFilterCategory("cakes-bakery")}
            aria-label="Explore Fresh Bakery Vitrine"
          >
            <div className="bento-image-container">
              <img
                src={heroImages.cupcakesDisplay}
                alt="Artisanal display of gourmet cupcakes and lavender macaron on white ceramic pedestal"
                className="bento-image"
                loading="lazy"
              />
            </div>

            <div className="landscape-badge-row">
              <div className="floating-bento-badge">
                <Sparkles size={13} className="badge-sparkle" />
                <span>Vitrine Selection</span>
                <Plus size={13} />
              </div>
              <div className="floating-mini-icon">
                <Heart size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Right Tall Macaron Stack + Right Small Promo Card */}
        <div className="bento-col bento-col-right">
          {/* Card 5: Right Tall Collection Card (Stacked Floating Macarons) */}
          <div
            className="bento-card card-tall card-cream-light"
            role="button"
            tabIndex={0}
            onClick={() => onFilterCollection("flavours-favourites")}
            onKeyDown={(e) => e.key === "Enter" && onFilterCollection("flavours-favourites")}
            aria-label="Browse Flavours & Favourites"
          >
            <div className="bento-image-container">
              <img
                src={heroImages.macaronsStack}
                alt="Three French macarons floating in vertical column: pistachio, blush, and raspberry"
                className="bento-image"
                loading="lazy"
              />
            </div>
            <div className="bento-overlay-caption">
              <span className="caption-tag">Flavour Trilogy</span>
              <p className="caption-sub">Pistachio • Rose • Currant</p>
            </div>
          </div>

          {/* Card 6: Right Small Cream-to-Pink Promotional Card */}
          <div
            className="bento-card card-square card-blush-gradient"
            role="button"
            tabIndex={0}
            onClick={() => onFilterCategory("chocolates")}
            onKeyDown={(e) => e.key === "Enter" && onFilterCategory("chocolates")}
            aria-label="Browse Chocolate Gifts"
          >
            <div className="promo-content">
              <span className="promo-eyebrow">THE SWEET SPOT</span>
              <h3 className="promo-heading">Some gifts need no occasion.</h3>
              <p className="promo-sub">Deeply delicious everyday cocoa.</p>
              <div className="promo-action">
                <span className="bento-pill-btn pill-light">
                  <span>Discover</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          ROW 3: Wide Sage Artisanal Bakes Card (Screenshot Exact)
          ============================================================ */}
      <div className="bento-wide-row">
        <div
          className="bento-card card-wide-sage"
          role="button"
          tabIndex={0}
          onClick={() => onFilterCategory("cakes-bakery")}
          onKeyDown={(e) => e.key === "Enter" && onFilterCategory("cakes-bakery")}
          aria-label="Explore Artisanal Bakes & Pastries"
        >
          <div className="wide-text-side">
            <span className="wide-eyebrow">CRAFT & HERITAGE</span>
            <h3 className="wide-heading">Artisanal Bakes & Pastries</h3>
            <p className="wide-description">
              Soft layered sponge cakes, chocolate brownies with molten ganache centres, and tender morning brioche.
            </p>
            <div className="wide-btn-group">
              <span className="bento-pill-btn pill-dark">
                <span>Explore Bakes</span>
              </span>
              <span className="bento-pill-btn pill-outline">
                <span>View Menu</span>
              </span>
            </div>
          </div>

          <div className="wide-image-side">
            <img
              src={heroImages.spongeSlice}
              alt="Slice of vanilla layered sponge cake with white piped buttercream rosettes on sage linen"
              className="wide-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* ============================================================
          ROW 4: Bottom Pair (Red Velvet & Purple Truffle + Lavender Hamper)
          ============================================================ */}
      <div className="bento-bottom-row">
        {/* Left: Red Velvet & Purple Confection */}
        <div
          className="bento-card card-bottom-split card-sage-light"
          role="button"
          tabIndex={0}
          onClick={() => onSelectProduct("red-velvet")}
          onKeyDown={(e) => e.key === "Enter" && onSelectProduct("red-velvet")}
          aria-label="View Red Velvet Bake Details"
        >
          <div className="bento-image-container">
            <img
              src={heroImages.redVelvetTruffle}
              alt="Slice of deep red velvet cake beside a lavender purple truffle"
              className="bento-image"
              loading="lazy"
            />
          </div>
          <div className="bento-overlay-caption">
            <span className="caption-tag">Red Velvet & Praline</span>
          </div>
        </div>

        {/* Right: Lavender Confectionery Box / Hamper Card */}
        <div
          className="bento-card card-bottom-split card-lavender"
          role="button"
          tabIndex={0}
          onClick={() => onSelectProduct("stuffed-cookies-chocolate")}
          onKeyDown={(e) => e.key === "Enter" && onSelectProduct("stuffed-cookies-chocolate")}
          aria-label="View Artisan Chocolate Boxes & Hampers"
        >
          <div className="editorial-content">
            <span className="editorial-eyebrow">CURATED HAMPERS</span>
            <h3 className="editorial-heading">Artisan Chocolate Boxes</h3>
            <p className="editorial-desc">
              Custom assorted assortments of stuffed cookies, chocolate beans bottles, and hand-dipped dragees.
            </p>
          </div>
          <div className="editorial-footer">
            <span className="bento-pill-btn pill-dark">
              <span>View Hampers</span>
              <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
