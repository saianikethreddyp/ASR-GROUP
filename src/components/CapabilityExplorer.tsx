"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const capabilities = [
  {
    number: "01",
    title: "Fit out a complete space",
    image: "/images/generated/turnkey-interiors.png",
    alt: "AI visualisation of a completed corporate office interior",
    copy: "Choose this when you need one team to turn an empty or existing space into a finished, usable environment.",
    tags: ["Offices", "Restaurants", "Hospitals", "Business spaces"],
  },
  {
    number: "02",
    title: "Build from the ground up",
    image: "/images/generated/construction.png",
    alt: "AI visualisation of a commercial construction project",
    copy: "Choose this when the requirement begins with civil construction and needs coordinated execution through handover.",
    tags: ["Commercial", "Institutional", "Residential execution", "Layout development"],
  },
  {
    number: "03",
    title: "Solve facade + systems",
    image: "/images/generated/specialist-systems.png",
    alt: "AI visualisation of a structural glazing and ACP facade",
    copy: "Choose this for facades, glazing, ACP, uPVC or metal work that must integrate cleanly with the wider build.",
    tags: ["Structural glazing", "ACP", "uPVC systems", "Metal works"],
  },
  {
    number: "04",
    title: "Plan kitchens + storage",
    image: "/images/generated/kitchens-wardrobes.png",
    alt: "AI visualisation of a premium kitchen and wardrobe interior",
    copy: "Choose this when everyday usability, storage planning, hardware and finish quality need equal attention.",
    tags: ["Kitchens", "Wardrobes", "Hardware", "Custom joinery"],
  },
];

export default function CapabilityExplorer() {
  const [active, setActive] = useState(0);
  const capability = capabilities[active];

  return (
    <section className="capability-section" id="expertise" aria-labelledby="capability-title">
      <div className="capability-intro">
        <div>
          <h2 id="capability-title" className="display" aria-label="Where are you starting from?">Where are you<span>starting from?</span></h2>
          <p>Pick the closest requirement. ASR can help define the connected scopes before execution begins.</p>
        </div>
      </div>
      <div className="capability-layout">
        <div className="capability-tabs" role="tablist" aria-label="Choose your project requirement">
          {capabilities.map((item, index) => (
            <button
              key={item.number}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="capability-panel"
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
              <em>{active === index ? "Active" : "View"}</em>
            </button>
          ))}
        </div>
        <div id="capability-panel" role="tabpanel" className="capability-panel">
          <div className="capability-image">
            <AnimatePresence mode="wait">
              <motion.div
                key={capability.image}
                className="absolute inset-0"
                initial={{ opacity: 0, clipPath: "inset(0 0 0 12%)" }}
                animate={{ opacity: 1, clipPath: "inset(0 0 0 0%)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src={capability.image} alt={capability.alt} fill sizes="(max-width: 900px) 100vw, 58vw" />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="capability-detail">
            <AnimatePresence mode="wait">
              <motion.p
                key={capability.copy}
                className="display"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {capability.copy}
              </motion.p>
            </AnimatePresence>
            <ul>{capability.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
