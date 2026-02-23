"use client";

import { useState } from "react";

const TABS = [
  { id: "conclusion", label: "Conclusion" },
  { id: "validate", label: "Validate" },
  { id: "key-risk", label: "Key Risk" },
  { id: "future", label: "Future Direction" },
] as const;

export function ReflectionTabs() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("conclusion");

  return (
    <div className="w-full">
      {/* Scrollable tab bar */}
      <div
        className="overflow-x-auto overflow-y-hidden pb-2 -mx-1"
        role="tablist"
        aria-label="Next steps sections"
      >
        <div className="flex gap-2 min-w-max pb-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-4 py-2.5 rounded-sm text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-accent text-white"
                  : "bg-surface border border-gray-300 text-gray-700 hover:border-accent/50 hover:text-accent"
              }`}
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab panels */}
      <div className="mt-6 min-h-[280px]" role="tabpanel" id="panel-conclusion" aria-labelledby="tab-conclusion" hidden={activeTab !== "conclusion"}>
        {activeTab === "conclusion" && (
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The current prototype demonstrates a single output format, but its purpose is architectural. It shows how course content can be extracted, structured, validated, and prepared as a controlled foundation for generation.
            </p>
            <p>
              The broader vision is to standardise course content into reusable schemas that can feed different content creation flows, such as whitepapers, video scripts, voiceovers, sales materials, or brochures.
            </p>
            <p>
              The goal is not to automate one format, but to structure the content layer that all formats depend on.
            </p>
            <p>
              Designers and marketers remain in control. The system prepares structured drafts and consistent context, while human expertise governs tone, compliance, and final execution.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 min-h-[280px]" role="tabpanel" id="panel-validate" aria-labelledby="tab-validate" hidden={activeTab !== "validate"}>
        {activeTab === "validate" && (
          <>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Before scaling beyond PDF, several foundational questions need to be answered:
            </p>
            <ul className="space-y-3 text-gray-700 leading-relaxed list-none">
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>Where does the true source of truth for course content live? Is it the website, CMS, internal database, or another system?</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>Is the website the correct entry point for structuring, or should integration happen earlier in the pipeline?</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>Which parts of course content are dependable and stable enough to model into reusable schemas?</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>Are there existing templates or structural patterns already used by marketing or design teams?</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>Which output formats are most common, and what structural components do they require?</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>What validation rules are needed per medium, including tone shifts and compliance constraints?</span>
              </li>
            </ul>
          </>
        )}
      </div>

      <div className="mt-6 min-h-[280px]" role="tabpanel" id="panel-key-risk" aria-labelledby="tab-key-risk" hidden={activeTab !== "key-risk"}>
        {activeTab === "key-risk" && (
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The largest dependency is the quality and consistency of the source layer.
            </p>
            <p>
              If the source of truth is fragmented, inconsistent, or frequently changing in structure, the extraction and modelling process becomes unstable. The structured layer can only be as reliable as the content it is built on.
            </p>
            <p>
              Strengthening and clarifying the upstream content source is therefore essential before scaling the system across formats.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 min-h-[280px]" role="tabpanel" id="panel-future" aria-labelledby="tab-future" hidden={activeTab !== "future"}>
        {activeTab === "future" && (
          <>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If the source layer is validated and stable, the next phase would include:
            </p>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-none mb-6">
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>Formalising reusable content schemas per course type</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>Defining format-specific prompt and template structures</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>Introducing media-aware validation rules</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>Exploring integration with existing tooling</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1.5 shrink-0">•</span>
                <span>Investigating retrieval over internal knowledge bases for up-to-date content</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              The long-term objective is a structured content foundation that enables predictable, scalable workflows across formats, rather than repeated restructuring for each new output.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
