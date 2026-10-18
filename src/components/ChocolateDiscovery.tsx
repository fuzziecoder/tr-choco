import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { products } from "../data/products";
import type { CatalogueProduct } from "../types/catalogue";
import { SpecularCTA } from "./SpecularCTA";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Grid,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface ChocolateDiscoveryProps {
  onSelectProduct: (productSlug: string) => void;
}

export const ChocolateDiscovery: React.FC<ChocolateDiscoveryProps> = ({
  onSelectProduct,
}) => {
  // Use a curated set of featured products from the catalogue for discovery
  const discoveryItems = useMemo(
    () => products.filter((p) => p.featured || p.editorialBadge || p.categoryId === "chocolates").slice(0, 16),
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<"sphere" | "grid">("sphere");
  const dragStartX = useRef(0);
  const currentAngleRef = useRef(0);
  const velocityRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  const count = discoveryItems.length;
  const radius = 340; // cylinder / sphere radius in pixels

  // Active product details
  const activeProduct: CatalogueProduct = discoveryItems[currentIndex] || discoveryItems[0];

  const snapToNearest = useCallback(() => {
    const angleStep = 360 / count;
    // Current angle normalized
    const normalizedAngle = ((currentAngleRef.current % 360) + 360) % 360;
    const nearestIdx = Math.round((360 - normalizedAngle) / angleStep) % count;
    const targetAngle = -nearestIdx * angleStep;

    setCurrentIndex(nearestIdx);

    // Smooth tween to targetAngle
    const startAngle = currentAngleRef.current;
    const diff = targetAngle - startAngle;
    const startTime = performance.now();
    const duration = 400;

    const animateSnap = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const newAngle = startAngle + diff * ease;

      currentAngleRef.current = newAngle;
      setRotationAngle(newAngle);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateSnap);
      }
    };

    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(animateSnap);
  }, [count]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    velocityRef.current = 0;
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX.current;
    dragStartX.current = e.clientX;
    const speed = delta * 0.45;
    velocityRef.current = speed;
    currentAngleRef.current += speed;
    setRotationAngle(currentAngleRef.current);

    // Calculate nearest index dynamically
    const angleStep = 360 / count;
    const normalizedAngle = ((currentAngleRef.current % 360) + 360) % 360;
    const nearestIdx = Math.round((360 - normalizedAngle) / angleStep) % count;
    setCurrentIndex(nearestIdx);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    snapToNearest();
  };

  const goToNext = () => {
    const nextIdx = (currentIndex + 1) % count;
    setCurrentIndex(nextIdx);
    const angleStep = 360 / count;
    const targetAngle = -nextIdx * angleStep;
    currentAngleRef.current = targetAngle;
    setRotationAngle(targetAngle);
  };

  const goToPrev = () => {
    const prevIdx = (currentIndex - 1 + count) % count;
    setCurrentIndex(prevIdx);
    const angleStep = 360 / count;
    const targetAngle = -prevIdx * angleStep;
    currentAngleRef.current = targetAngle;
    setRotationAngle(targetAngle);
  };

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <section id="discovery" className="discovery-section" aria-labelledby="discovery-heading">
      <div className="section-header">
        <span className="section-eyebrow">
          <Sparkles size={13} />
          <span>INTERACTIVE EXPLORATION</span>
        </span>
        <h2 id="discovery-heading" className="section-title">
          A whole world of little delights.
        </h2>
        <p className="section-description">
          Rotate through our sphere of chocolate creations, bakery specialities, and café favourites.
        </p>
      </div>

      {/* Mode Controls Bar */}
      <div className="discovery-mode-bar">
        <div className="sphere-nav-buttons">
          <button
            type="button"
            className="sphere-arrow-btn"
            onClick={goToPrev}
            aria-label="Previous chocolate item"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="sphere-step-indicator">
            {currentIndex + 1} of {count}
          </span>
          <button
            type="button"
            className="sphere-arrow-btn"
            onClick={goToNext}
            aria-label="Next chocolate item"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <button
          type="button"
          className="discovery-view-toggle"
          onClick={() => setViewMode(viewMode === "sphere" ? "grid" : "sphere")}
          aria-label={viewMode === "sphere" ? "Switch to Static Grid View" : "Switch to 3D Sphere View"}
        >
          {viewMode === "sphere" ? (
            <>
              <Grid size={15} />
              <span>Static View</span>
            </>
          ) : (
            <>
              <RotateCcw size={15} />
              <span>Sphere View</span>
            </>
          )}
        </button>
      </div>

      {viewMode === "sphere" ? (
        /* 3D Infinite Sphere / Cylinder Stage */
        <div className="sphere-stage-wrapper">
          <div
            className={`sphere-stage ${isDragging ? "is-dragging" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            role="region"
            aria-label="3D Chocolate Sphere Menu. Drag or swipe horizontally to rotate."
          >
            <div
              className="sphere-rotor"
              style={{
                transform: `rotateY(${rotationAngle}deg)`,
              }}
            >
              {discoveryItems.map((item, idx) => {
                const angleStep = 360 / count;
                const itemAngle = idx * angleStep;
                const isActive = idx === currentIndex;

                return (
                  <div
                    key={item.id}
                    className={`sphere-tile ${isActive ? "is-active" : ""}`}
                    style={{
                      transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                      backgroundColor: item.palette?.bg || "#FFFBF2",
                      borderColor: item.palette?.border || "#EFE8DC",
                    }}
                    onClick={() => {
                      if (isActive) {
                        onSelectProduct(item.slug);
                      } else {
                        setCurrentIndex(idx);
                        currentAngleRef.current = -idx * angleStep;
                        setRotationAngle(-idx * angleStep);
                      }
                    }}
                  >
                    <div className="tile-content">
                      <span className="tile-badge">
                        {item.variants.length > 1 ? `${item.variants.length} Sizes` : item.categoryId}
                      </span>
                      <h4 className="tile-title">{item.name}</h4>
                      {item.editorialBadge && (
                        <span className="tile-sub">{item.editorialBadge}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="sphere-drag-hint">
            <span>‹ Drag or swipe horizontally to explore ›</span>
          </p>
        </div>
      ) : (
        /* Static Grid View for Accessibility & Low Powered Devices */
        <div className="discovery-static-grid">
          {discoveryItems.map((item) => (
            <div
              key={item.id}
              className="static-grid-card"
              style={{
                backgroundColor: item.palette?.bg || "#FFFBF2",
                borderColor: item.palette?.border || "#EFE8DC",
              }}
              onClick={() => onSelectProduct(item.slug)}
            >
              <span className="static-badge">{item.categoryId}</span>
              <h4 className="static-title">{item.name}</h4>
              <p className="static-desc">{item.description}</p>
              <button type="button" className="static-link-btn">
                <span>View Details</span>
                <Eye size={13} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Active Selection Details Card */}
      {activeProduct && (
        <div className="discovery-active-panel">
          <div className="active-panel-inner">
            <div className="active-panel-text">
              <span className="active-category-pill">
                {activeProduct.editorialBadge || activeProduct.categoryId.toUpperCase()}
              </span>
              <h3 className="active-product-name">{activeProduct.name}</h3>
              <p className="active-product-desc">
                {activeProduct.description ||
                  "Handcrafted with pristine cacao, careful roasting, and artisanal balancing."}
              </p>
              <div className="active-variants-preview">
                {activeProduct.variants.map((v) => (
                  <span key={v.id} className="active-variant-chip">
                    {v.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="active-panel-action">
              <SpecularCTA
                variant="primary"
                size="md"
                onClick={() => onSelectProduct(activeProduct.slug)}
                icon={<Eye size={14} />}
              >
                Inspect Details
              </SpecularCTA>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
