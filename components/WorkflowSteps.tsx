"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ScrollSection";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    label: "Course Page",
    desc: "Source content from existing course or label materials.",
    detail:
      "The pipeline starts from existing Certify360 course or label content—PDFs, CMS pages, or structured data. No manual copy-paste; the system ingests the same sources that marketing and design already use, so the whitepaper stays aligned with approved materials.",
  },
  {
    label: "Extract",
    desc: "Deterministic extraction of facts and structure.",
    detail:
      "A Python-based extractor pulls out key facts, section headings, learning outcomes, and claims in a structured way. This step is deterministic: no LLM guessing. What goes into the next stage is a clean, factual skeleton—reducing the risk of hallucination when the LLM writes the narrative.",
  },
  {
    label: "Generate",
    desc: "LLM produces draft narrative from extracted data.",
    detail:
      "The LLM receives the extracted structure and facts as input and produces fluent, on-brand prose for each section. Prompts and templates constrain tone and format. Because generation is grounded in extracted content, the draft stays close to the source while reading like a finished whitepaper.",
  },
  {
    label: "Quality Guardian",
    desc: "AI + rules check compliance and consistency.",
    detail:
      "Before export, an automated layer checks the draft against rules: claim accuracy, required sections, terminology, and compliance flags. Issues are flagged for human review. This keeps quality consistent and catches problems early instead of in final review.",
  },
  {
    label: "Template Export",
    desc: "Layout-ready output for design tools.",
    detail:
      "The approved draft is exported into a template format that design tools can use—structured sections, placeholders, and style hints. Designers can focus on layout and visuals instead of rebuilding the document from scratch. Template versioning allows controlled updates across labels.",
  },
];

export function WorkflowSteps() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="flex flex-wrap items-stretch gap-2 sm:gap-4 justify-between mb-8">
        {STEPS.map((step, i) => (
          <FadeIn key={step.label} delay={i * 0.08} className="flex-1 min-w-[140px] max-w-[200px]">
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full text-left border rounded-sm p-4 h-full bg-white transition-colors hover:border-accent/50 ${
                openIndex === i ? "border-accent ring-1 ring-accent/20" : "border-gray-200"
              }`}
            >
              <div className="text-xs text-accent font-medium mb-1">
                Step {i + 1}
              </div>
              <div className="font-medium text-foreground mb-2">
                {step.label}
              </div>
              <p className="text-sm text-gray-500">{step.desc}</p>
              <p className="text-xs text-accent mt-2">
                {openIndex === i ? "Click to collapse ▲" : "Click for more ▼"}
              </p>
            </button>
          </FadeIn>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {openIndex !== null && (
          <motion.div
            key={openIndex}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden mb-8"
          >
            <div className="border border-gray-200 rounded-sm p-6 bg-accent-muted/50 border-accent/20">
              <h3 className="font-medium text-foreground mb-2">
                {STEPS[openIndex].label} — in detail
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {STEPS[openIndex].detail}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-center gap-2 text-gray-400 text-sm overflow-x-auto pb-2">
        <span>Course Page</span>
        <span>→</span>
        <span>Extract</span>
        <span>→</span>
        <span>Generate</span>
        <span>→</span>
        <span>Quality Guardian</span>
        <span>→</span>
        <span>Template Export</span>
      </div>
    </>
  );
}
