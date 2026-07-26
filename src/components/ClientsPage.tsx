"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ClosingCta from "@/components/ClosingCta";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";
import Reveal from "@/components/Reveal";

const priorityClients = [
  { name: "ICRISAT", industry: "Institutions & Public" },
  { name: "Wipro", industry: "Technology & Business" },
  { name: "Rallis India", industry: "Industry & Enterprise" },
  { name: "Hetero Drugs", industry: "Healthcare & Pharma" },
  { name: "India Cements", industry: "Industry & Enterprise" },
  { name: "K. Raheja IT Park", industry: "Development" },
  { name: "Karnataka Thermal Power", industry: "Infrastructure" },
  { name: "BMW", industry: "Automotive & Enterprise" },
  { name: "TCI Constructions", industry: "Development" },
  { name: "DSR Constructions", industry: "Development" },
  { name: "Manjeera Group", industry: "Development" },
  { name: "Ramky", industry: "Development" },
] as const;

const experienceGroups = [
  {
    number: "01",
    title: "Technology and business",
    description: "Workplaces and business environments planned around daily use, technical needs, durable materials and the organization they represent.",
    names: ["Wipro", "Satyam Computer Services", "Impec Soft Solutions", "Webex Communications India", "Knoah Solutions", "Lancesoft India"],
  },
  {
    number: "02",
    title: "Industry and enterprise",
    description: "Industrial and operational spaces where services, materials and project teams must work together.",
    names: ["Rallis India, a Tata Enterprise", "Hetero Drugs", "India Cements", "Lee Pharma", "MIC Electricals", "Karnataka Thermal Power"],
  },
  {
    number: "03",
    title: "Developers and project organizations",
    description: "Project experience associated with established developers, residential communities, flats, and villas in and around Hyderabad.",
    names: ["TCI Constructions", "DSR Constructions", "K. Raheja IT Park", "Indu Projects", "Vertex Nirman", "Vertex Homes"],
  },
  {
    number: "04",
    title: "Retail & Commercial Industries",
    description: "Public spaces, hotels, retail stores, and other customer-facing environments that require functional and welcoming designs.",
    names: ["ICRISAT", "United Nations Organization project", "SGS of Sweden", "Hotel Halliburton", "Reliance Fresh", "Pyramid Saimira Theatre", "ISS Call Centre"],
  },
] as const;

const institutionalProjects = [
  {
    title: "C.M. Camp Office",
    location: "Telangana",
    image: "/media/projects/cm-camp-office-illustrative.jpg",
    alt: "Illustrative view of a formal executive office with walnut panelling",
    slug: "cm-camp-office-telangana",
  },
  {
    title: "Jubilee Hall Restoration",
    location: "Public Gardens, Hyderabad",
    image: "/media/projects/jubilee-hall-restoration-illustrative.jpg",
    alt: "Illustrative view of the restored historic Jubilee Hall",
    slug: "jubilee-hall-restoration",
  },
  {
    title: "Telangana Legislative Assembly",
    location: "Hyderabad",
    image: "/media/projects/telangana-assembly-illustrative.jpg",
    alt: "Illustrative view of a formal legislative assembly chamber",
    slug: "telangana-legislative-assembly",
  },
] as const;

