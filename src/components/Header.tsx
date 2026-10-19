import React, { useState, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";
import { SpecularCTA } from "./SpecularCTA";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { scrollToSection } from "../utils/navigation";

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
    // Defer scroll slightly to let mobile menu close cleanly
    setTimeout(() => {
      scrollToSection(href);
    }, 10);
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        {/* Brand Mark with Authentic TR Emblem */}
        <a
          href="#hero"
          className="brand-logo"
          aria-label={`${siteConfig.brandName} Home`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        >
          <img
            src="/tr-logo.png"
            alt="TR Homemade Chocolates Logo"
            className="brand-logo-img"
            width={68}
            height={68}
          />
          <div className="brand-text-group">
            <span className="brand-script">{siteConfig.brandName}</span>
            <span className="brand-location-badge">HOSUR</span>
          </div>
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

      {/* Mobile Horizontal Quick Navigation Bar (Always visible on mobile view) */}
      <nav className="mobile-quick-nav" aria-label="Mobile Quick Navigation">
        <div className="mobile-quick-nav-track">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-quick-nav-pill"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

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
