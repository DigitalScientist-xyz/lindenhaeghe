"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { PrototypeLightbox } from "@/components/PrototypeLightbox";

const MENU_ITEMS: { id: string; label: string }[] = [
  { id: "hero", label: "Overview" },
  { id: "the-challenge", label: "Thought Process" },
  { id: "the-solution", label: "Workflow" },
  { id: "system-design", label: "System Design" },
  { id: "impact", label: "Measurable Impact" },
  { id: "reflection", label: "Next Steps" },
];

const SECTION_IDS = [
  "hero",
  "the-challenge",
  "the-solution",
  "system-design",
  "impact",
  "reflection",
  "cta",
];

const GITHUB_ICON = (
  <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LINK_ICON = (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg className={`w-4 h-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const ctaBtnBase =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-100 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

type DotsNavProps = {
  prototypeHref?: string;
  githubHref?: string;
};

export function DotsNav({ prototypeHref = "#", githubHref }: DotsNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ctaOpen, setCtaOpen] = useState(false);
  const [prototypeLightboxOpen, setPrototypeLightboxOpen] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ctaRef.current && !ctaRef.current.contains(e.target as Node)) setCtaOpen(false);
    }
    if (ctaOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [ctaOpen]);

  const scrollTo = (index: number) => {
    const id = MENU_ITEMS[index].id;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentMenuIndex = MENU_ITEMS.findIndex((m) => m.id === SECTION_IDS[activeIndex]);
  const navActiveIndex = currentMenuIndex >= 0 ? currentMenuIndex : Math.min(activeIndex, MENU_ITEMS.length - 1);

  const showCta = prototypeHref !== "#" || githubHref;

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-30 border-b border-gray-200 bg-surface/95 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-3 px-4 py-3 sm:px-6 lg:px-24 min-w-0">
        {/* Chapter tabs: take remaining space, scroll if needed */}
        <div className="flex flex-wrap gap-2 min-w-0 flex-1">
          {MENU_ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(index)}
              aria-current={navActiveIndex === index ? "true" : undefined}
              className={`shrink-0 rounded-sm px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                navActiveIndex === index
                  ? "bg-accent text-white"
                  : "text-gray-600 hover:bg-gray-200 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA: same row, right side */}
        {showCta && (
          <div ref={ctaRef} className="shrink-0 relative flex items-center gap-2">
            {/* Desktop: two buttons */}
            {githubHref && (
              <Link
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaBtnBase} w-9 h-9 sm:w-10 sm:h-10 hidden sm:inline-flex`}
                aria-label="View on GitHub"
              >
                {GITHUB_ICON}
              </Link>
            )}
            <button
              type="button"
              onClick={() => setPrototypeLightboxOpen(true)}
              className={`${ctaBtnBase} px-3 py-2 text-sm font-medium hidden sm:inline-flex`}
            >
              Open prototype
              <span aria-hidden>↗</span>
            </button>

            {/* Mobile: single dropdown */}
            <div className="sm:hidden relative">
              <button
                type="button"
                onClick={() => setCtaOpen((o) => !o)}
                className={`${ctaBtnBase} w-9 h-9 px-2.5`}
                aria-expanded={ctaOpen}
                aria-haspopup="true"
                aria-label={ctaOpen ? "Close links menu" : "Open links menu"}
              >
                {LINK_ICON}
                <ChevronIcon open={ctaOpen} />
              </button>
              {ctaOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-44 rounded-lg border border-gray-200 bg-surface shadow-lg py-1 z-50"
                  role="menu"
                >
                  {githubHref && (
                    <Link
                      href={githubHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="menuitem"
                      className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setCtaOpen(false)}
                    >
                      {GITHUB_ICON}
                      <span>View on GitHub</span>
                    </Link>
                  )}
                  <button
                    type="button"
                    role="menuitem"
                    className="flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm font-medium text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setCtaOpen(false);
                      setPrototypeLightboxOpen(true);
                    }}
                  >
                    <span aria-hidden>↗</span>
                    <span>Open prototype</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {prototypeHref !== "#" && (
        <PrototypeLightbox
          open={prototypeLightboxOpen}
          onClose={() => setPrototypeLightboxOpen(false)}
          src={prototypeHref}
          title="Content Engine prototype"
        />
      )}
    </nav>
  );
}
