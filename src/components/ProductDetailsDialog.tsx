import React, { useState, useEffect, useRef } from "react";
import type { CatalogueProduct, ProductVariant } from "../types/catalogue";
import { SpecularCTA } from "./SpecularCTA";
import { X, Check, ArrowLeft, Tag, Layers, Scale, MessageCircle } from "lucide-react";

interface ProductDetailsDialogProps {
  product: CatalogueProduct | null;
  onClose: () => void;
}

export const ProductDetailsDialog: React.FC<ProductDetailsDialogProps> = ({
  product,
  onClose,
}) => {
  const [selectedVariantId, setSelectedVariantId] = useState<string>("");
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Initialize selected variant and image when product opens
  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      if (product.variants.length > 0) {
        setSelectedVariantId(product.variants[0].id);
      }
    }
  }, [product]);

  // Accessibility: Focus trap, restoration & body scroll lock
  useEffect(() => {
    if (!product) return;

    previousFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";

    // Focus close button inside dialog
    const timer = setTimeout(() => {
      const closeBtn = dialogRef.current?.querySelector<HTMLButtonElement>(".dialog-close-btn");
      closeBtn?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
      clearTimeout(timer);
    };
  }, [product, onClose]);

  if (!product) return null;

  const currentVariant: ProductVariant =
    product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  return (
    <div
      className="dialog-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className="product-dialog-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right */}
        <button
          type="button"
          className="dialog-close-btn"
          onClick={onClose}
          aria-label="Close product details dialog"
        >
          <X size={20} />
        </button>

        <div className="dialog-grid">
          {/* Left Column: Visual Artwork Presentation */}
          <div
            className="dialog-artwork-col"
            style={{
              backgroundColor: product.palette?.bg || "#FFFBF2",
            }}
          >
            {activeImage || product.image ? (
              <img
                src={activeImage || product.image!}
                alt={product.name}
                className="dialog-main-image"
                loading="eager"
                decoding="async"
                width={500}
                height={380}
              />
            ) : (
              <div className="dialog-placeholder-visual">
                <div className="dialog-placeholder-crest">
                  <img
                    src="/tr-logo.png"
                    alt="TR Logo"
                    className="dialog-crest-logo"
                    width={48}
                    height={48}
                    loading="eager"
                    decoding="async"
                  />
                  <span className="crest-brand">TR HOMEMADE CHOCOLATES</span>
                  <span className="crest-monogram">{product.name.charAt(0)}</span>
                  <span className="crest-category">{product.categoryId.toUpperCase()}</span>
                </div>
              </div>
            )}

            {/* Gallery Thumbnail Strip (if gallery images exist) */}
            {product.gallery.length > 0 && (
              <div className="dialog-gallery-strip">
                {product.gallery.map((imgSrc, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`gallery-thumb-btn ${activeImage === imgSrc ? "is-active" : ""}`}
                    onClick={() => setActiveImage(imgSrc)}
                    aria-label={`View ${product.name} photo ${i + 1}`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      className="gallery-thumb"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Specification & Variant Details */}
          <div className="dialog-details-col">
            <div className="dialog-header-meta">
              <span className="dialog-category-badge">
                {product.categoryId.replace("-", " & ").toUpperCase()}
              </span>
              {product.editorialBadge && (
                <span className="dialog-editorial-tag">{product.editorialBadge}</span>
              )}
            </div>

            <h2 id="dialog-title" className="dialog-product-title">
              {product.name}
            </h2>

            {product.description && (
              <p className="dialog-description">{product.description}</p>
            )}

            {/* Confirmed Size Variants Selector */}
            {product.variants.length > 0 && (
              <div className="dialog-variants-section">
                <label className="variants-section-label">
                  <Scale size={14} />
                  <span>Confirmed Size Options:</span>
                </label>
                <div className="variant-chips-row" role="radiogroup" aria-label="Select product size">
                  {product.variants.map((v) => {
                    const isSelected = v.id === currentVariant.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        className={`variant-select-chip ${isSelected ? "is-selected" : ""}`}
                        onClick={() => setSelectedVariantId(v.id)}
                      >
                        {isSelected && <Check size={12} className="check-icon" />}
                        <span>{v.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Verified Information Box */}
            <div className="dialog-spec-box">
              <div className="spec-row">
                <span className="spec-label">
                  <Layers size={13} />
                  <span>Format / Weight:</span>
                </span>
                <span className="spec-value">
                  {currentVariant.weightGrams
                    ? `${currentVariant.weightGrams} grams`
                    : currentVariant.volumeMl
                    ? `${currentVariant.volumeMl} ml`
                    : currentVariant.label}
                </span>
              </div>

              {currentVariant.sourceItemCode && (
                <div className="spec-row">
                  <span className="spec-label">
                    <Tag size={13} />
                    <span>Catalogue Reference:</span>
                  </span>
                  <span className="spec-value spec-mono">
                    {currentVariant.sourceItemCode}
                  </span>
                </div>
              )}

              {/* Price Row: Show ONLY if verified price supplied! */}
              <div className="spec-row">
                <span className="spec-label">Pricing Status:</span>
                <span className="spec-value">
                  {currentVariant.sellingPrice !== null ? (
                    `₹${currentVariant.sellingPrice}`
                  ) : (
                    <span className="spec-unverified-tag">
                      Verified boutique pricing upon opening
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Dialog Footer Actions */}
            <div className="dialog-footer-actions">
              <a
                href={`https://wa.me/919363151629?text=Hello%20TR%20Homemade%20Chocolates!%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(currentVariant.label)})`}
                target="_blank"
                rel="noopener noreferrer"
                className="dialog-whatsapp-cta"
              >
                <MessageCircle size={16} />
                <span>Order via WhatsApp</span>
              </a>

              <SpecularCTA
                variant="secondary"
                size="md"
                onClick={onClose}
                icon={<ArrowLeft size={14} />}
              >
                Back to Catalogue
              </SpecularCTA>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