const residentialDevelopments = [
  "Manjeera Majestic", "Manjeera Trinity", "Indu Fortune Fields", "Ramky Towers",
  "Ramky Pearl", "My Home Jewel", "Lanco Hills", "Aparna Sarovar",
  "Aparna Cyber Commune", "Aparna Hillpark", "Rainbow Vistas", "Lodha developments",
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export default function ClientsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <section className="relative px-5 pb-20 pt-36 sm:px-9 sm:pb-24 sm:pt-44 lg:px-[4.8rem] lg:pb-32 lg:pt-52" aria-labelledby="clients-title">
        <InternalHeader activeLabel="Clients" />
        <div className="mx-auto grid max-w-[1540px] gap-12 lg:grid-cols-[minmax(0,1.24fr)_minmax(20rem,.76fr)] lg:items-end lg:gap-20">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0.01 : 0.9, delay: 0.1, ease }}>
            <p className="mb-6 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Clients</p>
            <h1 id="clients-title" className="font-display display-heading-long max-w-[13ch] text-[clamp(3.8rem,6.7vw,7.7rem)] leading-[0.91] tracking-[-0.05em]">
              Experience across spaces that matter.
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-28">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="grid gap-7 lg:grid-cols-[minmax(0,.72fr)_minmax(22rem,.28fr)] lg:items-end">
            <div>
              <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Selected experience</p>
              <h2 className="font-display max-w-[12ch] text-[clamp(3.2rem,5vw,6rem)] leading-[0.94] tracking-[-0.045em]">Selected clients and projects.</h2>
            </div>
            <p className="max-w-[28rem] text-sm leading-6 text-[#586168] lg:justify-self-end">
              A selection of the organisations, developers, brands and institutions represented in ASR&apos;s project experience.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 border-l border-t border-[#111820]/14 sm:grid-cols-2 lg:grid-cols-4">
            {priorityClients.map((client, index) => (
              <motion.div
                key={client.name}
                className="relative flex min-h-[10rem] flex-col justify-end border-b border-r border-[#111820]/14 p-6 sm:min-h-[12rem] sm:p-7"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.58, delay: (index % 4) * 0.05, ease }}
              >
                <p className="absolute left-6 top-6 text-[0.65rem] font-semibold tracking-[0.15em] text-[#9a7645] uppercase sm:left-7 sm:top-7">
                  {(index + 1).toString().padStart(2, '0')}
                </p>
                <div>
                  <p className="mb-2 text-[0.65rem] font-medium tracking-[0.08em] text-[#586168] uppercase">
                    {client.industry}
                  </p>
                  <h3 className="font-display text-[clamp(1.4rem,2vw,1.8rem)] leading-[1.1] tracking-[-0.02em] text-[#111820]">
                    {client.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="flex flex-col items-center text-center">
            <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Areas of experience</p>
            <h2 className="font-display max-w-[24ch] text-[clamp(3.2rem,5vw,6rem)] leading-[0.94] tracking-[-0.045em]">Experience across different kinds of spaces.</h2>
          </Reveal>
          <div className="mt-16 border-t border-[#111820]/18">
            {experienceGroups.map((group, index) => (
              <Reveal key={group.title} className="grid gap-7 border-b border-[#111820]/18 py-10 lg:grid-cols-[5rem_minmax(17rem,.66fr)_minmax(18rem,.68fr)_minmax(19rem,.66fr)] lg:items-center lg:gap-10 lg:py-12" delay={index * 0.04}>
                <p className="text-[0.66rem] font-semibold tracking-[0.15em] text-[#9a7645]">{group.number}</p>
                <h3 className="font-display max-w-[11ch] text-[clamp(2rem,2.8vw,3.25rem)] leading-[1] tracking-[-0.035em]">{group.title}</h3>
                <p className="max-w-[31rem] text-[0.94rem] leading-7 text-[#505961]">{group.description}</p>
                <ul className="grid grid-cols-1 gap-x-5 gap-y-2 text-sm leading-6 text-[#252d34] sm:grid-cols-2 lg:grid-cols-1">
                  {group.names.map((name) => <li key={name}>{name}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="grid gap-8 lg:grid-cols-[minmax(0,.84fr)_minmax(24rem,.46fr)] lg:items-end">
            <div>
              <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Significant environments</p>
              <h2 className="font-display max-w-[13ch] text-[clamp(3.2rem,5vw,6rem)] leading-[0.94] tracking-[-0.045em]">Selected government and heritage projects.</h2>
            </div>
            <p className="max-w-[34rem] text-[0.98rem] leading-7 text-[#505961]">
              ASR&apos;s company profile includes work associated with the C.M. Camp Office in Telangana, the Telangana Legislative Assembly, and restoration work at Jubilee Hall in Hyderabad.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {institutionalProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <Link href={`/gallery/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#d8d0c4]">
                    <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]" />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-5">
                    <div>
                      <h3 className="font-display text-[clamp(1.65rem,2.1vw,2.45rem)] leading-none tracking-[-0.03em]">{project.title}</h3>
                      <p className="mt-2 text-xs text-[#626a70]">{project.location}</p>
                    </div>
                    <span className="mt-1 text-[#9a7645] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                  <p className="mt-4 text-[0.68rem] leading-5 text-[#687077]">Illustrative visual, not project photography.</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1000px]">
          <Reveal className="text-center">
            <h2 className="font-display mx-auto max-w-[20ch] text-[clamp(3rem,4.4vw,5.2rem)] leading-[0.95] tracking-[-0.042em]">Experience across established developments.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-12 grid border-t border-[#111820]/16 sm:grid-cols-2">
              {residentialDevelopments.map((development, index) => (
                <li key={development} className={`border-b border-[#111820]/16 py-4 text-sm text-[#30383f] ${index % 2 === 0 ? "sm:pr-6" : "sm:border-l sm:pl-6"}`}>{development}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ClosingCta
        eyebrow="Work with ASR"
        title="Need one team to manage your project?"
        body="Share the project type, stage and location. We’ll explain how ASR can help."
      />
      <InternalFooter />
    </article>
  );
}
