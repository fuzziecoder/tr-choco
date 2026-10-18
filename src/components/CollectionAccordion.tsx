import React, { useState, useRef } from "react";
import { collections } from "../data/collections";
import type { CollectionId } from "../types/catalogue";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { scrollToSection } from "../utils/navigation";

interface CollectionAccordionProps {
  onSelectCollection: (collectionId: CollectionId) => void;
}

export const CollectionAccordion: React.FC<CollectionAccordionProps> = ({
  onSelectCollection,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(2); // Dark Chocolate as defaultIndex={2}
  const [mouseOffsets, setMouseOffsets] = useState<Record<number, { x: number; y: number }>>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffsets((prev) => ({
      ...prev,
      [index]: { x, y },
    }));
  };

  const handleMouseLeave = (index: number) => {
    setMouseOffsets((prev) => ({
      ...prev,
      [index]: { x: 0, y: 0 },
    }));
  };

  const handleCardClick = (colId: CollectionId) => {
    onSelectCollection(colId);
    scrollToSection("catalogue");
  };

  return (
    <section id="collections" className="collections-section" aria-labelledby="collections-heading">
      <div className="section-header">
        <span className="section-eyebrow">
          <Sparkles size={13} />
          <span>CURATED SELECTION</span>
        </span>
        <h2 id="collections-heading" className="section-title">
          Every mood. Its own chocolate.
        </h2>
        <p className="section-description">
          Select a TR signature collection to explore distinctive cacao notes, delicate inclusions, and curated gift boxes.
        </p>
      </div>

      {/* Accordion Gallery Container */}
      <div
        ref={containerRef}
        className="accordion-gallery-container"
        role="region"
        aria-label="Chocolate Collections Accordion"
      >
        <div className="accordion-track">
          {collections.map((item, idx) => {
            const isActive = activeIndex === idx;
            const offset = mouseOffsets[idx] || { x: 0, y: 0 };
            const parallaxX = offset.x * 20; // max 20px drift
            const parallaxY = offset.y * 12;
            const tiltRotate = offset.x * 4; // subtle tilt

            return (
              <div
                key={item.id}
                className={`accordion-panel ${isActive ? "is-active" : ""}`}
                style={{
                  "--accent-color": item.accentColor,
                  "--expand-flex": isActive ? "3.2" : "1",
                } as React.CSSProperties}
                onMouseEnter={() => setActiveIndex(idx)}
                onMouseMove={(e) => handleMouseMove(idx, e)}
                onMouseLeave={() => handleMouseLeave(idx)}
                onFocus={() => setActiveIndex(idx)}
                tabIndex={0}
                role="button"
                aria-expanded={isActive}
                aria-label={`${item.title} Collection`}
                onClick={() => handleCardClick(item.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCardClick(item.id);
                  }
                }}
              >
                {/* Background Image with Parallax Drift & Grayscale Transition */}
                <div
                  className="accordion-img-wrapper"
                  style={{
                    transform: isActive
                      ? `scale(1.06) translate(${parallaxX}px, ${parallaxY}px) rotate(${tiltRotate}deg)`
                      : "scale(1)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="accordion-bg-image"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={420}
                  />
                  <div className="accordion-overlay" />
                </div>

                {/* Panel Content & Text Revealer */}
                <div className="accordion-content">
                  <div className="accordion-badge">
                    <span className="accordion-index">0{idx + 1}</span>
                    <span className="accordion-sub-tag">{item.subtitle}</span>
                  </div>

                  <div className="accordion-titles">
                    <h3 className="accordion-item-title">{item.title}</h3>
                    <p className="accordion-item-note">{item.editorialNote}</p>
                  </div>

                  <div className="accordion-action-row">
                    <button
                      type="button"
                      className="accordion-cta-pill"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(item.id);
                      }}
                    >
                      <span>Explore Collection</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
