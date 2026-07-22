import Image from "next/image";
import Link from "next/link";
import CapabilityExplorer from "@/components/CapabilityExplorer";
import Reveal from "@/components/Reveal";

const clients = ["ICRISAT", "WIPRO", "UNITED NATIONS", "L&T", "HETERO", "INDIA CEMENTS"];

const selectedWork = [
  {
    number: "01",
    title: "Automotive showroom",
    category: "Interiors",
    image: "/images/generated/automotive-showroom.png",
    alt: "AI visualisation of a premium automotive showroom interior",
    className: "work-primary",
  },
  {
    number: "02",
    title: "Commercial development",
    category: "Construction",
    image: "/images/generated/construction.png",
    alt: "AI visualisation of a commercial building under construction",
    className: "work-secondary",
  },
  {
    number: "03",
    title: "Specialist facade",
    category: "Systems",
    image: "/images/generated/specialist-systems.png",
    alt: "AI visualisation of structural glazing and ACP facade systems",
    className: "work-tertiary",
  },
];

const projectNames = [
  "Manjeera Majestic",
  "Lanco Hills",
  "My Home Vihanga",
  "Lodha Meridian",
  "BMW Showroom",
  "Aparna Sarovar",
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <Image
            src="/images/generated/hero-headquarters.png"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 68vw"
            className="object-cover object-[65%_center]"
          />
        </div>
        <div className="page-shell hero-inner">
          <Reveal className="hero-copy">
            <h1 id="hero-title" className="display hero-title">
              From first line
              <span>to final handover.</span>
            </h1>
            <p className="hero-description">
              Planning an office, institution, hospitality space or home? Bring construction,
              interiors and specialist systems under one accountable team.
            </p>
            <Link className="action action-solid" href="#contact">
              Discuss your project
              <span className="arrow" aria-hidden="true">↗</span>
            </Link>
          </Reveal>
          <div className="hero-index" aria-hidden="true">
            <span>ASR / 2026</span>
            <span>17.4486° N / 78.3908° E</span>
          </div>
        </div>
      </section>

      <section className="approach-section" id="about" aria-labelledby="approach-title">
        <div className="page-shell approach-grid">
          <Reveal>
            <div className="section-marker"><span>The problem we solve</span></div>
            <h2 id="approach-title" className="display approach-title">
              Your project should not feel like five separate jobs.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="approach-copy">
            <p>
              Civil work, interiors, facades, joinery and services often arrive through different
              vendors. Every handoff creates another decision for you to chase.
            </p>
            <p>
              ASR can coordinate those connected scopes as one delivery team, giving you a clearer
              point of responsibility from the first drawing through handover.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="approach-figure">
            <span className="display">One</span>
            <p>point of coordination when several parts of the project need to work together.</p>
          </Reveal>
        </div>
      </section>

      <CapabilityExplorer />

      <section className="work-section" id="projects" aria-labelledby="work-title">
        <div className="page-shell">
          <Reveal className="work-heading-row">
            <h2 id="work-title" className="display work-title">
              See what could
              <span>match your brief.</span>
            </h2>
            <p>
              Explore the kinds of spaces and specialist scopes ASR can take on. These concept
              visualisations show the intended design standard; named experience is listed below.
            </p>
          </Reveal>

          <div className="work-grid" id="gallery">
            {selectedWork.map((work, index) => (
              <Reveal key={work.number} delay={index * 0.08} className={`work-item ${work.className}`}>
                <div className="work-image">
                  <Image src={work.image} alt={work.alt} fill sizes="(max-width: 900px) 100vw, 65vw" />
                </div>
                <div className="work-caption">
                  <span>{work.number}</span>
                  <p>{work.title}</p>
                  <span>{work.category}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="project-register">
            <div className="section-marker"><span>Projects in the company profile</span></div>
            <div className="project-list">
              {projectNames.map((name, index) => (
                <div key={name} className="project-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{name}</p>
                  <span>Hyderabad</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="proof-section" id="clients" aria-labelledby="proof-title">
        <div className="page-shell proof-inner">
          <Reveal>
            <div className="section-marker section-marker-light"><span>Before you shortlist us</span></div>
            <h2 id="proof-title" className="display proof-title">
              Check the experience behind the conversation.
            </h2>
          </Reveal>
          <div className="client-rail" aria-label="Selected clients">
            {clients.map((client) => <span key={client}>{client}</span>)}
          </div>
        </div>
      </section>

      <section className="experience-section" aria-label="Experience and company principles">
        <div className="page-shell experience-grid">
          <Reveal className="experience-stat">
            <span className="display">25 years</span>
            <p>of interior experience across approximately 4,000 projects.</p>
          </Reveal>
          <Reveal delay={0.1} className="experience-note">
            <span>If your project includes construction</span>
            <p>
              ASR brings 20 years of construction experience and more than 6 lakh square feet of
              execution across commercial, institutional and residential assignments.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="principles">
            {[
              ["01", "Relevant judgement", "Experience across different spaces helps surface practical decisions earlier."],
              ["02", "Less vendor chasing", "Connected scopes can be coordinated through one accountable team."],
              ["03", "One finish standard", "Execution is considered from structure through the details you see and use."],
            ].map(([number, title, copy]) => (
              <div className="principle" key={title}>
                <span>{number}</span>
                <h3 className="display">{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="page-shell">
          <Reveal>
            <div className="section-marker"><span>What happens after you call</span></div>
            <h2 id="process-title" className="display process-title">Know what comes next.</h2>
          </Reveal>
          <div className="process-line">
            {["Share the brief", "Define the scope", "Coordinate delivery", "Handover"].map((step, index) => (
              <div key={step} className="process-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
          <p className="process-copy">
            Start with your site, requirement and expected timeline. ASR can then identify the right
            scope, the open decisions and a practical next step.
          </p>
        </div>
      </section>
    </>
  );
}
