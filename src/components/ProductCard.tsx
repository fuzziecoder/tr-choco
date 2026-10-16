import React from "react";
import type { CatalogueProduct } from "../types/catalogue";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: CatalogueProduct;
  onSelect: (product: CatalogueProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const bgStyle = {
    backgroundColor: product.palette?.bg || "#FFFBF2",
    borderColor: product.palette?.border || "#EFE7DA",
  };

  const hasVariants = product.variants.length > 1;

  return (
    <article
      className="catalogue-product-card"
      style={bgStyle}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(product)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(product);
        }
      }}
      aria-label={`View details for ${product.name}`}
    >
      {/* Visual Artwork Slot */}
      <div className="card-visual-slot">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-card-image"
            loading="lazy"
          />
        ) : (
          <div className="product-card-placeholder" aria-hidden="true">
            <div className="placeholder-pattern" />
            <div className="placeholder-emblem">
              <span className="emblem-initial">{product.name.charAt(0)}</span>
              <span className="emblem-sub">ATELIER</span>
            </div>
          </div>
        )}

        {/* Editorial Pill Tag */}
        {product.editorialBadge ? (
          <span className="card-editorial-badge">{product.editorialBadge}</span>
        ) : (
          <span className="card-category-badge">{product.categoryId.replace("-", " & ")}</span>
        )}
      </div>

      {/* Product Content Details */}
      <div className="card-body">
        <h3 className="card-product-name">{product.name}</h3>

        {product.description && (
          <p className="card-product-desc">{product.description}</p>
        )}

        <div className="card-meta-row">
          {/* Confirmed Sizes */}
          {hasVariants ? (
            <div className="card-sizes-pills">
              {product.variants.map((v) => (
                <span key={v.id} className="size-chip">
                  {v.label}
                </span>
              ))}
            </div>
          ) : product.variants[0]?.label && product.variants[0].label !== "Standard" ? (
            <span className="single-size-chip">{product.variants[0].label}</span>
          ) : (
            <span className="standard-format-chip">Artisan Format</span>
          )}

          {/* Action Link Icon */}
          <span className="card-action-icon" aria-hidden="true">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </article>
  );
};
