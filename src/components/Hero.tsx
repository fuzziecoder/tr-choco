import React, { useState, useRef, useEffect } from "react";
import { siteConfig } from "../data/siteConfig";
import { heroImages } from "../data/assetManifest";
import { SpecularCTA } from "./SpecularCTA";
import { Sparkles, ArrowRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { scrollToSection } from "../utils/navigation";

/**
 * Hero video source setting.
 * Uses the user-uploaded video in /public/videos/hero-showcase.mp4
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
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
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
    scrollToSection(selector);
  };

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-card hero-video-backed">
        {/* Full-bleed background video layer */}
        <div className="hero-video-bg-layer" aria-hidden="true">
          <video
            ref={videoRef}
            src={HERO_VIDEO_SOURCE}
            poster={heroImages.pastryTower}
            autoPlay={!hasReducedMotion}
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className="hero-full-video"
            aria-label="TR Homemade Chocolates ambient artisan video"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Contrast scrim: gradient dark overlay for crystal-clear readability */}
          <div className="hero-video-scrim" />
        </div>

        {/* Foreground selectable text content */}
        <div className="hero-text-content hero-content-overlay">
          <div className="hero-eyebrow">
            <span className="eyebrow-pill eyebrow-pill-light">
              <Sparkles size={13} className="eyebrow-icon" />
              <span>HOMEMADE WITH LOVE - HOSUR</span>
            </span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            <span className="hero-title-top hero-text-light">TR Homemade</span>
            <span className="hero-title-bottom hero-text-gold">Chocolates</span>
          </h1>

          <p className="hero-description hero-desc-light">
            Handcrafted artisan chocolates made fresh in Hosur, paired with aromatic Nilgiri
            estate teas, bakery treats, and pure botanical botanicals.
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

        {/* Unobtrusive accessible play/pause & audio controls */}
        <div
          className="hero-video-controls hero-controls-bottom-right"
          role="toolbar"
          aria-label="Hero background video controls"
        >
          <button
            type="button"
            className="hero-video-btn"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
            title={isPlaying ? "Pause background video" : "Play background video"}
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} />}
          </button>

          <button
            type="button"
            className="hero-video-btn"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute background audio" : "Mute background audio"}
            title={isMuted ? "Unmute background audio" : "Mute background audio"}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>
      </div>
    </section>
  );
};
