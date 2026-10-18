import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Heart, Clock, Gift } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StoryCard {
  id: string;
  tagline: string;
  title: string;
  body: string;
  note: string;
  theme: "sage" | "lavender" | "blush";
  icon: React.ReactNode;
}

const storyCards: StoryCard[] = [
  {
    id: "curiosity",
    tagline: "CHAPTER 01",
    title: "It starts with curiosity.",
    body: "Every distinct flavour begins with a simple question: what happens when roasted California almonds meet pure cocoa butter, or when sweet sun-ripened mango is folded into chilled ganache? We approach each creation as an open invitation to explore subtle notes, gentle crunch, and satisfying cacao richness.",
    note: "Crafted for the curious palate.",
    theme: "sage",
    icon: <Sparkles size={22} />,
  },
  {
    id: "slow-moments",
    tagline: "CHAPTER 02",
    title: "Made for the slow moments.",
    body: "In a world that hurries, confectionery invites us to pause. The quiet ceremony of snapping a single chocolate square, letting rich butterscotch melt slowly, or sharing a warm pot of freshly brewed filter coffee—these are the small, daily pauses that turn ordinary afternoons into comforting rituals.",
    note: "Unrushed enjoyment, savoured piece by piece.",
    theme: "lavender",
    icon: <Clock size={22} />,
  },
  {
    id: "gifting",
    tagline: "CHAPTER 03",
    title: "A gift that says a little more.",
    body: "Sweetness is best when shared. Whether honoring a landmark celebration, offering a warm token of appreciation, or simply leaving a surprise treat on a friend's desk, our curated boxes and assortments are designed to deliver quiet delight before the ribbon is even untied.",
    note: "Some gifts need no occasion at all.",
    theme: "blush",
    icon: <Gift size={22} />,
  },
];

