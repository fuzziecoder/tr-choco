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
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isReducedMotion) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length < 3) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      // Initial positioning: Card 0 in place, Cards 1 & 2 waiting below container
      gsap.set(cards[0], {
        zIndex: 1,
        y: 0,
        yPercent: 0,
        scale: 1,
        opacity: 1,
      });

      gsap.set(cards[1], {
        zIndex: 2,
        yPercent: 105,
        y: 0,
        scale: 1,
        opacity: 1,
      });

      gsap.set(cards[2], {
        zIndex: 3,
        yPercent: 105,
        y: 0,
        scale: 1,
        opacity: 1,
      });

      const tl = gsap.timeline();

      // Step 1: Card 1 glides up over Card 0; Card 0 recedes upward creating top tab
      tl.to(cards[1], {
        yPercent: 0,
        y: 0,
        scale: 1,
        ease: "power1.inOut",
        duration: 1,
      }, 0)
      .to(cards[0], {
        y: -20,
        scale: 0.94,
        ease: "power1.inOut",
        duration: 1,
      }, 0)

      // Step 2: Card 2 glides up over Card 1; Card 1 recedes; Card 0 recedes further
      .to(cards[2], {
        yPercent: 0,
        y: 0,
        scale: 1,
        ease: "power1.inOut",
        duration: 1,
      }, 1)
      .to(cards[1], {
        y: -20,
        scale: 0.94,
        ease: "power1.inOut",
        duration: 1,
      }, 1)
      .to(cards[0], {
        y: -40,
        scale: 0.88,
        ease: "power1.inOut",
        duration: 1,
      }, 1);

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 72px",
        end: "+=950",
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        animation: tl,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="story-scroll-section" aria-labelledby="story-heading">
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

      <div className="scroll-stack-container">
        {storyCards.map((card, idx) => (
          <div
            key={card.id}
            ref={(el) => {
              cardsRef.current[idx] = el;
            }}
            className={`stack-card stack-${card.theme}`}
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
