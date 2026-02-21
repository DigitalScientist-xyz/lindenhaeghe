"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "hero",
  "the-challenge",
  "the-solution",
  "system-design",
  "impact",
  "reflection",
  "cta",
];

export function DotsNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id)
    ).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          const index = SECTION_IDS.indexOf(id);
          if (index !== -1) setActiveIndex(index);
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    const id = SECTION_IDS[index];
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3"
      aria-label="Section navigation"
    >
      {SECTION_IDS.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => scrollTo(index)}
          aria-label={`Go to section ${index + 1}`}
          aria-current={activeIndex === index ? "true" : undefined}
          className="group flex items-center justify-center w-4 h-4 rounded-full p-0 border-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <span
            className={`block rounded-full transition-all duration-200 ${
              activeIndex === index
                ? "bg-accent w-3 h-3"
                : "bg-gray-300 w-2 h-2 group-hover:bg-gray-400"
            }`}
            style={{
              width: activeIndex === index ? 12 : 8,
              height: activeIndex === index ? 12 : 8,
            }}
          />
        </button>
      ))}
    </nav>
  );
}
