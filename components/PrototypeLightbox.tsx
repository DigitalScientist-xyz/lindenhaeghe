"use client";

import { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

const CLOSE_ICON = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

type PrototypeLightboxProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  title?: string;
};

export function PrototypeLightbox({ open, onClose, src, title = "Content Engine prototype" }: PrototypeLightboxProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleEscape);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = prev;
    };
  }, [open, handleEscape]);

  if (!open || typeof document === "undefined") return null;

  const content = (
    <div
      className="fixed inset-0 z-[9999] flex flex-col bg-black"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{ isolation: "isolate" }}
    >
      {/* Header bar with close */}
      <div className="flex items-center justify-end gap-2 shrink-0 h-14 px-4 bg-gray-900 border-b border-gray-700">
        <span className="text-sm text-gray-300 mr-auto truncate">{title}</span>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Close prototype"
        >
          {CLOSE_ICON}
        </button>
      </div>
      {/* iframe fills remaining space */}
      <div className="flex-1 min-h-0 relative">
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 w-full h-full border-0 bg-white"
          allow="fullscreen"
        />
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
