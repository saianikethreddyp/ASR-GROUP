import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="display">Tell us what{" "}<br />you&apos;re planning.</p>
          <p className="contact-intro">A first conversation can clarify the scope, the open decisions and the right next step.</p>
          <a className="contact-action" href="tel:+919494282688">Call ASR <span>↗</span></a>
          <div className="contact-people">
            <a href="tel:+919494282688"><strong>Call</strong><span>+91 94942 82688</span></a>
            <a href="mailto:info@asrgroup.com"><strong>Email</strong><span>info@asrgroup.com</span></a>
          </div>
        </div>
        <div className="contact-image">
          <Image
            src="/images/generated/contact-building.png"
            alt="AI visualisation of a completed institutional building at twilight"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
          />
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <Link href="#main-content" className="footer-brand">ASR Group</Link>
        <nav aria-label="Footer navigation">
          <Link href="#about">Why one team</Link>
          <Link href="#expertise">What you need</Link>
          <Link href="#projects">Relevant work</Link>
          <Link href="#clients">Experience</Link>
          <Link href="#contact">Start a project</Link>
        </nav>
        <p>Hyderabad / Bengaluru / Vijayawada / Visakhapatnam</p>
        <span>© {new Date().getFullYear()} ASR Homes LLP Pvt. Ltd.</span>
      </div>
    </footer>
  );
}
