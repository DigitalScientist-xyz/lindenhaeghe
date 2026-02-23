"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

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

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-lg border border-gray-600 bg-gray-700 text-gray-100 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-300 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

type StickyPrototypeCTAProps = {
  href?: string;
  githubHref?: string;
};

export function StickyPrototypeCTA({ href = "#", githubHref }: StickyPrototypeCTAProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [mobileOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed z-40 top-[3.6rem] right-4 sm:right-6 lg:right-8"
      aria-label="Quick links"
    >
      {/* Desktop: always-visible button group */}
      <div className="hidden sm:flex items-center gap-2 rounded-lg border border-gray-200 bg-surface/95 shadow-sm px-1 py-1 backdrop-blur-sm">
        {githubHref && (
          <Link
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnBase} w-10 h-10`}
            aria-label="View on GitHub"
          >
            {GITHUB_ICON}
          </Link>
        )}
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnBase} px-4 py-2.5 text-sm font-medium`}
        >
          Open prototype
          <span aria-hidden>↗</span>
        </Link>
      </div>

      {/* Mobile: single Actions button with dropdown */}
      <div className="sm:hidden relative">
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className={`${btnBase} w-11 h-11 px-3`}
          aria-expanded={mobileOpen}
          aria-haspopup="true"
          aria-label={mobileOpen ? "Close links menu" : "Open links menu"}
        >
          {LINK_ICON}
          <ChevronIcon open={mobileOpen} />
        </button>
        {mobileOpen && (
          <div
            className="absolute top-full right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-surface shadow-lg py-1 z-50"
            role="menu"
          >
            {githubHref && (
              <Link
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                className="flex items-center gap-3 w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {GITHUB_ICON}
                <span>View on GitHub</span>
              </Link>
            )}
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              className="flex items-center gap-3 w-full px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <span aria-hidden>↗</span>
              <span>Open prototype</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
