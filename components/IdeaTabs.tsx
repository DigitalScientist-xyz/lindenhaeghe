"use client";

import { useState } from "react";

const TABS = [
  { id: "framing", label: "Framing the Problem" },
  { id: "exploring", label: "Exploring Early Directions" },
  { id: "dependency", label: "The Shared Content Foundation" },
  { id: "architectural", label: "Architectural Direction" },
  { id: "vision", label: "Vision" },
] as const;

export function IdeaTabs() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("framing");

  return (
    <div className="w-full">
      <div
        className="pb-2 -mx-1"
        role="tablist"
        aria-label="Idea & thought process sections"
      >
        <div className="flex flex-wrap gap-2 pb-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 rounded-sm text-sm font-medium transition-colors ${
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

      <div className="mt-6 min-h-[280px] text-gray-700 text-lg leading-relaxed" role="tabpanel" id="panel-framing" aria-labelledby="tab-framing" hidden={activeTab !== "framing"}>
        {activeTab === "framing" && (
          <>
            <p className="mb-4">
              Without access to internal workflows, tooling, or friction points, I began by mapping potential touchpoints for designers within the content lifecycle.
            </p>
            <p className="mb-4">
              The initial goal was simple: understand where designers interact with course material and where friction might occur.
            </p>
            <p className="mb-3">This led to broader questions:</p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>At what stage do designers receive course content?</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Is it already structured, or do they need to reorganise it?</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Are they responsible for shaping meaning, or primarily for visual presentation?</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Where does marketing preparation end and design execution begin?</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>How often is the same content reshaped for different formats?</li>
            </ul>
            <p className="mb-4">
              While mapping these designer touchpoints, it became clear that design does not exist in isolation. The preparation of course content upstream strongly influences how efficient and controlled the design phase can be.
            </p>
            <p className="mb-4">
              What began as a designer-focused investigation expanded into understanding the full course creation lifecycle. Supporting designers effectively required mapping how content moves from subject matter experts and compliance review through marketing preparation and into design execution.
            </p>
            <p>
              This shift clarified that friction in design often originates upstream, in how content is structured and prepared before it reaches visual production.
            </p>
          </>
        )}
      </div>

      <div className="mt-6 min-h-[280px] text-gray-700 text-lg leading-relaxed" role="tabpanel" id="panel-exploring" aria-labelledby="tab-exploring" hidden={activeTab !== "exploring"}>
        {activeTab === "exploring" && (
          <>
            <p className="mb-4">
              My early exploration centred on creative acceleration.
            </p>
            <p className="mb-4">
              Could course data be converted into structured scripts and prompt frameworks that designers could immediately work from? Could predefined templates in tools such as Figma be updated via JSON exports? Could platforms like Weavy.ai eventually plug into the same structured outputs?
            </p>
            <p className="mb-4">
              These directions were technically feasible. Structured exports, prompt injection, and template updates can connect content to layout, video, and media tools.
            </p>
            <p className="mb-4">
              However, each experiment revealed the same pattern.
            </p>
            <p className="mb-4">
              Before content could be used inside any tool, it had to be reorganised, contextualised, and adapted for the intended medium.
            </p>
            <p className="mb-4">
              The challenge was not connecting tools.<br />
              It was preparing the content so that those tools could use it reliably.
            </p>
            <p>
              That realisation shifted the focus.
            </p>
          </>
        )}
      </div>

      <div className="mt-6 min-h-[280px] text-gray-700 text-lg leading-relaxed" role="tabpanel" id="panel-dependency" aria-labelledby="tab-dependency" hidden={activeTab !== "dependency"}>
        {activeTab === "dependency" && (
          <>
            <p className="mb-4">
              All outputs across the organisation rely on the same underlying course information.
            </p>
            <ul className="list-none space-y-1 mb-4 font-medium text-foreground">
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Whitepapers</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Video scripts</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Infographics</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Audio narration</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Brochures</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Design layouts</li>
            </ul>
            <p className="mb-4">
              They are all built from the same course data: objectives, key topics, compliance notes, benefits, pricing, and contextual explanations.
            </p>
            <p className="mb-3">What changes between formats is not the source information, but:</p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>What is prioritised</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>How it is structured</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>The depth of explanation</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>The tone of voice</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>The intended audience</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>The delivery style</li>
            </ul>
            <p className="mb-3">For example:</p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>A whitepaper expands on context and regulatory detail.</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>A video script restructures the same information into spoken narrative flow.</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>An infographic condenses complex topics into visual highlights.</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>A promotional asset emphasises benefits and outcomes.</li>
            </ul>
            <p className="mb-4">
              The repetition does not lie in designing formats.<br />
              It lies in reshaping the same course information for each context.
            </p>
            <p className="mb-3">Each time, content must be:</p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Reordered</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Rewritten</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Re-emphasised</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Adjusted in tone</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Validated for medium-specific requirements</li>
            </ul>
            <p className="mb-4">
              That preparation layer is where friction occurs.
            </p>
            <p>
              By structuring course content into reusable components first, this preparation becomes controlled and predictable. The same structured data can then be transformed across formats without rebuilding context from scratch.
            </p>
          </>
        )}
      </div>

      <div className="mt-6 min-h-[280px] text-gray-700 text-lg leading-relaxed" role="tabpanel" id="panel-architectural" aria-labelledby="tab-architectural" hidden={activeTab !== "architectural"}>
        {activeTab === "architectural" && (
          <>
            <p className="mb-4">
              For the prototype, the website course pages are treated as the current source of truth. They contain up to date course information such as objectives, key topics, pricing, and contextual details.
            </p>
            <p className="mb-3">Content is extracted, labelled, and reorganised into reusable components such as:</p>
            <ul className="list-none space-y-1 mb-4">
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Learning objectives</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Key topics</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Benefits</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Compliance notes</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Pricing</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Duration</li>
            </ul>
            <p className="mb-3">From this structured foundation, the system prepares format specific representations tailored to each medium. This includes:</p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Structuring data into predictable formats such as JSON or markdown</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Injecting content into predefined prompt patterns</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Adjusting tone of voice depending on the medium</li>
              <li className="flex gap-2"><span className="text-accent shrink-0">•</span>Running context specific validation before output</li>
            </ul>
            <p className="mb-2">
              The aim is not full automation.
            </p>
            <p className="italic">
              The aim is to prepare designers and marketers with well structured starting material so they can focus on refinement rather than reformatting.
            </p>
          </>
        )}
      </div>

      <div className="mt-6 min-h-[280px] text-gray-700 text-lg leading-relaxed" role="tabpanel" id="panel-vision" aria-labelledby="tab-vision" hidden={activeTab !== "vision"}>
        {activeTab === "vision" && (
          <>
            <p className="mb-4">
              The vision is to structure course content so it can move smoothly between formats.
            </p>
            <p className="mb-4">
              The same course data can become a lead magnet, a detailed document, a script, or a promotional piece — without being reshaped from scratch each time.
            </p>
            <p>
              Consistency comes from structure.<br />
              Creativity builds on top.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
