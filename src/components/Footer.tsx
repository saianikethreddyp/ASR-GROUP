import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111820] text-[#f4f0e8]">
      <div className="px-6 py-20 sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-28">
        <div className="mx-auto grid max-w-[1440px] items-end gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,.75fr)]">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.19em] text-[#c6a36b] uppercase">
              Start a project
            </p>
            <h2 className="mt-5 max-w-[13ch] text-[clamp(3.2rem,6.2vw,7rem)] leading-[0.9] tracking-[-0.064em]">
              Tell us what you&apos;re planning.
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-[30rem] text-[0.95rem] leading-7 text-white/66">
              Share the ambition, location and current stage. A first conversation can clarify
              the scope and the most useful next step.
            </p>
            <a
              href="tel:+918008667766"
              className="group mt-8 inline-flex min-h-12 items-center gap-10 rounded-[10px] bg-[#f2eee6] px-7 text-[0.72rem] font-semibold tracking-[0.11em] uppercase transition-colors hover:bg-[#c6a36b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f2eee6]"
              style={{ color: "#111820" }}
            >
              Start a conversation
              <span
                aria-hidden="true"
                className="text-base transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/13 px-6 py-10 sm:px-9 lg:px-[4.8rem] lg:py-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[minmax(18rem,1.15fr)_repeat(3,minmax(9rem,.55fr))]">
          <div>
            <p className="text-2xl tracking-[-0.04em]">ASR Group</p>
            <p className="mt-4 max-w-[25rem] text-sm leading-6 text-white/55">
              Premium interiors and construction delivered through integrated planning,
              coordination and execution.
            </p>
            <p className="mt-8 text-[0.62rem] font-semibold tracking-[0.16em] text-[#c6a36b] uppercase">
              Designed with intent. Built with control.
            </p>
          </div>

          <nav aria-label="Company">
            <p className="text-[0.58rem] font-semibold tracking-[0.17em] text-white/42 uppercase">
              Company
            </p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-white/72">
              <Link className="transition-colors hover:text-white" href="#about">
                About Us
              </Link>
              <Link className="transition-colors hover:text-white" href="#clients">
                Clients
              </Link>
              <Link className="transition-colors hover:text-white" href="#projects">
                Projects
              </Link>
            </div>
          </nav>

          <nav aria-label="Explore">
            <p className="text-[0.58rem] font-semibold tracking-[0.17em] text-white/42 uppercase">
              Explore
            </p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-white/72">
              <Link className="transition-colors hover:text-white" href="#about">
                Interiors
              </Link>
              <Link className="transition-colors hover:text-white" href="#about">
                Construction
              </Link>
              <Link className="transition-colors hover:text-white" href="#projects">
                Selected Work
              </Link>
            </div>
          </nav>

          <div>
            <p className="text-[0.58rem] font-semibold tracking-[0.17em] text-white/42 uppercase">
              Contact
            </p>
            <address className="mt-5 text-sm leading-6 text-white/62 not-italic">
              Plot Nos. 8–9, Krithika Layout
              <br />
              Madhapur, Hyderabad
              <br />
              Telangana 500081
            </address>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-white/76">
              <a className="transition-colors hover:text-white" href="tel:+918008667766">
                Turnkey: +91 80086 67766
              </a>
              <a className="transition-colors hover:text-white" href="tel:+919908606867">
                Kitchens: +91 99086 06867
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 sm:px-9 lg:px-[4.8rem]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 text-[0.58rem] tracking-[0.1em] text-white/42 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ASR Homes LLP. All rights reserved.</p>
          <Link className="transition-colors hover:text-white" href="#main-content">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
