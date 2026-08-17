import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111820] text-[#f4f0e8]">
      <div className="px-6 py-14 sm:px-9 sm:py-16 lg:px-[4.8rem] lg:py-20">
        <div className="mx-auto grid max-w-[1440px] items-end gap-9 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,.75fr)]">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.19em] text-[#c6a36b] uppercase">
              Start a project
            </p>
            <h2 className="mt-4 max-w-[16ch] !text-[clamp(2.25rem,3.25vw,3.5rem)] !leading-[1.02]">
              Start with a clearer next step.
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-[30rem] !text-[0.875rem] !leading-6 text-white/66">
              Share the project type, location and current stage. We&apos;ll help identify the work
              required and the right next step.
            </p>
            <Link
              href="/contact"
              className="cta-primary group mt-6 inline-flex min-h-10 items-center gap-8 rounded-[8px] px-6 !text-[0.65rem] font-semibold tracking-[0.1em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2eee6]"
            >
              Start a project
              <span
                aria-hidden="true"
                className="text-base text-[#111820]/70 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/13 px-6 py-8 sm:px-9 lg:px-[4.8rem] lg:py-10">
        <div className="mx-auto grid max-w-[1440px] gap-9 lg:grid-cols-[minmax(18rem,1.15fr)_repeat(3,minmax(9rem,.55fr))]">
          <div>
            <p className="!text-[1rem] font-medium tracking-[-0.04em]">ASR Group</p>
            <p className="mt-3 max-w-[23rem] !text-[0.8125rem] !leading-5 text-white/55">
              Premium interiors and construction, planned and completed by one experienced team.
            </p>
            <p className="mt-6 !text-[0.56rem] font-semibold tracking-[0.16em] text-[#c6a36b] uppercase">
              From structure to soul.
            </p>
          </div>

          <nav aria-label="Company">
            <p className="text-[0.58rem] font-semibold tracking-[0.17em] text-white/42 uppercase">
              Company
            </p>
            <div className="mt-4 flex flex-col items-start gap-2.5 !text-[0.8125rem] text-white/72">
              <Link className="transition-colors hover:text-white" href="/about">
                About Us
              </Link>
              <Link className="transition-colors hover:text-white" href="/clients">
                Clients
              </Link>
              <Link className="transition-colors hover:text-white" href="/projects">
                Projects
              </Link>
            </div>
          </nav>

          <nav aria-label="Explore">
            <p className="text-[0.58rem] font-semibold tracking-[0.17em] text-white/42 uppercase">
              Explore
            </p>
            <div className="mt-4 flex flex-col items-start gap-2.5 !text-[0.8125rem] text-white/72">
              <Link className="transition-colors hover:text-white" href="/interiors">
                Interiors
              </Link>
              <Link className="transition-colors hover:text-white" href="/construction">
                Construction
              </Link>
              <Link className="transition-colors hover:text-white" href="/projects">
                Selected Work
              </Link>
              <Link className="transition-colors hover:text-white" href="/gallery">
                Gallery
              </Link>
            </div>
          </nav>

          <div>
            <p className="text-[0.58rem] font-semibold tracking-[0.17em] text-white/42 uppercase">
              Contact
            </p>
            <address className="mt-4 !text-[0.8125rem] !leading-5 text-white/62 not-italic">
              4th Floor, Sri Arcade Bldg
              <br />
              Plot No. 34, Jayabheri Enclave
              <br />
              Gachibowli, Hyderabad 500032
            </address>
            <div className="mt-4 flex flex-col items-start gap-2.5 !text-[0.8125rem] text-white/76">
              <a className="transition-colors hover:text-white" href="tel:+918006997799">
                +91 80069 97799
              </a>
              <a className="transition-colors hover:text-white" href="mailto:info@asrgroupindia.in">
                info@asrgroupindia.in
              </a>
              <p className="text-white/55">Hyderabad · Bangalore · Vijayawada</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 sm:px-9 lg:px-[4.8rem]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 !text-[0.54rem] tracking-[0.1em] text-white/42 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ASR Homes LLP. All rights reserved.</p>
          <Link className="transition-colors hover:text-white" href="#main-content">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
