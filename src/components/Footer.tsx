import React from "react";
import { siteConfig } from "../data/siteConfig";
import { SpecularCTA } from "./SpecularCTA";
import { ArrowUp, Compass } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ============================================================
          VISIT US / SHOWCASE NOTICE SECTION
          ============================================================ */}
      <section id="visit" className="visit-section" aria-labelledby="visit-heading">
        <div className="visit-card">
          <div className="visit-content">
            <span className="visit-eyebrow">
              <Compass size={13} />
              <span>{siteConfig.visitSection.eyebrow}</span>
            </span>

            <h2 id="visit-heading" className="visit-title">
              {siteConfig.visitSection.heading}
            </h2>

            <p className="visit-disclaimer">
              {siteConfig.visitSection.disclaimer}
            </p>

            <p className="visit-note">
              {siteConfig.visitSection.note}
            </p>

            <div className="visit-action">
              <SpecularCTA
                variant="primary"
                size="md"
                href={siteConfig.visitSection.ctaHref}
              >
                {siteConfig.visitSection.ctaLabel}
              </SpecularCTA>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMPACT ATELIER FOOTER
          ============================================================ */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-script-logo">{siteConfig.brandName}</span>
            <p className="footer-blurb">{siteConfig.footer.blurb}</p>
          </div>

          <nav className="footer-nav" aria-label="Footer Navigation">
            <ul className="footer-nav-list">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-back-to-top">
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{siteConfig.footer.copyright}</p>
          <p className="footer-disclaimer">{siteConfig.footer.disclaimer}</p>
        </div>
      </footer>
    </>
  );
};
