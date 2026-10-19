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
            onClick={() => onSelectProduct("chocolate-bar")}
            onKeyDown={(e) => e.key === "Enter" && onSelectProduct("chocolate-bar")}
            aria-label="View TR Artisan Chocolate Bar Details"
          >
            <div className="bento-image-container">
              <img
                src={heroImages.macaronLavender}
                alt="Handcrafted TR artisan chocolate bar with molten dark chocolate pour on lavender background"
                className="bento-image"
                loading="eager"
                decoding="async"
                width={380}
                height={260}
              />
            </div>
            <div className="bento-overlay-caption">
              <span className="caption-tag">TR Signature Bar</span>
              <p className="caption-sub">Molten Dark Chocolate Pour</p>
            </div>
          </div>

          {/* Card 2: Left Small Underneath (Artisan Chilled Chocolate Shake) */}
          <div
            className="bento-card card-square card-cocoa-warm"
            role="button"
            tabIndex={0}
            onClick={() => onSelectProduct("drinking-chocolate")}
            onKeyDown={(e) => e.key === "Enter" && onSelectProduct("drinking-chocolate")}
            aria-label="View Chilled Chocolate Shake Details"
          >
            <div className="bento-image-container">
              <img
                src={heroImages.cupcakeCherry}
                alt="Artisan chilled chocolate shake topped with dark chocolate bar, chocolate pearls, and cocoa shavings"
                className="bento-image"
                loading="eager"
                decoding="async"
                width={380}
                height={260}
              />
            </div>
            <div className="bento-overlay-caption">
              <span className="caption-tag">Chilled Cocoa</span>
              <p className="caption-sub">Artisan Cold Shake</p>
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
                alt="Artisan marble pedestal display of TR embossed chocolate blocks, dusted truffles, cocoa macarons, and roasted hazelnuts with molten chocolate splash"
                className="bento-image"
                loading="lazy"
                decoding="async"
                width={580}
                height={433}
              />
            </div>

            <div className="landscape-badge-row">
              <div className="floating-bento-badge">
                <Sparkles size={13} className="badge-sparkle" />
                <span>Artisan Vitrine</span>
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
                alt="Dynamic vertical swirl of molten artisan chocolate, embossed TR chocolate blocks, handcrafted truffles, and roasted hazelnuts"
                className="bento-image"
                loading="lazy"
                decoding="async"
                width={380}
                height={508}
              />
            </div>
            <div className="bento-overlay-caption">
              <span className="caption-tag">Signature Cascade</span>
              <p className="caption-sub">Hazelnut • Truffles • Ganache</p>
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
          ROW 3: Wide Signature Pure Chocolate Artistry Card
          ============================================================ */}
      <div className="bento-wide-row">
        <div
          className="bento-card card-wide-sage"
          role="button"
          tabIndex={0}
          onClick={() => onFilterCategory("chocolates")}
          onKeyDown={(e) => e.key === "Enter" && onFilterCategory("chocolates")}
          aria-label="Explore Handcrafted Pure Chocolate Art"
        >
          <div className="wide-text-side">
            <span className="wide-eyebrow">PURE CRAFT & ARTISTRY</span>
            <h3 className="wide-heading">Sculpted Chocolate & Artisan Cocoa</h3>
            <p className="wide-description">
              Slow-churned cacao, molten dark ganache, and signature bean-to-bar craftsmanship poured into sculpted liquid perfection.
            </p>
            <div className="wide-btn-group">
              <span className="bento-pill-btn pill-dark">
                <span>Explore Chocolates</span>
              </span>
              <span className="bento-pill-btn pill-outline">
                <span>Discover Collection</span>
              </span>
            </div>
          </div>

          <div className="wide-image-side">
            <img
              src={heroImages.spongeSlice}
              alt="Sculptural 3D glass typography spelling CHOCOLATE filled with molten dark chocolate, illuminated by morning sunbeams"
              className="wide-image"
              loading="lazy"
              width={580}
              height={240}
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
