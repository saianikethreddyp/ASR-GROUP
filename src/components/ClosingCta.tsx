import Link from "next/link";
import Reveal from "@/components/Reveal";

type ClosingCtaProps = {
  eyebrow?: string;
  title: string;
  body: string;
  ctaLabel?: string;
};

export default function ClosingCta({
  eyebrow = "Start a project",
  title,
  body,
  ctaLabel = "Plan the next step",
}: ClosingCtaProps) {
  return (
    <section className="px-5 pb-5 pt-16 sm:px-9 sm:pb-9 sm:pt-20 lg:px-[4.8rem] lg:pb-[4.8rem] lg:pt-24">
      <Reveal className="mx-auto grid max-w-[1540px] gap-9 rounded-[18px] bg-[#081523] px-6 py-12 text-[#f2eee6] sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,.9fr)] lg:items-end lg:gap-16 lg:px-14 lg:py-16">
        <div>
          <p className="mb-4 text-[0.62rem] font-semibold tracking-[0.17em] text-[#c6a36b] uppercase">
            {eyebrow}
          </p>
          <h2 className="font-display max-w-[15ch] text-[clamp(2.35rem,3.8vw,4.35rem)]">
            {title}
          </h2>
        </div>
        <div className="lg:pb-1">
          <p className="max-w-[35rem] text-[0.94rem] leading-7 text-white/66">{body}</p>
          <Link
            href="/contact"
            className="cta-primary group mt-7 inline-flex min-h-13 items-center gap-9 rounded-[10px] px-6 text-[0.76rem] font-semibold"
          >
            {ctaLabel}
            <span
              aria-hidden="true"
              className="text-[#111820]/70 transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
