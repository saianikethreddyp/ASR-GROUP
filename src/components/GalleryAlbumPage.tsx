"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import ClosingCta from "@/components/ClosingCta";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";
import Reveal from "@/components/Reveal";
import type {
  GalleryAlbum,
  GalleryImage,
  GalleryImageGroup,
} from "@/data/galleryAlbums";

type GroupedImages = {
  group: GalleryImageGroup;
  images: Array<{
    image: GalleryImage;
    albumIndex: number;
  }>;
};

export default function GalleryAlbumPage({
  album,
}: {
  album: GalleryAlbum;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const reduceMotion = useReducedMotion();
  const viewerOpen = activeIndex !== null;
  const activeImage =
    activeIndex === null ? null : album.images[activeIndex];

  const groupedImages = useMemo<GroupedImages[]>(() => {
    const groups = new Map<GalleryImageGroup, GroupedImages["images"]>();

    album.images.forEach((image, albumIndex) => {
      const group = groups.get(image.group) ?? [];
      group.push({ image, albumIndex });
      groups.set(image.group, group);
    });

    return Array.from(groups, ([group, images]) => ({ group, images }));
  }, [album.images]);

  useEffect(() => {
    if (!viewerOpen) return;

    const previousOverflow = document.body.style.overflow;
    const opener = openerRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }

      if (event.key === "ArrowRight" && album.images.length > 1) {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % album.images.length,
        );
        return;
      }

      if (event.key === "ArrowLeft" && album.images.length > 1) {
        setActiveIndex((current) =>
          current === null
            ? album.images.length - 1
            : (current - 1 + album.images.length) % album.images.length,
        );
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      opener?.focus();
    };
  }, [album.images.length, viewerOpen]);

  function openImage(index: number, opener: HTMLButtonElement) {
    openerRef.current = opener;
    setActiveIndex(index);
  }

  function showPrevious() {
    setActiveIndex((current) =>
      current === null
        ? album.images.length - 1
        : (current - 1 + album.images.length) % album.images.length,
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % album.images.length,
    );
  }

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <section className="relative px-5 pb-10 pt-36 sm:px-9 sm:pb-12 sm:pt-44 lg:px-[4.8rem] lg:pb-12 lg:pt-44">
        <InternalHeader activeLabel="Gallery" />
        <div className="mx-auto max-w-[1540px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-5">
              <Link
                href="/gallery"
                className="text-xs font-semibold text-[#596168] transition-colors hover:text-[#9a7645]"
              >
                ← All albums
              </Link>
              <Link
                href={`/projects/${album.projectSlug}`}
                className="text-xs font-semibold text-[#596168] transition-colors hover:text-[#9a7645]"
              >
                View project record
              </Link>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(22rem,.62fr)] lg:items-end lg:gap-16">
              <div>
                <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
                  Project album
                </p>
                <h1 className="font-display max-w-[14ch] text-[clamp(3.8rem,7vw,8rem)] tracking-[-0.055em]">
                  {album.title}
                </h1>
              </div>
              <div className="lg:pb-2">
                <p className="text-sm font-semibold leading-6 text-[#596168]">
                  {album.category} · {album.location}
                </p>
                <p className="mt-5 max-w-[34rem] text-sm leading-7 text-[#505961]">
                  {album.summary}
                </p>
                <p className="mt-5 border-t border-[#111820]/16 pt-4 text-xs font-semibold leading-5 text-[#777d82]">
                  {album.images.length}{" "}
                  {album.images.length === 1 ? "image" : "images"} ·{" "}
                  {album.scope}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-9 sm:pb-28 lg:px-[4.8rem] lg:pb-36">
        <div className="mx-auto max-w-[1540px]">
          {groupedImages.map(({ group, images }, groupIndex) => (
            <section
              key={group}
              className={groupIndex > 0 ? "mt-24 sm:mt-28" : ""}
              aria-labelledby={`group-${groupIndex}`}
            >
              <Reveal className="flex items-end justify-between gap-8 border-t border-[#111820]/18 pt-6">
                <div>
                  <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-[#9a7645] uppercase">
                    Album section
                  </p>
                  <h2
                    id={`group-${groupIndex}`}
                    className="font-display mt-3 text-[clamp(2.8rem,4.4vw,5rem)] tracking-[-0.04em]"
                  >
                    {group}
                  </h2>
                </div>
                <p className="text-xs text-[#626a70]">
                  {images.length} {images.length === 1 ? "image" : "images"}
                </p>
              </Reveal>

              <div className="mt-8 grid gap-x-5 gap-y-14 md:grid-cols-12">
                {images.map(({ image, albumIndex }, imageIndex) => {
                  const wide =
                    images.length === 1 ||
                    imageIndex % 3 === 0 ||
                    image.width / image.height > 1.55;

                  return (
                    <Reveal
                      key={image.id}
                      className={wide ? "md:col-span-12" : "md:col-span-6"}
                      delay={imageIndex * 0.05}
                    >
                      <figure>
                        <button
                          type="button"
                          onClick={(event) =>
                            openImage(albumIndex, event.currentTarget)
                          }
                          className="group relative block w-full overflow-hidden rounded-[18px] bg-[#d8d0c4] text-left"
                          style={{ aspectRatio: `${image.width} / ${image.height}` }}
                          aria-label={`Open image ${albumIndex + 1} of ${album.images.length}: ${image.caption}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            priority={albumIndex === 0}
                            sizes={wide ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                            style={{ objectPosition: image.objectPosition }}
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.012]"
                          />
                        </button>
                        <figcaption className="mt-5 flex flex-col justify-between gap-3 border-t border-[#111820]/16 pt-4 text-sm sm:flex-row sm:items-start">
                          <p className="max-w-[48rem] leading-6 text-[#505961]">
                            {image.caption}
                          </p>
                          <button
                            type="button"
                            onClick={(event) =>
                              openImage(albumIndex, event.currentTarget)
                            }
                            className="shrink-0 text-xs font-semibold text-[#9a7645]"
                            aria-label={`Open image ${albumIndex + 1} full screen`}
                          >
                            Open full screen ↗
                          </button>
                        </figcaption>
                      </figure>
                    </Reveal>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-[#081523] px-5 py-20 text-[#f2eee6] sm:px-9 sm:py-24 lg:px-[4.8rem] lg:py-28">
        <Reveal className="mx-auto grid max-w-[1540px] gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,.55fr)] lg:items-end">
          <div>
            <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#c6a36b] uppercase">
              Project context
            </p>
            <h2 className="font-display max-w-[11ch] text-[clamp(3rem,5vw,5.8rem)] tracking-[-0.045em]">
              See the work behind the images.
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-white/62">
              Open the project record for ASR&apos;s responsibility, sector,
              status and delivery context.
            </p>
            <Link
              href={`/projects/${album.projectSlug}`}
              className="cta-primary mt-7 inline-flex min-h-14 items-center gap-10 rounded-[10px] px-7 text-[0.78rem] font-semibold"
            >
              View project record <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </section>

      <ClosingCta
        eyebrow="Start a project"
        title="Seen a useful reference?"
        body="Share this album with us and tell us what matters for your own space."
      />
      <InternalFooter />

      <AnimatePresence>
        {activeImage && activeIndex !== null ? (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${album.title} image viewer`}
            className="fixed inset-0 z-[100] flex flex-col bg-[#07111b] text-white"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.28 }}
          >
            <div className="flex min-h-20 items-center justify-between gap-5 border-b border-white/14 px-5 sm:px-8">
              <div>
                <p className="text-[0.58rem] font-semibold tracking-[0.15em] text-[#c6a36b] uppercase">
                  {album.title}
                </p>
                <p aria-live="polite" className="mt-1 text-xs text-white/55">
                  Image {activeIndex + 1} of {album.images.length} ·{" "}
                  {activeImage.group}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveIndex(null)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/24 text-xl transition-colors hover:border-white/60"
                aria-label="Close gallery"
              >
                ×
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="object-contain p-4 sm:p-8"
              />

              {album.images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/24 bg-[#07111b]/72 text-xl backdrop-blur-sm transition-colors hover:border-white/60 sm:left-8"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/24 bg-[#07111b]/72 text-xl backdrop-blur-sm transition-colors hover:border-white/60 sm:right-8"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </>
              ) : null}
            </div>

            <div className="border-t border-white/14 px-5 py-4 sm:px-8">
              {album.images.length > 1 ? (
                <div
                  className="mb-4 flex gap-2 overflow-x-auto pb-1"
                  aria-label="Album thumbnails"
                >
                  {album.images.map((image, index) => (
                    <button
                      key={image.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View image ${index + 1}: ${image.caption}`}
                      aria-pressed={index === activeIndex}
                      className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-[8px] border-2 transition-colors ${
                        index === activeIndex
                          ? "border-[#c6a36b]"
                          : "border-transparent opacity-55 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              ) : null}

              <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
                <p className="max-w-[42rem] text-[0.68rem] leading-5 text-white/58">
                  {activeImage.caption}
                </p>
                <Link
                  href={`/projects/${album.projectSlug}`}
                  className="shrink-0 text-xs font-semibold text-[#c6a36b]"
                >
                  View project record →
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
