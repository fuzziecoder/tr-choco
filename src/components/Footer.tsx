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
          COMPACT TR HOMEMADE CHOCOLATES FOOTER
          ============================================================ */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-brand-title">{siteConfig.brandName}</h3>
            <span className="footer-brand-subline">{siteConfig.brandSubline}</span>
            <p className="footer-blurb">{siteConfig.footer.blurb}</p>

            <div className="footer-contact-pills">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-pill whatsapp-pill"
                aria-label={`Chat with us on WhatsApp at ${siteConfig.whatsappNumber}`}
              >
                <svg className="footer-pill-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h.02zm-3.6 3.63c-.2 0-.43.07-.65.32-.22.25-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.16 1.71 2.62 4.14 3.67.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.49-.29-.26-.13-1.53-.76-1.77-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.18-.3.2-.56.07-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.31-1.56-1.46-1.82-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.79-1.92-.21-.5-.42-.43-.58-.44h-.49z"/>
                </svg>
                <span>WhatsApp: {siteConfig.whatsappNumber}</span>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-pill instagram-pill"
                aria-label={`Visit our Instagram profile @${siteConfig.instagramHandle}`}
              >
                <svg className="footer-pill-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@{siteConfig.instagramHandle}</span>
              </a>
            </div>
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

          <div className="footer-right-col">
            <div className="footer-back-to-top">
              <button
                type="button"
                className="back-to-top-btn"
                onClick={scrollToTop}
                aria-label="Back to top of page"
              >
                <span>Back to Top</span>
                <ArrowUp size={13} />
              </button>
            </div>
            <div className="footer-art-wrapper">
              <img
                src="/images/tr-footer-art.webp"
                alt="TR Homemade Chocolate Art"
                className="footer-art-img"
                loading="lazy"
              />
            </div>
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
