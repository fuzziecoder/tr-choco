import React, { useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;

    if (isReducedMotion || isMobile) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card || index === cardsRef.current.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top 18%",
          endTrigger: containerRef.current,
          end: "bottom 80%",
          pin: true,
          pinSpacing: false,
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.05;
            const opacity = 1 - progress * 0.15;
            gsap.set(card, {
              scale: scale,
              opacity: opacity,
              transformOrigin: "center top",
            });
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="story" className="story-scroll-section" aria-labelledby="story-heading">
      <div className="section-header">
        <span className="section-eyebrow">
          <Heart size={13} />
          <span>OUR PHILOSOPHY</span>
        </span>
        <h2 id="story-heading" className="section-title">
          Moments made to be savoured.
        </h2>
        <p className="section-description">
          A quiet tribute to the craft of sweetness, mindful ingredients, and generous hospitality.
        </p>
      </div>

      <div ref={containerRef} className="scroll-stack-container">
        {storyCards.map((card, idx) => (
          <div
            key={card.id}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className={`stack-card stack-${card.theme}`}
            style={{
              top: `calc(15vh + ${idx * 28}px)`,
              zIndex: idx + 1,
            }}
          >
            <div className="stack-card-inner">
              <div className="stack-header">
                <span className="stack-tagline">{card.tagline}</span>
                <span className="stack-icon-wrap" aria-hidden="true">
                  {card.icon}
                </span>
              </div>

              <h3 className="stack-title">{card.title}</h3>
              <p className="stack-body">{card.body}</p>

              <div className="stack-footer">
                <span className="stack-note">{card.note}</span>
                <span className="stack-counter">0{idx + 1} / 03</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
