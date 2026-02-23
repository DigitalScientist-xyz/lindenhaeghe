"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ScrollSection";
import { motion, AnimatePresence } from "framer-motion";

type StepBase = {
  label: string;
  desc: string;
  vision: string;
  prototype: string;
  example?: string | null;
  exampleAfter?: string;
  exampleIntro?: string;
  exampleList?: string[];
  exampleBlocks?: { title: string; items: string[] }[];
};

const STEPS: StepBase[] = [
  {
    label: "Source of Truth",
    desc: "Where official course content resides.",
    vision:
      "The starting point is wherever the official source of truth for course content resides. This may include CMS systems, internal databases, or validated repositories containing full course material, compliance notes, pricing, and detailed specifications.",
    prototype:
      "The current prototype uses publicly available course product pages as the source of truth and extracts their content.",
    example:
      "A pension course page contains the title, learning objectives, key topics, price, duration, and disclaimers. Instead of copying this manually, the system treats that page as the authoritative content source.",
  },
  {
    label: "Structuring Layer",
    desc: "Content organised into reusable components.",
    vision:
      "Course content is organised into clearly defined components that are independent of layout or format. These components become reusable building blocks.",
    prototype:
      "The prototype extracts and reorganises website content into a structured dataset.",
    example: null,
    exampleList: [
      "Learning objectives",
      "Key topics",
      "Benefits",
      "Compliance notes",
      "Target audience",
      "Pricing",
    ],
    exampleAfter:
      "These blocks can now be reused in any format without reshaping the content.",
  },
  {
    label: "Format Transformation",
    desc: "Structured content adapted per medium.",
    vision:
      "Structured content is adapted to fit the purpose, audience, and medium. Each format follows its own tone, structure, and emphasis.",
    prototype:
      "The structured dataset is transformed into three whitepaper variants — lead magnet, product deep dive, and update version — with tone and structure adjusted per version.",
    example: null,
    exampleIntro: "The same course information can:",
    exampleList: [
      "Be expanded into a detailed whitepaper section",
      "Be rewritten as a conversational video script",
      "Be condensed into a social media post",
      "Be reframed into a sales-focused summary",
    ],
    exampleAfter:
      "The core facts remain aligned with the source. The structure, tone, and emphasis adapt to the medium.",
  },
  {
    label: "Validation Layer",
    desc: "AI checks tone, structure, compliance.",
    vision:
      "An AI validation agent checks outputs based on the requirements of the intended medium, including tone, structure, compliance elements, and completeness.",
    prototype:
      "The prototype includes a basic validation step to review generated output.",
    example: null,
    exampleBlocks: [
      {
        title: "For a whitepaper, the validation may check:",
        items: [
          "Are all learning objectives included?",
          "Is the tone professional and aligned with the brand?",
          "Are required disclaimers present?",
        ],
      },
      {
        title: "For a video script, it might check:",
        items: [
          "Is the language conversational?",
          "Is the script length appropriate?",
        ],
      },
    ],
  },
  {
    label: "Multi Format Export",
    desc: "Export into template-ready formats.",
    vision:
      "Structured content can be exported into template-ready formats compatible with different design and production tools.",
    prototype:
      "The prototype supports PDF export only.",
    example: null,
    exampleList: [
      "A Figma layout template",
      "A video scripting tool",
      "An audio narration workflow",
      "A brochure template",
    ],
    exampleAfter:
      "Because the structure is standardised, new tools can be connected without rebuilding the content logic.",
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
              className={`w-full text-left border rounded-sm p-4 h-full bg-surface transition-colors hover:border-accent/50 ${
                openIndex === i ? "border-accent ring-1 ring-accent/20" : "border-gray-300"
              }`}
            >
              <div className="text-xs text-accent font-medium mb-1">
                Step {i + 1}
              </div>
              <div className="font-medium text-foreground mb-2">
                {step.label}
              </div>
              <p className="text-sm text-gray-600">{step.desc}</p>
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
            <div className="border border-gray-300 rounded-sm p-6 bg-accent-muted/50 border-accent/20">
              <h3 className="font-medium text-foreground mb-6">
                {STEPS[openIndex].label} — in detail
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Vision</h4>
                  <p>{STEPS[openIndex].vision}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Prototype</h4>
                  <p>{STEPS[openIndex].prototype}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Example</h4>
                  {STEPS[openIndex].exampleBlocks ? (
                    <div className="space-y-4">
                      {STEPS[openIndex].exampleBlocks!.map((block, bi) => (
                        <div key={bi}>
                          <p className="font-medium text-foreground mb-2">{block.title}</p>
                          <ul className="list-none space-y-1">
                            {block.items.map((item, ii) => (
                              <li key={ii} className="flex gap-2">
                                <span className="text-accent shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : STEPS[openIndex].exampleList ? (
                    <>
                      {STEPS[openIndex].exampleIntro && (
                        <p className="font-medium text-foreground mb-2">{STEPS[openIndex].exampleIntro}</p>
                      )}
                      <ul className="list-none space-y-1 mb-3">
                        {STEPS[openIndex].exampleList!.map((item, ii) => (
                          <li key={ii} className="flex gap-2">
                            <span className="text-accent shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {STEPS[openIndex].exampleAfter && (
                        <p>{STEPS[openIndex].exampleAfter}</p>
                      )}
                    </>
                  ) : (
                    <p>{STEPS[openIndex].example}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-center gap-2 text-gray-500 text-sm overflow-x-auto pb-2 flex-wrap">
        <span>Source of Truth</span>
        <span>→</span>
        <span>Structuring Layer</span>
        <span>→</span>
        <span>Format Transformation</span>
        <span>→</span>
        <span>Validation Layer</span>
        <span>→</span>
        <span>Multi Format Export</span>
      </div>
    </>
  );
}
