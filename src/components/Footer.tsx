import React from "react";
import { siteConfig } from "../data/siteConfig";
import { ArrowUp, Heart, Sparkles, MapPin, Phone, Clock, ShieldCheck, Leaf, Award } from "lucide-react";
import { scrollToSection } from "../utils/navigation";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    scrollToSection("hero");
  };

  return (
    <footer className="aura-footer-section" aria-labelledby="footer-heading">
      {/* Outer White Card Shell (matching Image 2) */}
      <div className="aura-footer-card">


        {/* Center High-Impact Hero Typography (matching Image 2 layout) */}
        <div className="aura-footer-hero">
          <span className="aura-hero-eyebrow">
            <Sparkles size={13} className="aura-eyebrow-sparkle" />
            <span>Taste the Tradition</span>
          </span>

          <h2 id="footer-heading" className="aura-hero-title">
            Pure Handcrafted Tradition
          </h2>

          <p className="aura-hero-subtitle">
            with Heart &amp; Craft
          </p>

          <p className="aura-hero-description">
            {siteConfig.hero.description}
          </p>

          <div className="aura-hero-cta-wrap">
            <a
              href="https://wa.me/919944747764"
              target="_blank"
              rel="noopener noreferrer"
              className="aura-hero-whatsapp-btn"
              aria-label="Chat on WhatsApp at +91 99447 47764"
            >
              <svg className="aura-btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.28 16.48 16.59 20.15 12.05 20.15ZM16.57 14.39C16.32 14.26 15.1 13.66 14.88 13.58C14.65 13.5 14.48 13.46 14.32 13.71C14.15 13.96 13.67 14.52 13.52 14.69C13.38 14.85 13.23 14.88 12.98 14.75C12.73 14.62 11.93 14.36 10.99 13.52C10.25 12.86 9.76 12.05 9.61 11.8C9.46 11.55 9.6 11.42 9.72 11.29C9.83 11.18 9.97 11 10.1 10.85C10.22 10.7 10.27 10.59 10.35 10.43C10.43 10.26 10.39 10.12 10.33 10C10.27 9.87 9.77 8.65 9.57 8.14C9.37 7.65 9.16 7.72 9.01 7.71C8.87 7.7 8.7 7.7 8.54 7.7C8.37 7.7 8.1 7.76 7.87 8.01C7.65 8.26 7.01 8.86 7.01 10.08C7.01 11.3 7.9 12.47 8.02 12.64C8.15 12.8 9.77 15.3 12.25 16.37C12.84 16.63 13.3 16.78 13.66 16.9C14.25 17.08 14.79 17.06 15.22 16.99C15.7 16.92 16.69 16.39 16.9 15.81C17.11 15.22 17.11 14.72 17.04 14.61C16.98 14.51 16.82 14.45 16.57 14.39Z" />
              </svg>
              <span>WhatsApp Us: +91 99447 47764</span>
            </a>

            <a
              href="https://www.instagram.com/tr__homemade__chocolates_hosur/"
              target="_blank"
              rel="noopener noreferrer"
              className="aura-hero-instagram-btn"
              aria-label="Follow TR Homemade Chocolates on Instagram @tr__homemade__chocolates_hosur"
            >
              <svg className="aura-btn-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@tr__homemade__chocolates_hosur</span>
            </a>
          </div>
        </div>

        {/* Brand Authenticity & Credential Badges Row (matching Image 2 logo row) */}
        <div className="aura-brand-badges-row" aria-label="Brand Certifications & Quality Assurances">
          <div className="aura-brand-badge-item">
            <Award size={18} className="badge-item-icon" />
            <span className="badge-item-text">TR HOMEMADE CHOCOLATES</span>
          </div>

          <div className="aura-brand-badge-item">
            <Sparkles size={18} className="badge-item-icon" />
            <span className="badge-item-text">SWASTHYA BOTANICAL • 1983</span>
          </div>

          <div className="aura-brand-badge-item">
            <Leaf size={18} className="badge-item-icon" />
            <span className="badge-item-text">SEVEN HILLS HERBS • KODAI</span>
          </div>

          <div className="aura-brand-badge-item">
            <ShieldCheck size={18} className="badge-item-icon" />
            <span className="badge-item-text">100% PURE &amp; VEGETARIAN</span>
          </div>

          <div className="aura-brand-badge-item">
            <Heart size={18} className="badge-item-icon" />
            <span className="badge-item-text">HANDMADE IN HOSUR</span>
          </div>
        </div>

        {/* Bottom Details Row with Address, Hours, and Back to Top */}
        <div className="aura-footer-bottom-bar">
          <div className="aura-bottom-info-col">
            <div className="aura-info-item">
              <MapPin size={14} className="aura-info-icon" />
              <span>Aishwaryam Nagar, Selvas Trading Complex, Hosur, Tamil Nadu</span>
            </div>
            <div className="aura-info-item">
              <Phone size={14} className="aura-info-icon" />
              <span>Direct Phone: +91 93631 51629</span>
            </div>
            <div className="aura-info-item">
              <Clock size={14} className="aura-info-icon" />
              <span>Boutique Hours: Mon – Sun, 9:00 AM – 10:00 PM</span>
            </div>
          </div>

          <div className="aura-bottom-right-col">
            <button
              type="button"
              className="aura-back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>

            <p className="aura-copyright-text">
              {siteConfig.footer.copyright}
            </p>
          </div>
        </div>

        {/* ============================================================
            ETHEREAL LUMINOUS MESH GRADIENT AURA (Exact Colors of Image 2)
            Yellow -> Peach -> Pink/Magenta -> Lilac -> Radiant Cyan Blue
            ============================================================ */}
        <div className="aura-glow-canvas" aria-hidden="true">
          <div className="aura-glow-orb aura-orb-yellow" />
          <div className="aura-glow-orb aura-orb-peach" />
          <div className="aura-glow-orb aura-orb-pink" />
          <div className="aura-glow-orb aura-orb-purple" />
          <div className="aura-glow-orb aura-orb-cyan" />
          <div className="aura-glow-diffuser" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
