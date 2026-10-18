import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";
import { SpecularCTA } from "./SpecularCTA";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        {/* Brand Mark (Script-Style Left) */}
        <a href="#hero" className="brand-logo" aria-label={`${siteConfig.brandName} Home`}>
          <span className="brand-script">{siteConfig.brandName}</span>
          <span className="brand-dot" aria-hidden="true" />
        </a>

        {/* Desktop Navigation (Understated Centered) */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {siteConfig.navigation.map((item) => (
              <li key={item.label} className="nav-item">
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA (Specular Cocoa Pill) */}
        <div className="header-action">
          <SpecularCTA
            variant="primary"
            size="sm"
            href={siteConfig.headerCta.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(siteConfig.headerCta.href);
            }}
          >
            {siteConfig.headerCta.label}
          </SpecularCTA>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <nav className="mobile-nav-content">
            <ul className="mobile-nav-list">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={16} />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-nav-cta">
              <SpecularCTA
                variant="primary"
                size="md"
                href={siteConfig.headerCta.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(siteConfig.headerCta.href);
                }}
              >
                {siteConfig.headerCta.label}
              </SpecularCTA>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
