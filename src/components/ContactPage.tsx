"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";

const ease = [0.22, 1, 0.36, 1] as const;
const ASR_WHATSAPP_NUMBER = "918008667766";

const projectTeams = [
  {
    value: "interiors",
    label: "Interiors",
    helper: "Homes, workplaces and branded spaces",
  },
  {
    value: "construction",
    label: "Infra Projects",
    helper: "Residential, commercial and institutional",
  },
  {
    value: "real-estate",
    label: "Real Estate / Layout",
    helper: "We will help route your enquiry",
  },
] as const;

const inputClassName =
  "min-h-14 w-full rounded-[10px] border border-[#111820]/16 bg-[#f7f3ec] px-4 text-[0.92rem] text-[#111820] outline-none transition-[border-color,box-shadow,background-color] placeholder:text-[#111820]/35 hover:border-[#111820]/28 focus:border-[#a77d45] focus:bg-[#fbf8f2] focus:shadow-[0_0_0_3px_rgba(181,139,81,.13)]";

function FieldLabel({
  children,
  htmlFor,
  optional = false,
}: {
  children: React.ReactNode;
  htmlFor: string;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 flex items-center justify-between text-[0.72rem] font-semibold tracking-[0.02em] text-[#273039]"
    >
      {children}
      {optional ? (
        <span className="text-[0.62rem] font-medium tracking-[0.05em] text-[#72787d] uppercase">
          Optional
        </span>
      ) : null}
    </label>
  );
}

function DirectContact({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div>
        <Phone aria-hidden="true" className="h-5 w-5 text-[#a77d45]" strokeWidth={1.7} />
        <p className="mt-4 text-[0.64rem] font-semibold tracking-[0.12em] text-[#7a603d] uppercase">
          Project enquiries
        </p>
        <a
          href="tel:+918008667766"
          className="mt-2 inline-block text-[1rem] font-semibold transition-colors hover:text-[#9a7645]"
        >
          +91 80086 67766
        </a>
      </div>

      <div>
        <Mail aria-hidden="true" className="h-5 w-5 text-[#a77d45]" strokeWidth={1.7} />
        <p className="mt-4 text-[0.64rem] font-semibold tracking-[0.12em] text-[#7a603d] uppercase">
          Email
        </p>
        <a
          href="mailto:info@asrgroupindia.in"
          className="mt-2 inline-block text-[1rem] font-semibold transition-colors hover:text-[#9a7645]"
        >
          info@asrgroupindia.in
        </a>
      </div>

      <div>
        <MapPin aria-hidden="true" className="h-5 w-5 text-[#a77d45]" strokeWidth={1.7} />
        <p className="mt-4 text-[0.64rem] font-semibold tracking-[0.12em] text-[#7a603d] uppercase">
          ASR Group
        </p>
        <address className="mt-2 text-sm leading-6 text-[#505961] not-italic">
          4th Floor, Sri Arcade Bldg, Plot No. 34
          <br />
          Jayabheri Enclave, Gachibowli
          <br />
          Hyderabad, Telangana 500032
        </address>
        <p className="mt-3 text-sm leading-6 text-[#6b7278]">
          Projects across Hyderabad, Bangalore and Vijayawada
        </p>
      </div>

    </div>
  );
}

export default function ContactPage({
  initialTeam,
}: {
  initialTeam?: "interiors" | "construction";
}) {
  const reduceMotion = useReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const [submittedName, setSubmittedName] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [whatsappOpened, setWhatsappOpened] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "opening" | "error"
  >("idle");
  const [formError, setFormError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formStatus === "opening") return;

    const formData = new FormData(event.currentTarget);
    const phoneNumber = String(formData.get("phone") || "");
    const phoneDigits = phoneNumber.replace(/\D/g, "");

    if (phoneDigits.length < 8) {
      setFormError("Enter a valid phone or WhatsApp number so the ASR Group can respond.");
      setFormStatus("error");
      requestAnimationFrame(() => phoneRef.current?.focus());
      return;
    }

    const name = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const teamValue = String(formData.get("team") || "");
    const team =
      projectTeams.find((projectTeam) => projectTeam.value === teamValue)
        ?.label ?? teamValue;
    const location = String(formData.get("location") || "").trim();
    const projectBrief = String(formData.get("projectBrief") || "").trim();
    const message = [
      "Hello ASR Group, I would like to discuss a project.",
      "",
      `Name: ${name}`,
      `Phone: ${phoneNumber}`,
      `Email: ${email || "Not provided"}`,
      `Interested in: ${team}`,
      `Project location: ${location}`,
      "",
      "Project details:",
      projectBrief,
      "",
      "Submitted through the ASR Group website.",
    ].join("\n");
    const nextWhatsappUrl = `https://wa.me/${ASR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setFormError("");
    setFormStatus("opening");
    setWhatsappUrl(nextWhatsappUrl);
    setSubmittedName(name || "there");
    setWhatsappOpened(true);
    window.location.assign(nextWhatsappUrl);
  }

  function resetForm() {
    setSubmittedName("");
    setWhatsappUrl("");
    setWhatsappOpened(false);
    setFormError("");
    setFormStatus("idle");
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLInputElement>("input")?.focus());
  }

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <InternalHeader activeLabel="Contact Us" />

      <section
        className="px-5 pb-20 pt-36 sm:px-9 sm:pb-24 sm:pt-44 lg:px-[4.8rem] lg:pb-32 lg:pt-48"
        aria-labelledby="contact-title"
      >
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[minmax(20rem,.78fr)_minmax(34rem,1.22fr)] lg:items-start lg:gap-[clamp(4rem,8vw,9rem)]">
          <motion.div
            className="lg:sticky lg:top-36"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.8, ease }}
          >
            <h1
              id="contact-title"
              className="font-display display-heading-long max-w-[10ch] text-[clamp(4rem,6vw,7rem)] leading-[0.91] tracking-[-0.047em]"
            >
              Tell us what you&apos;re planning.
            </h1>
            <p className="type-lead mt-7 max-w-[34rem] text-[#465058]">
              You do not need to have every detail resolved. Share what you know today, and our
              team will help identify the most useful next step.
            </p>

            <DirectContact className="mt-12 hidden gap-8 border-t border-[#111820]/14 pt-8 lg:grid lg:grid-cols-1 xl:grid-cols-2" />
          </motion.div>

          <motion.div
            id="enquiry-form"
            className="scroll-mt-8 rounded-[20px] border border-[#111820]/12 bg-[#e9e3d9] p-5 shadow-[0_24px_70px_rgba(17,24,32,.09)] sm:p-8 lg:p-10"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.85, delay: 0.1, ease }}
          >
            <AnimatePresence mode="wait">
              {submittedName ? (
                <motion.div
                  key="success"
                  className="flex min-h-[43rem] flex-col justify-between"
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.45, ease }}
                  aria-live="polite"
                >
                  <div>
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#b58b51] text-[#111820]">
                      <Check aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h2 className="font-display mt-9 max-w-[12ch] text-[clamp(3rem,4.5vw,5.3rem)] leading-[0.94] tracking-[-0.04em]">
                      Your WhatsApp message is ready, {submittedName}.
                    </h2>
                    <p className="mt-6 max-w-[34rem] text-[0.98rem] leading-7 text-[#4d565d]">
                      {whatsappOpened
                        ? "WhatsApp has opened with your project details prepared. Review the message and tap Send when you are ready."
                        : "Your WhatsApp message is prepared. Use the button below to open it and review your details."}
                    </p>
                    <p className="mt-5 max-w-[34rem] text-[0.98rem] leading-7 text-[#4d565d]">
                      ASR receives your information only after you press Send in WhatsApp.
                    </p>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-primary inline-flex min-h-12 items-center gap-8 rounded-[10px] px-6 text-[0.76rem] font-semibold"
                    >
                      Open WhatsApp again
                      <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex min-h-12 items-center rounded-[10px] border border-[#111820]/22 px-6 text-[0.76rem] font-semibold transition-colors hover:border-[#111820]/45 hover:bg-[#f2eee6]"
                    >
                      Edit details
                    </button>
                    <Link
                      href="/"
                      className="inline-flex min-h-12 items-center rounded-[10px] border border-[#111820]/22 px-6 text-[0.76rem] font-semibold transition-colors hover:border-[#111820]/45 hover:bg-[#f2eee6]"
                    >
                      Return home
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.4 }}
                >
                  <div className="mb-9">
                    <h2 className="font-display text-[clamp(2.4rem,3.6vw,4rem)] leading-none tracking-[-0.035em]">
                      Start the conversation.
                    </h2>
                    <p className="mt-4 max-w-[37rem] text-sm leading-6 text-[#596168]">
                      Share a few project details to help us understand where to begin.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="fullName">Full name</FieldLabel>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        required
                        className={inputClassName}
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="phone">Phone or WhatsApp</FieldLabel>
                      <input
                        ref={phoneRef}
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+91"
                        required
                        aria-invalid={formStatus === "error"}
                        aria-describedby={formStatus === "error" ? "form-error" : undefined}
                        onChange={() => {
                          if (formStatus === "error") {
                            setFormError("");
                            setFormStatus("idle");
                          }
                        }}
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <fieldset className="mt-7">
                    <legend className="mb-3 text-[0.72rem] font-semibold tracking-[0.02em] text-[#273039]">
                      What can we help you with?
                    </legend>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {projectTeams.map((team) => (
                        <label key={team.value} className="cursor-pointer">
                          <input
                            type="radio"
                            name="team"
                            value={team.value}
                            defaultChecked={team.value === initialTeam}
                            required
                            className="peer sr-only"
                          />
                          <span className="flex min-h-[6.5rem] flex-col rounded-[11px] border border-[#111820]/15 bg-[#f7f3ec] p-4 transition-[border-color,background-color,box-shadow] peer-checked:border-[#a77d45] peer-checked:bg-[#f2eadf] peer-checked:shadow-[inset_0_0_0_1px_#a77d45] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-[#b58b51] hover:border-[#111820]/30">
                            <span className="text-[0.82rem] font-semibold">{team.label}</span>
                            <span className="type-caption mt-2 text-[#697076]">
                              {team.helper}
                            </span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-7 grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="location">Project location</FieldLabel>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        autoComplete="address-level2"
                        placeholder="City or area"
                        required
                        className={inputClassName}
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="email" optional>
                        Email address
                      </FieldLabel>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <FieldLabel htmlFor="projectBrief">Tell us briefly about your project</FieldLabel>
                    <textarea
                      id="projectBrief"
                      name="projectBrief"
                      rows={5}
                      required
                      placeholder="Type of space, approximate size, current stage, or anything else you already know."
                      className={`${inputClassName} resize-y py-4 leading-6`}
                    />
                  </div>

                  <p className="mt-5 max-w-[40rem] text-[0.66rem] leading-5 text-[#687076]">
                    Your information remains in this form until you continue to WhatsApp.
                  </p>

                  <AnimatePresence>
                    {formStatus === "error" ? (
                      <motion.p
                        id="form-error"
                        role="alert"
                        className="mt-5 rounded-[10px] border border-[#9f4b3f]/28 bg-[#f7eae6] px-4 py-3 text-sm leading-6 text-[#75372f]"
                        initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                      >
                        {formError}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>

                  <div className="mt-7">
                    <button
                      type="submit"
                      disabled={formStatus === "opening"}
                      aria-busy={formStatus === "opening"}
                      className="cta-primary group inline-flex min-h-14 w-full items-center justify-between rounded-[10px] px-6 text-[0.78rem] font-semibold disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:min-w-[17rem]"
                    >
                      {formStatus === "opening"
                        ? "Opening WhatsApp…"
                        : "Continue to WhatsApp"}
                      <ArrowRight
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-300 ${
                          formStatus === "opening"
                            ? "animate-pulse"
                            : "group-hover:translate-x-1"
                        }`}
                        strokeWidth={1.8}
                      />
                    </button>
                    <p className="mt-3 max-w-[34rem] text-[0.68rem] leading-5 text-[#687076]">
                      We&apos;ll open WhatsApp with these details prepared. Review the message and
                      tap Send to contact ASR.
                    </p>
                  </div>

                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <DirectContact className="grid gap-8 border-t border-[#111820]/14 pt-9 sm:grid-cols-2 lg:hidden" />
        </div>
      </section>

      <InternalFooter />
    </article>
  );
}
