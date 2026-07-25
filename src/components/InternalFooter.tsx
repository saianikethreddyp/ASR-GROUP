import Link from "next/link";

const links = [
  ["About", "/about"],
  ["Clients", "/clients"],
  ["Projects", "/projects"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export default function InternalFooter() {
  return (
    <footer className="border-t border-[#111820]/14 px-5 py-7 text-[#111820] sm:px-9 lg:px-[4.8rem]">
      <div className="mx-auto flex max-w-[1540px] flex-col gap-5 text-[0.6rem] tracking-[0.08em] text-[#596168] uppercase lg:flex-row lg:items-center lg:justify-between">
        <p>© {new Date().getFullYear()} ASR Homes LLP. All rights reserved.</p>
        <nav
          aria-label="Footer navigation"
          className="-mx-1 flex flex-wrap items-center gap-x-5 gap-y-3"
        >
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="px-1 transition-colors hover:text-[#111820]"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#main-content"
            className="px-1 transition-colors hover:text-[#111820]"
          >
            Back to top ↑
          </Link>
        </nav>
      </div>
    </footer>
  );
}
