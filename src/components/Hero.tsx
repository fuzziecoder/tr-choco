import React from "react";
import { siteConfig } from "../data/siteConfig";
import { heroImages } from "../data/assetManifest";
import { SpecularCTA } from "./SpecularCTA";
import { Sparkles, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollTo = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-card">
        {/* Left Column: Copy & CTAs */}
        <div className="hero-text-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-pill">
              <Sparkles size={13} className="eyebrow-icon" />
              <span>{siteConfig.hero.eyebrow}</span>
            </span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            <span className="hero-title-top">TR Homemade</span>
            <span className="hero-title-bottom">Chocolates</span>
          </h1>

          <p className="hero-description">{siteConfig.hero.description}</p>

          <div className="hero-cta-group">
            <SpecularCTA
              variant="primary"
              size="md"
              href="#catalogue"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#catalogue");
              }}
              icon={<ArrowRight size={14} />}
            >
              {siteConfig.hero.primaryCta}
            </SpecularCTA>

            <SpecularCTA
              variant="secondary"
              size="md"
              href="#cafe"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#cafe");
              }}
            >
              {siteConfig.hero.secondaryCta}
            </SpecularCTA>
          </div>
        </div>

        {/* Right Column: Visual Artwork Slot with Floating Accents */}
        <div className="hero-artwork-wrapper">
          <div className="hero-artwork-canvas">
            {/* Centerpiece Image */}
            <div className="hero-main-image-container">
              <img
                src={heroImages.pastryTower}
                alt="Artisanal multi-tiered celebration cake on a fluted pedestal surrounded by floating pastel macarons and golden cocoa orbs"
                className="hero-main-image"
                loading="eager"
              />
            </div>

            {/* Restrained Floating Decorative Accents */}
            <div className="floating-accent float-orb-1" aria-hidden="true" />
            <div className="floating-accent float-orb-2" aria-hidden="true" />
            <div className="floating-accent float-orb-3" aria-hidden="true" />

            {/* Subtle Circular Badge */}
            <div className="hero-corner-badge" aria-hidden="true">
              <img
                src="/tr-logo.png"
                alt="TR Emblem"
                className="hero-badge-logo"
                width={72}
                height={72}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
