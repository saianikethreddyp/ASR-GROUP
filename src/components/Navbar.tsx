"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  ["Why one team", "#about"],
  ["What you need", "#expertise"],
  ["Relevant work", "#projects"],
  ["Experience", "#clients"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="page-shell nav-inner">
        <Link href="#main-content" className="brand" aria-label="ASR Group home" onClick={() => setOpen(false)}>
          <Image src="/asr-group-logo.png" alt="ASR Group" width={600} height={288} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>
        <Link className="nav-action" href="#contact">Start a project</Link>
        <button
          type="button"
          className={`menu-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span /><span />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>{label}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setOpen(false)}><span>05</span>Start a project</Link>
        </nav>
      </div>
    </header>
  );
}
