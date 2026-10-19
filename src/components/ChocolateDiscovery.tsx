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
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ChocolateDiscoveryProps {
  onSelectProduct: (productSlug: string) => void;
}

export const ChocolateDiscovery: React.FC<ChocolateDiscoveryProps> = ({
  onSelectProduct,
}) => {
  // Curated set of 16 products across chocolate creations, bakery, and café
  const discoveryItems = useMemo(
    () =>
      products
        .filter(
          (p) =>
            p.featured ||
            p.editorialBadge ||
            p.categoryId === "chocolates" ||
            p.categoryId === "cakes-bakery" ||
            p.categoryId === "tea-coffee"
        )
        .slice(0, 16),
    []
  );

  const count = discoveryItems.length;

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // Position can be fractional during dragging or smooth scrolling
  const [currentPos, setCurrentPos] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<"sphere" | "grid">("sphere");
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);

  // Discrete active index
  const activeIndex = Math.min(
    Math.max(0, Math.round(currentPos)),
    count - 1
  );
  const activeProduct: CatalogueProduct = discoveryItems[activeIndex] || discoveryItems[0];

  // Check reduced motion
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener("change", handler);
    return () => motionQuery.removeEventListener("change", handler);
  }, []);

  // Smooth tween helper for programmatic transitions (arrows or card clicks)
  const animateToPos = useCallback(
    (targetPos: number, duration = 400) => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      const startPos = currentPos;
      const diff = targetPos - startPos;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Smooth cubic ease out
        const ease = 1 - Math.pow(1 - progress, 3);
        const newPos = startPos + diff * ease;
        setCurrentPos(newPos);

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(step);
        } else {
          setCurrentPos(targetPos);
          isInteractingRef.current = false;
        }
      };

      isInteractingRef.current = true;
      animFrameRef.current = requestAnimationFrame(step);

      // Synchronize GSAP ScrollTrigger if active and pinned
      if (scrollTriggerRef.current) {
        const st = scrollTriggerRef.current;
        const progressTarget = targetPos / (count - 1);
        const targetScroll = st.start + progressTarget * (st.end - st.start);
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    },
    [count, currentPos]
  );

  // Setup GSAP ScrollTrigger for Scroll-Driven Rotation
  useEffect(() => {
    if (viewMode !== "sphere" || isReducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=1600",
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // If the user isn't manually dragging or clicking arrows, sync position with scroll
          if (!isInteractingRef.current) {
            const mappedPos = self.progress * (count - 1);
            setCurrentPos(mappedPos);
          }
        },
      });

      scrollTriggerRef.current = st;

      return () => {
        st.kill();
        scrollTriggerRef.current = null;
      };
    });

    mm.add("(max-width: 767px)", () => {
      // On mobile, pin for a restrained distance to allow smooth rotation without trapping
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=1300",
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (!isInteractingRef.current) {
            const mappedPos = self.progress * (count - 1);
            setCurrentPos(mappedPos);
          }
        },
      });

      scrollTriggerRef.current = st;

      return () => {
        st.kill();
        scrollTriggerRef.current = null;
      };
    });

    return () => mm.revert();
  }, [count, viewMode, isReducedMotion]);

  // Pointer drag/swipe handling
  const handlePointerDown = (e: React.PointerEvent) => {
    if (viewMode !== "sphere") return;
    setIsDragging(true);
    isInteractingRef.current = true;
    dragStartX.current = e.clientX;
    dragStartPos.current = currentPos;
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX.current;
    // Map ~260px drag to 1 card
    const sensitivity = 1 / 260;
    const newPos = Math.min(
      Math.max(0, dragStartPos.current - deltaX * sensitivity),
      count - 1
    );
    setCurrentPos(newPos);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    // Snap cleanly to nearest card
    const nearestIndex = Math.min(Math.max(0, Math.round(currentPos)), count - 1);
    animateToPos(nearestIndex, 300);
  };

  const goToNext = () => {
    const nextIdx = Math.min(count - 1, activeIndex + 1);
    animateToPos(nextIdx);
  };

  const goToPrev = () => {
    const prevIdx = Math.max(0, activeIndex - 1);
    animateToPos(prevIdx);
  };

  // Cleanup animation frame
  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <section
      id="discovery"
      ref={sectionRef}
      className="discovery-section"
      aria-labelledby="discovery-heading"
    >
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
            disabled={activeIndex === 0}
            aria-label="Previous item"
            title="Previous item"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="sphere-step-indicator">
            {activeIndex + 1} of {count}
          </span>
          <button
            type="button"
            className="sphere-arrow-btn"
            onClick={goToNext}
            disabled={activeIndex === count - 1}
            aria-label="Next item"
            title="Next item"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <button
          type="button"
          className="discovery-view-toggle"
          onClick={() => setViewMode(viewMode === "sphere" ? "grid" : "sphere")}
          aria-label={
            viewMode === "sphere"
              ? "Switch to Static Grid View"
              : "Switch to 3D Sphere View"
          }
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
        /* 3D Sphere Stage with Separated, Non-Overlapping Curved Card Arc */
        <div className="sphere-stage-wrapper">
          <div
            ref={stageRef}
            className={`sphere-stage ${isDragging ? "is-dragging" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            role="region"
            aria-label="3D Interactive Chocolate Sphere. Scroll page or drag horizontally to rotate items."
          >
            <div className="sphere-arc-container">
              {discoveryItems.map((item, idx) => {
                // Calculate relative continuous offset from current position
                const offset = idx - currentPos;
                const absOffset = Math.abs(offset);

                // Cull cards that are far away for performance and cleanliness
                if (absOffset > 2.8) {
                  return null;
                }

                // 3D positioning along a smooth cylindrical arc
                // Active card (offset = 0) is front and center (scale 1, zIndex 30)
                // Responsive translation step (desktop vs mobile)
                const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
                const baseStep = isMobile ? 210 : 345;
                const xTrans = offset * baseStep;

                // Parabolic depth recession (translateZ)
                const zTrans = -Math.pow(absOffset, 1.35) * (isMobile ? 110 : 150);

                // Cylindrical Y-rotation (degrees)
                const yRot = -offset * (isMobile ? 18 : 24);

                // Scale slightly recedes for secondary cards
                const scale = Math.max(0.68, 1 - absOffset * 0.12);

                // Opacity falls off gracefully for distant cards
                const opacity = Math.max(0, 1 - Math.pow(absOffset / 2.6, 2));

                // Explicit z-index based on proximity to center ensures active card is ALWAYS on top!
                const zIndex = Math.round(50 - absOffset * 15);

                const isActive = absOffset < 0.45;

                const bgStyle = {
                  backgroundColor: item.palette?.bg || "#FFFBF2",
                  borderColor: item.palette?.border || "#EFE8DC",
                };

                return (
                  <div
                    key={item.id}
                    className={`sphere-card ${isActive ? "is-active" : ""}`}
                    style={{
                      transform: `translate3d(calc(-50% + ${xTrans}px), -50%, ${zTrans}px) rotateY(${yRot}deg) scale(${scale})`,
                      zIndex,
                      opacity,
                      ...bgStyle,
                    }}
                    onClick={(e) => {
                      if (isActive) {
                        onSelectProduct(item.slug);
                      } else {
                        e.stopPropagation();
                        animateToPos(idx);
                      }
                    }}
                    role="button"
                    tabIndex={isActive ? 0 : -1}
                    aria-label={`${item.name} (${item.categoryId})`}
                  >
                    {/* Visual Card Image Slot */}
                    <div className="sphere-card-visual">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="sphere-card-img"
                          loading="lazy"
                        />
                      ) : (
                        <div className="sphere-card-placeholder">
                          <span className="sphere-placeholder-initial">
                            {item.name.charAt(0)}
                          </span>
                          <span className="sphere-placeholder-tag">TR HOSUR</span>
                        </div>
                      )}

                      {/* Editorial Badge or Category Pill */}
                      <span className="sphere-card-badge">
                        {item.editorialBadge || item.categoryId.replace("-", " ")}
                      </span>
                    </div>

                    {/* Card Content Header & Details */}
                    <div className="sphere-card-body">
                      <h4 className="sphere-card-title">{item.name}</h4>

                      <div className="sphere-card-meta">
                        {item.variants.length > 1 ? (
                          <span className="sphere-variant-note">
                            {item.variants.length} Sizes Available
                          </span>
                        ) : item.variants[0]?.sellingPrice ? (
                          <span className="sphere-price-tag">
                            ₹{item.variants[0].sellingPrice}
                          </span>
                        ) : (
                          <span className="sphere-variant-note">
                            {item.variants[0]?.label || "Artisan Batch"}
                          </span>
                        )}

                        <span className="sphere-card-action">
                          <ArrowUpRight size={15} />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="sphere-drag-hint">
            <span>‹ Scroll down or swipe horizontally to explore items ›</span>
          </p>
        </div>
      ) : (
        /* Static Grid View for Accessibility & Fast Browsing */
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
              <div className="static-card-img-wrap">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="static-card-thumb"
                    loading="lazy"
                  />
                ) : (
                  <div className="static-card-placeholder">
                    <span>{item.name.charAt(0)}</span>
                  </div>
                )}
                <span className="static-badge">
                  {item.editorialBadge || item.categoryId}
                </span>
              </div>

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

      {/* Active Selection Details Spotlight Card */}
      {activeProduct && (
        <div className="discovery-active-panel">
          <div className="active-panel-inner">
            <div className="active-panel-text">
              <span className="active-category-pill">
                {activeProduct.editorialBadge ||
                  activeProduct.categoryId.toUpperCase().replace("-", " & ")}
              </span>
              <h3 className="active-product-name">{activeProduct.name}</h3>
              <p className="active-product-desc">
                {activeProduct.description ||
                  "Handcrafted with pristine cacao, careful roasting, and artisanal balancing in Hosur."}
              </p>
              <div className="active-variants-preview">
                {activeProduct.variants.map((v) => (
                  <span key={v.id} className="active-variant-chip">
                    {v.label} {v.sellingPrice ? `• ₹${v.sellingPrice}` : ""}
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