export const CraftScrollStack: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stackStageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length < 3 || !sectionRef.current || !stackStageRef.current) return;

    const mm = gsap.matchMedia();

    // Desktop Two-Column Pinned Craft Scroll
    mm.add("(min-width: 992px)", () => {
      // Set initial positions relative to right container
      gsap.set(cards[0], {
        zIndex: 1,
        y: 0,
        scale: 1,
        opacity: 1,
      });

      gsap.set(cards[1], {
        zIndex: 2,
        y: "105%",
        scale: 0.96,
        opacity: 0.8,
      });

      gsap.set(cards[2], {
        zIndex: 3,
        y: "105%",
        scale: 0.96,
        opacity: 0.8,
      });

      const tl = gsap.timeline({
        onUpdate: () => {
          const progress = tl.progress();
          if (progress < 0.35) {
            setActiveCardIndex(0);
          } else if (progress < 0.75) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(2);
          }
        },
      });

      // Card 1 rises smoothly over Card 0, Card 0 recedes upward into back tab
      tl.to(
        cards[1],
        {
          y: "0%",
          scale: 1,
          opacity: 1,
          ease: "power1.inOut",
          duration: 1,
        },
        0
      ).to(
        cards[0],
        {
          y: -22,
          scale: 0.94,
          opacity: 0.65,
          ease: "power1.inOut",
          duration: 1,
        },
        0
      );

      // Card 2 rises smoothly over Card 1, Card 1 recedes, Card 0 recedes further
      tl.to(
        cards[2],
        {
          y: "0%",
          scale: 1,
          opacity: 1,
          ease: "power1.inOut",
          duration: 1,
        },
        1
      )
        .to(
          cards[1],
          {
            y: -22,
            scale: 0.94,
            opacity: 0.65,
            ease: "power1.inOut",
            duration: 1,
          },
          1
        )
        .to(
          cards[0],
          {
            y: -44,
            scale: 0.88,
            opacity: 0.35,
            ease: "power1.inOut",
            duration: 1,
          },
          1
        );

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 72px",
        end: "+=1100",
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        animation: tl,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      return () => {
        trigger.kill();
        tl.kill();
      };
    });

    // Mobile / Tablet Pinned Craft Scroll (Header above, stack pinned below)
    mm.add("(max-width: 991px)", () => {
      gsap.set(cards[0], {
        zIndex: 1,
        y: 0,
        scale: 1,
        opacity: 1,
      });

      gsap.set(cards[1], {
        zIndex: 2,
        y: "105%",
        scale: 0.96,
        opacity: 0.8,
      });

      gsap.set(cards[2], {
        zIndex: 3,
        y: "105%",
        scale: 0.96,
        opacity: 0.8,
      });

      const tl = gsap.timeline({
        onUpdate: () => {
          const progress = tl.progress();
          if (progress < 0.35) {
            setActiveCardIndex(0);
          } else if (progress < 0.75) {
            setActiveCardIndex(1);
          } else {
            setActiveCardIndex(2);
          }
        },
      });

      // Card 1 rises smoothly over Card 0
      tl.to(
        cards[1],
        {
          y: "0%",
          scale: 1,
          opacity: 1,
          ease: "power1.inOut",
          duration: 1,
        },
        0
      ).to(
        cards[0],
        {
          y: -14,
          scale: 0.95,
          opacity: 0.65,
          ease: "power1.inOut",
          duration: 1,
        },
        0
      );

      // Card 2 rises smoothly over Card 1
      tl.to(
        cards[2],
        {
          y: "0%",
          scale: 1,
          opacity: 1,
          ease: "power1.inOut",
          duration: 1,
        },
        1
      )
        .to(
          cards[1],
          {
            y: -14,
            scale: 0.95,
            opacity: 0.65,
            ease: "power1.inOut",
            duration: 1,
          },
          1
        )
        .to(
          cards[0],
          {
            y: -28,
            scale: 0.9,
            opacity: 0.35,
            ease: "power1.inOut",
            duration: 1,
          },
          1
        );

      const trigger = ScrollTrigger.create({
        trigger: stackStageRef.current,
        start: "center center",
        end: "+=800",
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        animation: tl,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      return () => {
        trigger.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  const handleSelectCard = (index: number) => {
    setActiveCardIndex(index);
    const cardEl = cardsRef.current[index];
    if (cardEl && window.innerWidth <= 991) {
      cardEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <section
      id="story"
      ref={sectionRef}
      className="philosophy-section"
      aria-labelledby="philosophy-heading"
    >
      <div className="philosophy-container">
        {/* Left Column: Heading, philosophy text & supporting editorial notes */}
        <div className="philosophy-left-col">
          <div className="philosophy-eyebrow">
            <Heart size={14} className="philosophy-eyebrow-icon" />
            <span>OUR PHILOSOPHY</span>
          </div>

          <h2 id="philosophy-heading" className="philosophy-heading">
            Moments made to be savoured.
          </h2>

          <p className="philosophy-lead">
            A quiet tribute to the craft of sweetness, mindful ingredients, and generous hospitality.
          </p>

          <p className="philosophy-subtext">
            From our kitchen in Hosur to your home, TR Homemade Chocolates is built around honest
            purity—pure cocoa butter, hand-selected nuts, traditional roasting, and aromatic Nilgiri
            plantation teas. We believe the most memorable sweets are crafted with unrushed care.
          </p>

          {/* Supporting Philosophy Highlights */}
          <div className="philosophy-pillars">
            <div className="philosophy-pillar-card">
              <span className="pillar-num">01</span>
              <div className="pillar-info">
                <strong>Pure Cocoa Butter</strong>
                <span>Never substituted with compound fats or hydrogenated oils.</span>
              </div>
            </div>

            <div className="philosophy-pillar-card">
              <span className="pillar-num">02</span>
              <div className="philosophy-pillar-card-content">
                <strong>Small Batch Tempering</strong>
                <span>Hand-tempered weekly in Hosur for that velvet snap and melt.</span>
              </div>
            </div>

            <div className="philosophy-pillar-card">
              <span className="pillar-num">03</span>
              <div className="philosophy-pillar-card-content">
                <strong>Nilgiri Hill Botanicals</strong>
                <span>Fresh hillside tea leaves, real extracts, and natural floral waters.</span>
              </div>
            </div>
          </div>

          {/* Chapter Quick Selector / Indicator */}
          <div className="philosophy-chapter-nav" aria-label="Story Chapters">
            <span className="chapter-nav-label">Story Chapters:</span>
            <div className="chapter-nav-pills">
              {storyCards.map((card, idx) => (
                <button
                  key={card.id}
                  type="button"
                  className={`chapter-pill-btn ${activeCardIndex === idx ? "is-active" : ""}`}
                  onClick={() => handleSelectCard(idx)}
                  aria-label={`View ${card.tagline}: ${card.title}`}
                >
                  <span className="chapter-pill-dot" />
                  <span>{card.tagline}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contained Animated Craft-Scroll Card Stack */}
        <div className="philosophy-right-col">
          <div className="craft-stack-stage" ref={stackStageRef}>
            {storyCards.map((card, idx) => {
              const isActive = activeCardIndex === idx;

              return (
                <div
                  key={card.id}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  className={`craft-card craft-${card.theme} ${isActive ? "is-current" : ""}`}
                >
                  <div className="craft-card-inner">
                    <div className="craft-card-header">
                      <span className="craft-tagline">{card.tagline}</span>
                      <span className="craft-icon-wrap" aria-hidden="true">
                        {card.icon}
                      </span>
                    </div>

                    <h3 className="craft-card-title">{card.title}</h3>
                    <p className="craft-card-body">{card.body}</p>

                    <div className="craft-card-footer">
                      <span className="craft-note">{card.note}</span>
                      <span className="craft-counter">0{idx + 1} / 03</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
