import Link from "next/link";
import { ScrollSection, FadeIn } from "@/components/ScrollSection";
import { DotsNav } from "@/components/DotsNav";
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { StickyPrototypeCTA } from "@/components/StickyPrototypeCTA";

const PROTOTYPE_URL = "#"; // Replace with your working app URL (e.g. apps/whitepaper-factory)
const GITHUB_URL = "#"; // Replace with your repo URL (e.g. https://github.com/org/whitepaper-factory)

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <DotsNav />
      <StickyPrototypeCTA href={PROTOTYPE_URL} />
      {/* ——— SECTION 1: HERO ——— */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 relative"
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6">
            Whitepaper Factory
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl">
            From course page to compliant whitepaper in minutes.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mb-12 leading-relaxed">
            An AI-assisted workflow for marketing and design teams within
            Certify360—turning course content into structured, on-brand
            whitepapers while keeping quality and compliance in check.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#the-challenge"
              className="inline-flex items-center justify-center px-5 py-2.5 text-accent border border-accent rounded-sm font-medium text-sm hover:bg-accent hover:text-white transition-colors"
            >
              Scroll to explore
            </a>
          </div>
        </div>
        <a
          href="#the-challenge"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 text-sm text-gray-400 hover:text-accent transition-colors"
        >
          Next chapter →
        </a>
      </section>

      {/* ——— SECTION 2: THE PROBLEM ——— */}
      <ScrollSection
        id="the-challenge"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 bg-[#f8fafc] relative"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-10">
            The Challenge
          </h2>
          <ul className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <FadeIn delay={0.1} className="flex gap-3">
              <span className="text-accent mt-1">•</span>
              <span>
                Marketing creates whitepapers manually, from scratch, for every
                label.
              </span>
            </FadeIn>
            <FadeIn delay={0.2} className="flex gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Designers start from zero each time—no shared structure.</span>
            </FadeIn>
            <FadeIn delay={0.3} className="flex gap-3">
              <span className="text-accent mt-1">•</span>
              <span>
                Inconsistent structure across labels increases review time and
                errors.
              </span>
            </FadeIn>
            <FadeIn delay={0.4} className="flex gap-3">
              <span className="text-accent mt-1">•</span>
              <span>
                Risk of compliance issues when content is rewritten by hand.
              </span>
            </FadeIn>
            <FadeIn delay={0.5} className="flex gap-3">
              <span className="text-accent mt-1">•</span>
              <span>
                High workload for repetitive formats that could be templated.
              </span>
            </FadeIn>
          </ul>
        </div>
        <a
          href="#the-solution"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 text-sm text-gray-400 hover:text-accent transition-colors"
        >
          Next chapter →
        </a>
      </ScrollSection>

      {/* ——— SECTION 3: THE SOLUTION ——— */}
      <ScrollSection
        id="the-solution"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 relative"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-12">
            The AI Workflow
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Click any step to see more detail.
          </p>
          <WorkflowSteps />
        </div>
        <a
          href="#system-design"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 text-sm text-gray-400 hover:text-accent transition-colors"
        >
          Next chapter →
        </a>
      </ScrollSection>

      {/* ——— SECTION 4: ARCHITECTURE ——— */}
      <ScrollSection
        id="system-design"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 bg-[#f8fafc] relative"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              System Design
            </h2>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium text-sm"
            >
              View on GitHub
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "Deterministic Extraction",
                tech: "Python",
                desc: "Structured pull of facts and sections from source—no generative guesswork.",
              },
              {
                title: "Generative Writing",
                tech: "LLM",
                desc: "Narrative generation from extracted data, constrained by templates.",
              },
              {
                title: "Quality Guardian",
                tech: "AI + rules",
                desc: "Compliance checks and consistency rules before export.",
              },
              {
                title: "Human-in-the-loop",
                tech: "Review",
                desc: "Design and marketing review before finalisation.",
              },
              {
                title: "Template-driven layout",
                tech: "Export",
                desc: "Structured output for design tools and version control.",
              },
            ].map((block, i) => (
              <FadeIn key={block.title} delay={i * 0.1}>
                <div className="border border-gray-200 rounded-sm p-5 bg-white">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-medium text-foreground">{block.title}</h3>
                    <span className="text-xs text-accent font-medium shrink-0">
                      {block.tech}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{block.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <a
          href="#impact"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 text-sm text-gray-400 hover:text-accent transition-colors"
        >
          Next chapter →
        </a>
      </ScrollSection>

      {/* ——— SECTION 5: IMPACT ——— */}
      <ScrollSection
        id="impact"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 relative"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-12">
            Measurable Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                metric: "70% faster draft creation",
                detail:
                  "First draft from course page to structured whitepaper in minutes instead of days.",
              },
              {
                metric: "Reduced compliance risk",
                detail:
                  "Guardian and extraction pipeline keep claims aligned with source content.",
              },
              {
                metric: "Consistent brand structure",
                detail:
                  "Templates ensure every label follows the same section and style rules.",
              },
              {
                metric: "Designers focus on refinement",
                detail:
                  "Less time on formatting and structure; more on polish and layout.",
              },
            ].map((card, i) => (
              <FadeIn key={card.metric} delay={i * 0.1}>
                <div className="border border-gray-200 rounded-sm p-6 bg-white">
                  <p className="text-xl font-medium text-foreground mb-2">
                    {card.metric}
                  </p>
                  <p className="text-gray-500 text-sm">{card.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <a
          href="#reflection"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 text-sm text-gray-400 hover:text-accent transition-colors"
        >
          Next chapter →
        </a>
      </ScrollSection>

      {/* ——— SECTION 6: REFLECTION ——— */}
      <ScrollSection
        id="reflection"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 bg-[#f8fafc] relative"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-10">
            Next Steps & Limitations
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <FadeIn delay={0.1}>
              <p>
                Without robust fact extraction, LLMs can hallucinate or drift from
                source material. The pipeline is designed so that generation is
                grounded in deterministically extracted content first.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                Human review remains essential—especially for compliance and
                brand voice. The tool supports designers and marketers; it does
                not replace their judgment.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                Future work may include RAG over internal knowledge bases,
                multi-label scaling, and template versioning so structure
                evolves in a controlled way.
              </p>
            </FadeIn>
          </div>
        </div>
        <a
          href="#cta"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 text-sm text-gray-400 hover:text-accent transition-colors"
        >
          Next chapter →
        </a>
      </ScrollSection>

      {/* ——— FINAL CTA + FOOTER ——— */}
      <ScrollSection
        id="cta"
        className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 py-24"
      >
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
            Explore the Interactive Prototype
          </h2>
          <Link
            href={PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-medium rounded-sm hover:bg-accent-light transition-colors text-lg"
          >
            Open Prototype
          </Link>
        </div>
        <footer className="mt-24 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>Whitepaper Factory</p>
          <p className="mt-1">Role: AI Specialist Design Assignment</p>
          <p className="mt-1">February 2025</p>
        </footer>
      </ScrollSection>
    </div>
  );
}
