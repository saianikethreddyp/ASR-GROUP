import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getSignatureProject,
  signatureProjects,
} from "@/data/signatureProjects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return signatureProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getSignatureProject(slug);

  if (!project) return {};

  return {
    title: `${project.title} | ASR Group`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getSignatureProject(slug);

  if (!project) notFound();

  const projectIndex = signatureProjects.findIndex(
    (entry) => entry.slug === project.slug,
  );
  const nextProject =
    signatureProjects[(projectIndex + 1) % signatureProjects.length];

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <header className="absolute inset-x-0 top-0 z-20 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-9">
        <div className="mx-auto flex h-[76px] max-w-[1540px] items-center justify-between rounded-[17px] border border-white/24 bg-[#081523]/80 px-5 shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur-md sm:h-[86px] sm:px-7">
          <Link href="/" className="block w-[116px] sm:w-[132px]" aria-label="ASR Group home">
            <Image
              src="/brand/asr-group-2024-header-reversed.svg"
              alt="ASR Group"
              width={410}
              height={180}
              className="h-auto w-full"
            />
          </Link>
          <Link
            href="/#projects"
            className="text-[0.68rem] font-semibold tracking-[0.13em] text-white/84 uppercase transition-colors hover:text-[#c6a36b]"
          >
            ← Selected work
          </Link>
        </div>
      </header>

      <section className="relative min-h-[86svh] overflow-hidden bg-[#0b141d] text-[#f4f0e8]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="100vw"
          preload
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,8,12,.9)_0%,rgba(3,8,12,.18)_58%,rgba(3,8,12,.34)_100%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex min-h-[86svh] max-w-[1540px] items-end px-6 pb-10 pt-36 sm:px-9 sm:pb-14 lg:px-[4.8rem]">
          <div className="w-full">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#c6a36b]/70 bg-[#081523]/34 px-3 py-1.5 text-[0.6rem] font-semibold tracking-[0.17em] text-[#e0c597] uppercase backdrop-blur-sm">
                {project.discipline}
              </span>
              <span className="text-[0.64rem] tracking-[0.14em] text-white/68 uppercase">
                {project.sector}
              </span>
            </div>
            <h1 className="mt-5 max-w-[13ch] text-[clamp(3.4rem,7vw,7.2rem)] leading-[0.9] tracking-[-0.064em]">
              {project.title}
            </h1>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-white/24 pt-5">
              <p className="text-[0.68rem] font-semibold tracking-[0.15em] text-white/76 uppercase">
                {project.location}
              </p>
              <p className="max-w-[22rem] text-right text-[0.56rem] leading-4 tracking-[0.08em] text-white/58 uppercase">
                {project.imageNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-32">
        <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,.65fr)]">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
              Project record
            </p>
            <h2 className="mt-5 max-w-[18ch] text-[clamp(2.35rem,4vw,4.8rem)] leading-[0.98] tracking-[-0.052em]">
              Delivery where precision and accountability matter.
            </h2>
            <p className="mt-8 max-w-[46rem] text-[clamp(1rem,1.25vw,1.2rem)] leading-8 text-[#38414a]">
              {project.detail}
            </p>
          </div>

          <dl className="border-t border-[#111820]/18">
            {project.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[7rem_1fr] gap-6 border-b border-[#111820]/14 py-5"
              >
                <dt className="text-[0.6rem] font-semibold tracking-[0.14em] text-[#6f7478] uppercase">
                  {fact.label}
                </dt>
                <dd className="text-sm leading-6">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#111820] px-6 py-16 text-[#f4f0e8] sm:px-9 lg:px-[4.8rem]">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group mx-auto flex max-w-[1320px] items-end justify-between gap-8 border-t border-white/18 pt-8"
        >
          <div>
            <p className="text-[0.6rem] font-semibold tracking-[0.16em] text-[#c6a36b] uppercase">
              Next project
            </p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,4.4rem)] leading-none tracking-[-0.052em]">
              {nextProject.title}
            </h2>
          </div>
          <span
            aria-hidden="true"
            className="pb-1 text-3xl transition-transform duration-300 group-hover:translate-x-2"
          >
            →
          </span>
        </Link>
      </section>
    </article>
  );
}
