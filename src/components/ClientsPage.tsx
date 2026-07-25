"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ClosingCta from "@/components/ClosingCta";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";
import Reveal from "@/components/Reveal";

const priorityClients = [
  {
    name: "ICRISAT",
    logo: "/media/client-logos/icrisat-compact.jpg",
    logoClassName: "h-[5.2rem] w-auto mix-blend-multiply",
  },
  {
    name: "Wipro",
    logo: "/media/client-logos/wipro.svg",
    logoClassName: "h-[4.8rem] w-auto",
  },
  { name: "Rallis India" },
  {
    name: "Hetero",
    logo: "/media/client-logos/hetero.jpg",
    logoClassName: "h-[5.2rem] w-auto mix-blend-multiply",
  },
  { name: "India Cements" },
  { name: "K. Raheja IT Park" },
  { name: "Karnataka Thermal Power" },
  {
    name: "BMW",
    logo: "/media/client-logos/bmw.jpg",
    logoClassName: "h-[5.2rem] w-[9.3rem] rounded-[4px] object-cover",
  },
  { name: "TCI Constructions" },
  { name: "DSR Constructions" },
  { name: "Manjeera Group" },
  { name: "Ramky" },
] as const;

const experienceGroups = [
  {
    number: "01",
    title: "Technology and business",
    description: "Workplaces and business environments requiring functional planning, technical coordination, durable execution, and alignment with the organization they represent.",
    names: ["Wipro", "Satyam Computer Services", "Impec Soft Solutions", "Webex Communications India", "Knoah Solutions", "Lancesoft India"],
  },
  {
    number: "02",
    title: "Industry and enterprise",
    description: "Operational environments where services, material performance, coordination, and accountable delivery must work together.",
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
    title: "Institutions and commercial environments",
    description: "Public, international, hospitality, retail, and customer-facing settings that carry distinct operational and representational responsibilities.",
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
              Trusted with spaces that carry real responsibility.
            </h1>
          </motion.div>
          <motion.div className="max-w-[33rem] lg:pb-2" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0.01 : 0.78, delay: 0.28, ease }}>
            <p className="text-[clamp(1rem,1.3vw,1.16rem)] leading-[1.72] text-[#465058]">
              Every client brings a different brief, environment, and standard to protect. ASR&apos;s experience includes work associated with homeowners, businesses, brands, developers, institutions, and public-sector settings.
            </p>
            <p className="mt-5 text-[clamp(1rem,1.3vw,1.16rem)] leading-[1.72] text-[#465058]">
              The names may be different. The responsibility remains the same: understand what must be delivered and coordinate the work required to deliver it well.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-28">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="grid gap-7 lg:grid-cols-[minmax(0,.72fr)_minmax(22rem,.28fr)] lg:items-end">
            <div>
              <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Selected experience</p>
              <h2 className="font-display max-w-[12ch] text-[clamp(3.2rem,5vw,6rem)] leading-[0.94] tracking-[-0.045em]">Experience across serious briefs.</h2>
            </div>
            <p className="max-w-[28rem] text-sm leading-6 text-[#586168] lg:justify-self-end">
              Selected official marks are shown for layout review. Confirm client approval before final publication.
            </p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 border-l border-t border-[#111820]/14 lg:grid-cols-4">
            {priorityClients.map((client, index) => (
              <motion.div
                key={client.name}
                className="grid min-h-[8.5rem] place-items-center border-b border-r border-[#111820]/14 px-4 text-center sm:min-h-[10rem] sm:px-7"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.58, delay: (index % 4) * 0.05, ease }}
              >
                {"logo" in client ? (
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={240}
                    height={100}
                    className={client.logoClassName}
                  />
                ) : (
                  <p className="text-[0.85rem] font-semibold tracking-[-0.015em] text-[#252d34] sm:text-[1rem]">
                    {client.name}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto max-w-[1540px]">
          <Reveal>
            <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Areas of experience</p>
            <h2 className="font-display max-w-[12ch] text-[clamp(3.2rem,5vw,6rem)] leading-[0.94] tracking-[-0.045em]">Different environments. One standard of responsibility.</h2>
          </Reveal>
          <div className="mt-16 border-t border-[#111820]/18">
            {experienceGroups.map((group, index) => (
              <Reveal key={group.title} className="grid gap-7 border-b border-[#111820]/18 py-10 lg:grid-cols-[5rem_minmax(17rem,.66fr)_minmax(18rem,.68fr)_minmax(19rem,.66fr)] lg:gap-10 lg:py-12" delay={index * 0.04}>
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
              <h2 className="font-display max-w-[13ch] text-[clamp(3.2rem,5vw,6rem)] leading-[0.94] tracking-[-0.045em]">Responsibility proven where the setting matters.</h2>
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
                  <p className="mt-4 text-[0.68rem] leading-5 text-[#687077]">Illustrative visual — original project photography pending.</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto grid max-w-[1540px] gap-14 lg:grid-cols-[minmax(23rem,.7fr)_minmax(0,1.3fr)] lg:gap-[clamp(4rem,9vw,10rem)]">
          <Reveal>
            <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">Homes &amp; communities</p>
            <p className="font-display text-[clamp(4.3rem,7vw,8.5rem)] leading-[0.82] tracking-[-0.055em]">4,000–5,000</p>
            <p className="mt-6 max-w-[25rem] text-[0.98rem] leading-7 text-[#505961]">
              Approximate residential flats and villas represented in ASR&apos;s source profile. The exact contribution must be confirmed before final publication.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display max-w-[12ch] text-[clamp(3rem,4.4vw,5.2rem)] leading-[0.95] tracking-[-0.042em]">Experience across established developments.</h2>
            <ul className="mt-10 grid border-t border-[#111820]/16 sm:grid-cols-2">
              {residentialDevelopments.map((development, index) => (
                <li key={development} className={`border-b border-[#111820]/16 py-4 text-sm text-[#30383f] ${index % 2 === 0 ? "sm:pr-6" : "sm:border-l sm:pl-6"}`}>{development}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ClosingCta
        eyebrow="Work with ASR"
        title="Your brief deserves clear ownership."
        body="Share the project type, stage and location. We’ll show where ASR can take responsibility."
      />
      <InternalFooter />
    </article>
  );
}
