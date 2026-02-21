import Link from "next/link";

type StickyPrototypeCTAProps = {
  href?: string;
};

export function StickyPrototypeCTA({ href = "#" }: StickyPrototypeCTAProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-gray-200 bg-white/95 text-gray-600 text-sm font-medium hover:border-accent hover:text-accent transition-colors shadow-sm"
    >
      Open prototype
      <span aria-hidden>↗</span>
    </Link>
  );
}
