/**
 * Unified in-page section scrolling and navigation utility.
 * - Handles smooth scrolling with sticky header offset compensation.
 * - Keeps browser URLs clean (never appends hash fragments like #catalogue).
 * - Safely detects and cleans initial recognized section hashes using history.replaceState.
 * - Respects prefers-reduced-motion preferences.
 * - Preserves keyboard focus and accessibility.
 */

export const RECOGNIZED_SECTION_IDS = [
  "hero",
  "collections",
  "story",
  "about",
  "discovery",
  "catalogue",
  "category-preview-section",
  "full-catalogue-view",
  "cafe",
  "finds",
  "visit",
  "contact",
  "main-content",
] as const;

export type RecognizedSectionId = (typeof RECOGNIZED_SECTION_IDS)[number];

export function isRecognizedSection(idOrHash: string): boolean {
  const cleanId = idOrHash.replace(/^#/, "").trim();
  return RECOGNIZED_SECTION_IDS.includes(cleanId as RecognizedSectionId);
}

export function resolveSectionTarget(idOrHash: string): string {
  const cleanId = idOrHash.replace(/^#/, "").trim();
  if (cleanId === "about") return "story";
  if (cleanId === "contact") return "visit";
  return cleanId;
}

export interface ScrollOptions {
  /** Additional vertical offset in pixels (default: 16px) */
  additionalOffset?: number;
  /** Explicit scroll behavior override */
  behavior?: ScrollBehavior;
  /** Callback fired after scroll is initiated */
  onComplete?: () => void;
  /** Whether to focus the target element for accessibility (default: true) */
  focusTarget?: boolean;
}

/**
 * Smoothly scrolls to an in-page section without appending a hash fragment to the URL.
 */
export function scrollToSection(target: string, options?: ScrollOptions): boolean {
  if (typeof window === "undefined" || !target) return false;

  const targetId = resolveSectionTarget(target);
  const element = document.getElementById(targetId) || document.querySelector(target);

  if (!element) {
    return false;
  }

  // Calculate sticky header offset dynamically
  const header = document.querySelector(".site-header");
  const headerHeight = header ? header.getBoundingClientRect().height : 76;
  const extraOffset = options?.additionalOffset ?? 16;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const targetTop = Math.max(0, elementPosition - headerHeight - extraOffset);

  // Check user preference for reduced motion
  const prefersReducedMotion =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const behavior: ScrollBehavior = prefersReducedMotion
    ? "auto"
    : (options?.behavior || "smooth");

  window.scrollTo({
    top: targetTop,
    behavior,
  });

  // Preserve keyboard accessibility: focus target if it can receive focus or has tabIndex
  if (options?.focusTarget !== false && element instanceof HTMLElement) {
    if (!element.hasAttribute("tabIndex")) {
      element.setAttribute("tabIndex", "-1");
      element.style.outline = "none";
    }
    // Defer focus slightly so scrolling starts smoothly
    setTimeout(() => {
      element.focus({ preventScroll: true });
    }, 150);
  }

  // Remove section hash fragment from URL without creating history entries or page reload
  if (window.location.hash && isRecognizedSection(window.location.hash)) {
    const cleanUrl = window.location.pathname + window.location.search;
    window.history.replaceState(null, "", cleanUrl);
  }

  if (options?.onComplete) {
    if (behavior === "auto") {
      options.onComplete();
    } else {
      setTimeout(options.onComplete, 450);
    }
  }

  return true;
}

/**
 * Handle initial URL hash on page load (e.g. user lands on http://localhost:5173/#catalogue).
 * Waits for layout readiness, scrolls to the section, and cleanly strips the hash.
 */
export function initHashCleaning(): void {
  if (typeof window === "undefined") return;

  const hash = window.location.hash;
  if (!hash) return;

  const sectionId = hash.replace(/^#/, "").trim();
  if (!isRecognizedSection(sectionId)) {
    // Leave unrecognised fragments untouched
    return;
  }

  const performInitialScroll = (retries = 3) => {
    const targetId = resolveSectionTarget(sectionId);
    const el = document.getElementById(targetId);
    if (el) {
      scrollToSection(targetId, {
        behavior: "smooth",
        onComplete: () => {
          // Double check clean URL
          if (window.location.hash) {
            const cleanUrl = window.location.pathname + window.location.search;
            window.history.replaceState(null, "", cleanUrl);
          }
        },
      });
    } else if (retries > 0) {
      setTimeout(() => performInitialScroll(retries - 1), 120);
    }
  };

  if (document.readyState === "complete") {
    // Run after initial frame renders
    requestAnimationFrame(() => performInitialScroll());
  } else {
    window.addEventListener("load", () => performInitialScroll(), { once: true });
  }
}
