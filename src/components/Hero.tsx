import React, { useState, useRef, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";
import { heroImages } from "../data/assetManifest";
import { SpecularCTA } from "./SpecularCTA";
import { Sparkles, ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

/**
 * Clearly-named hero video source setting.
 * Points to the user-uploaded video in /public/videos/hero-showcase.mp4
 */
export const HERO_VIDEO_SOURCE = "/videos/hero-showcase.mp4";

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      setHasReducedMotion(true);
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }

    const handler = (e: MediaQueryListEvent) => {
      setHasReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };
    motionQuery.addEventListener("change", handler);
    return () => motionQuery.removeEventListener("change", handler);
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

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
              <span>HOMEMADE WITH LOVE - HOSUR</span>
            </span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            <span className="hero-title-top">TR Homemade</span>
            <span className="hero-title-bottom">Chocolates</span>
          </h1>

          <p className="hero-description">
            Handcrafted artisan chocolates made fresh in Hosur, paired with aromatic Nilgiri estate teas, bakery treats, and pure botanical botanicals.
          </p>

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

        {/* Right Column: Unified Video Showcase Panel */}
        <div className="hero-artwork-wrapper">
          <div className="hero-artwork-canvas">
            <div className="hero-video-panel">
              <div className="hero-video-container">
                <video
                  ref={videoRef}
                  src={HERO_VIDEO_SOURCE}
                  poster={heroImages.pastryTower}
                  autoPlay={!hasReducedMotion}
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  className="hero-video-element"
                  aria-label="TR Homemade Chocolates showcase video"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Subtle soft gradient overlay at bottom for depth */}
                <div className="hero-video-overlay" aria-hidden="true" />

                {/* Discrete Play/Pause & Audio Controls */}
                <div className="hero-video-controls" role="toolbar" aria-label="Video controls">
                  <button
                    type="button"
                    className="hero-video-btn"
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                  </button>

                  <button
                    type="button"
                    className="hero-video-btn"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                  </button>
                </div>
              </div>

              {/* Decorative Floating Accents */}
              <div className="floating-accent float-orb-1" aria-hidden="true" />
              <div className="floating-accent float-orb-2" aria-hidden="true" />
              <div className="floating-accent float-orb-3" aria-hidden="true" />

              {/* Subtle Corner TR Emblem */}
              <div className="hero-corner-badge" aria-hidden="true">
                <img
                  src="/tr-logo.png"
                  alt="TR Emblem"
                  className="hero-badge-logo"
                  width={68}
                  height={68}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
