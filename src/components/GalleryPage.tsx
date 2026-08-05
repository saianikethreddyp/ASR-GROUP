"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import ClosingCta from "@/components/ClosingCta";
import InternalFooter from "@/components/InternalFooter";
import InternalHeader from "@/components/InternalHeader";
import Reveal from "@/components/Reveal";
import {
  galleryAlbumCategories,
  galleryAlbums,
  type GalleryAlbum,
} from "@/data/galleryAlbums";

type AlbumFilter = "All" | GalleryAlbum["category"];

function AlbumCover({
  album,
  eager = false,
}: {
  album: GalleryAlbum;
  eager?: boolean;
}) {
  const previews = album.images.slice(0, 3);

  if (previews.length === 1) {
    const image = previews[0];
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-[#d8d0c4]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          loading={eager ? "eager" : undefined}
          sizes="(max-width: 1024px) 100vw, 64vw"
          style={{ objectPosition: image.objectPosition }}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.018]"
        />
      </div>
    );
  }

  return (
    <div className="grid aspect-[16/10] grid-cols-[minmax(0,1.65fr)_minmax(7rem,.72fr)] grid-rows-2 gap-2 overflow-hidden rounded-[18px] bg-[#d8d0c4]">
      {previews.map((image, index) => (
        <div
          key={image.id}
          className={`relative overflow-hidden ${
            index === 0 ? "row-span-2" : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading={eager && index === 0 ? "eager" : undefined}
            sizes={
              index === 0
                ? "(max-width: 1024px) 70vw, 46vw"
                : "(max-width: 1024px) 30vw, 18vw"
            }
            style={{ objectPosition: image.objectPosition }}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.018]"
          />
        </div>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<AlbumFilter>("All");
  const reduceMotion = useReducedMotion();
  const filters: AlbumFilter[] = ["All", ...galleryAlbumCategories];

  const visibleAlbums = useMemo(
    () =>
      galleryAlbums.filter(
        (album) =>
          activeFilter === "All" || album.category === activeFilter,
      ),
    [activeFilter],
  );

  const visibleImages = visibleAlbums.reduce(
    (total, album) => total + album.images.length,
    0,
  );

  return (
    <article className="min-h-screen bg-[#f2eee6] text-[#111820]">
      <section
        className="relative px-5 pb-10 pt-36 sm:px-9 sm:pb-12 sm:pt-44 lg:px-[4.8rem] lg:pb-12 lg:pt-44"
        aria-labelledby="gallery-title"
      >
        <InternalHeader activeLabel="Gallery" />
        <div className="mx-auto grid max-w-[1540px] gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(20rem,.72fr)] lg:items-end lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.85,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-5 text-[0.67rem] font-semibold tracking-[0.18em] text-[#9a7645] uppercase">
              Gallery
            </p>
            <h1
              id="gallery-title"
              className="font-display max-w-[10ch] text-[clamp(3.8rem,6.8vw,7.8rem)] tracking-[-0.055em]"
            >
              The work, in full view.
            </h1>
          </motion.div>
          <motion.div
            className="lg:pb-2"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.78,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="max-w-[35rem] text-[clamp(1rem,1.3vw,1.16rem)] leading-[1.72] text-[#465058]">
              Open a project album to explore its complete available set of
              spaces, materials and details together.
            </p>
            <Link
              href="/projects"
              className="mt-5 inline-flex items-center gap-5 text-xs font-semibold text-[#9a7645]"
            >
              Browse project records <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-9 sm:pb-28 lg:px-[4.8rem] lg:pb-36">
        <div className="mx-auto max-w-[1540px]">
          <Reveal className="flex flex-col gap-5 border-y border-[#111820]/16 py-5 sm:flex-row sm:items-center sm:justify-between">
            {filters.length > 2 ? (
              <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
                {filters.map((filter) => {
                  const active = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      aria-pressed={active}
                      className={`min-h-11 shrink-0 rounded-full border px-5 text-xs font-semibold transition-colors ${
                        active
                          ? "border-[#111820] bg-[#111820] text-[#f2eee6]"
                          : "border-[#111820]/18 text-[#465058] hover:border-[#111820]/42 hover:text-[#111820]"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#9a7645]" />
                <p className="text-xs font-semibold text-[#30383f]">
                  Project albums
                </p>
              </div>
            )}
            <p aria-live="polite" className="text-xs text-[#626a70]">
              {activeFilter === "Real Estate Layouts" ? (
                "External portfolio"
              ) : (
                <>
                  {visibleAlbums.length}{" "}
                  {visibleAlbums.length === 1 ? "album" : "albums"} ·{" "}
                  {visibleImages} {visibleImages === 1 ? "image" : "images"}
                </>
              )}
            </p>
          </Reveal>

          <div className="mt-8 flex items-baseline justify-between gap-6">
            <h2 className="font-display text-[clamp(2.6rem,4vw,4.8rem)] tracking-[-0.04em]">
              {activeFilter === "Real Estate Layouts"
                ? "Explore real estate."
                : "Browse by project."}
            </h2>
          </div>

          <AnimatePresence mode="popLayout">
            {visibleAlbums.length ? (
              <motion.div layout className="mt-8 grid gap-16">
                {visibleAlbums.map((album, index) => (
                  <motion.article
                    layout
                    key={album.slug}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.45,
                      delay: index * 0.04,
                    }}
                  >
                    <Link
                      href={`/gallery/${album.slug}`}
                      className="group grid gap-7 lg:grid-cols-[minmax(0,1.24fr)_minmax(22rem,.76fr)] lg:items-end lg:gap-12"
                    >
                      <AlbumCover album={album} eager={index === 0} />
                      <div className="border-t border-[#111820]/18 pt-6">
                        <p className="text-[0.6rem] font-semibold tracking-[0.14em] text-[#9a7645] uppercase">
                          {album.category} · {album.images.length}{" "}
                          {album.images.length === 1 ? "image" : "images"}
                        </p>
                        <h3 className="font-display mt-4 text-[clamp(2.8rem,4.6vw,5.5rem)] tracking-[-0.045em]">
                          {album.title}
                        </h3>
                        <p className="mt-4 text-xs font-semibold text-[#626a70]">
                          {album.location}
                        </p>
                        <p className="mt-6 max-w-[38rem] text-sm leading-7 text-[#505961]">
                          {album.summary}
                        </p>
                        <span className="mt-8 inline-flex items-center gap-8 text-xs font-semibold text-[#9a7645]">
                          Open complete album{" "}
                          <span
                            aria-hidden="true"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            →
                          </span>
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className="mt-8 grid min-h-[22rem] place-items-center rounded-[18px] border border-[#111820]/16 px-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div>
                  <h3 className="font-display text-[clamp(2.2rem,4vw,4.4rem)] tracking-[-0.04em]">
                    {activeFilter === "Real Estate Layouts"
                      ? "Explore available real estate layouts."
                      : "No albums match this category."}
                  </h3>
                  {activeFilter === "Real Estate Layouts" ? (
                    <div className="mt-6">
                      <p className="mx-auto max-w-[34rem] text-sm leading-7 text-[#505961]">
                        Land and development opportunities are presented through ASR Real
                        Estate.
                      </p>
                      <Link
                        href="https://avaniprojectsindia.com/gallery/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-7 text-xs font-semibold text-[#9a7645]"
                        aria-label="Explore ASR Real Estate layouts — opens external website"
                      >
                        Explore real estate layouts
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveFilter("All")}
                      className="mt-6 text-xs font-semibold text-[#9a7645] underline underline-offset-4"
                    >
                      View all albums
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <ClosingCta
        eyebrow="Start a project"
        title="Seen a direction that connects?"
        body="Share the project or image with us and tell us what matters for your own space."
      />
      <InternalFooter />
    </article>
  );
}
