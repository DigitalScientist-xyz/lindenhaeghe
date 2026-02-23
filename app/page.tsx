import Link from "next/link";
import { ScrollSection, FadeIn } from "@/components/ScrollSection";
import { DotsNav } from "@/components/DotsNav";
import { WorkflowSteps } from "@/components/WorkflowSteps";
import { ReflectionTabs } from "@/components/ReflectionTabs";
import { IdeaTabs } from "@/components/IdeaTabs";

const PROTOTYPE_URL = "https://whitepaper.troycollins.nl/";
const GITHUB_URL = "https://github.com/DigitalScientist-xyz/content-engine";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-foreground pt-14">
      <DotsNav prototypeHref={PROTOTYPE_URL} githubHref={GITHUB_URL} />
      {/* ——— SECTION 1: HERO ——— */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 relative"
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6">
            Content Engine for Certify360
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl">
            A content model designed for multi-channel transformation.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mb-4 leading-relaxed">
            💡 <strong className="text-foreground">The idea:</strong> Structure course content once, so designers receive clear, reusable building blocks tailored to each medium and purpose.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed">
            📐 <strong className="text-foreground">Prototype:</strong> Course pages are treated as the source of truth. Content is extracted, structured into defined components, and transformed into three whitepaper variants — lead magnet, product deep dive, and update version — with basic tone and format validation applied per version.
          </p>
          <ul className="flex flex-wrap gap-4 mb-10 text-foreground font-medium">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Source of Truth First
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Template-driven Outputs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              Quality Guardrails Built-in
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#the-challenge"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white border border-accent rounded-sm font-medium text-sm hover:bg-transparent hover:text-accent transition-colors"
            >
              Explore the Concept
            </a>
          </div>
        </div>
        <a
          href="#the-challenge"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white border border-accent rounded-sm font-medium text-sm hover:bg-transparent hover:text-accent transition-colors"
        >
          Next chapter →
        </a>
      </section>

      {/* ——— SECTION 2: IDEA & THOUGHT PROCESS ——— */}
      <ScrollSection
        id="the-challenge"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 bg-[#e5e9f0] relative"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-8">
            Idea & Thought Process
          </h2>
          <IdeaTabs />
        </div>
        <a
          href="#the-solution"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white border border-accent rounded-sm font-medium text-sm hover:bg-transparent hover:text-accent transition-colors"
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
            Structured Content Transformation Workflow
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Click any step to see Vision, Prototype, and Example.
          </p>
          <WorkflowSteps />
        </div>
        <a
          href="#system-design"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white border border-accent rounded-sm font-medium text-sm hover:bg-transparent hover:text-accent transition-colors"
        >
          Next chapter →
        </a>
      </ScrollSection>

      {/* ——— SECTION 4: ARCHITECTURE ——— */}
      <ScrollSection
        id="system-design"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 bg-[#e5e9f0] relative"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground">
              System Design
            </h2>
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white border border-accent rounded-sm font-medium text-sm hover:bg-transparent hover:text-accent transition-colors"
            >
              View on GitHub
              <span aria-hidden>→</span>
            </Link>
          </div>
          <p className="text-gray-700 mb-6 max-w-3xl">
            The{" "}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Content Engine prototype
            </a>{" "}
            (GitHub: content-engine) implements this with a Python extractor, Next.js API routes, OpenAI for generation and validation, and Playwright for PDF export.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-600 text-sm mb-10 py-3 px-4 bg-surface rounded-sm border border-gray-300">
            <span>Course URL</span>
            <span>→</span>
            <span>Python extract (JSON)</span>
            <span>→</span>
            <span>/api/write (OpenAI)</span>
            <span>→</span>
            <span>/api/guardian (OpenAI)</span>
            <span>→</span>
            <span>/api/pdf (Playwright)</span>
            <span>→</span>
            <span>PDF</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                title: "Deterministic Extraction",
                tech: "Python",
                desc: "Structured pull of facts and sections from source—no generative guesswork. In the prototype: a Python (FastAPI) service fetches the course page and returns structured JSON; no LLM in this step.",
              },
              {
                title: "Generative Writing",
                tech: "LLM",
                desc: "Narrative generation from extracted data, constrained by templates. In the prototype: POST /api/write calls OpenAI with extracted data and template type (e.g. lead-magnet), returns markdown and layout spec.",
              },
              {
                title: "Quality Guardian",
                tech: "AI + rules",
                desc: "Compliance checks and consistency rules before export. In the prototype: POST /api/guardian uses OpenAI to review the draft (claims, tone, suggestions); human review still required before final use.",
              },
              {
                title: "Human-in-the-loop",
                tech: "Review",
                desc: "Design and marketing review before finalisation. The UI shows extracted data, generated draft, and guardian report so reviewers can approve or adjust before export.",
              },
              {
                title: "Template-driven layout",
                tech: "Export",
                desc: "Structured output for design tools and version control. In the prototype: a fixed HTML template is filled with generated markdown and rendered to PDF via Playwright; the same model could drive other formats later.",
              },
            ].map((block, i) => (
              <FadeIn key={block.title} delay={i * 0.1}>
                <div className="border border-gray-300 rounded-sm p-5 bg-surface">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-medium text-foreground">{block.title}</h3>
                    <span className="text-xs text-accent font-medium shrink-0">
                      {block.tech}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{block.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <a
          href="#impact"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white border border-accent rounded-sm font-medium text-sm hover:bg-transparent hover:text-accent transition-colors"
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
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-6">
            Measurable Impact
          </h2>
          <p className="text-gray-700 mb-10 max-w-2xl">
            Impact is measured by improvements in preparation time, structural consistency, validation accuracy, and designer workflow efficiency.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                metric: "Reduced Preparation Friction",
                detail:
                  "Structure course content once so teams spend less time reorganising before design begins.",
                measuredBy:
                  "time-to-first-structured draft and reduction in manual restructuring.",
              },
              {
                metric: "Increased Structural Consistency",
                detail:
                  "Ensure every output follows the same predictable content model across labels and formats.",
                measuredBy:
                  "template adherence rate and reduction in missing required components.",
              },
              {
                metric: "Reduced Repetition Across Formats",
                detail:
                  "Eliminate repeated reinterpretation and prompt rewriting for each new medium.",
                measuredBy:
                  "prompt reuse rate and reduction in duplicated content preparation steps.",
              },
              {
                metric: "Improved Validation & Trust",
                detail:
                  "Strengthen confidence in generated drafts through structured validation before human review.",
                measuredBy:
                  "guardian pass rate and percentage of drafts marked \"ready for refinement.\"",
              },
              {
                metric: "Designer Workflow Efficiency",
                detail:
                  "Enable designers to focus on refinement rather than reconstructing content structure.",
                measuredBy:
                  "time spent on formatting vs visual design and number of revision cycles.",
              },
            ].map((card, i) => (
              <FadeIn key={card.metric} delay={i * 0.1}>
                <div className="border border-gray-300 rounded-sm p-6 bg-surface">
                  <p className="text-xl font-medium text-foreground mb-2">
                    {card.metric}
                  </p>
                  <p className="text-gray-600 text-sm">{card.detail}</p>
                  <p className="text-gray-600 text-sm mt-2">
                    <strong className="text-foreground">Measured by:</strong>{" "}
                    {card.measuredBy}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <a
          href="#reflection"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white border border-accent rounded-sm font-medium text-sm hover:bg-transparent hover:text-accent transition-colors"
        >
          Next chapter →
        </a>
      </ScrollSection>

      {/* ——— SECTION 6: REFLECTION ——— */}
      <ScrollSection
        id="reflection"
        className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 bg-[#e5e9f0] relative"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-8">
            Next Steps & Conclusion
          </h2>
          <ReflectionTabs />
        </div>
        <a
          href="#cta"
          className="absolute bottom-8 right-6 sm:right-12 lg:right-24 inline-flex items-center justify-center px-5 py-2.5 bg-accent text-white border border-accent rounded-sm font-medium text-sm hover:bg-transparent hover:text-accent transition-colors"
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
            Get in touch
          </h2>
          <p className="text-gray-700 mb-8">
            Interested in the Content Engine or working together? Reach out.
          </p>
          <a
            href="mailto:hello@troycollins.nl"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white border border-accent font-medium rounded-sm hover:bg-transparent hover:text-accent transition-colors text-lg"
          >
            Contact me
          </a>
        </div>
        <footer className="mt-24 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>Built by <a href="https://troycollins.nl" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Troy Collins</a> (troycollins.nl)</p>
          <p className="mt-1">Contact: <a href="mailto:hello@troycollins.nl" className="text-accent hover:underline font-medium">hello@troycollins.nl</a></p>
        </footer>
      </ScrollSection>
    </div>
  );
}
