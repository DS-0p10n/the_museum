"use client";

/**
 * MemoryCard
 * ----------
 * A single exhibit card within the gallery.
 * It shows an image on the front, and when clicked, 
 * softly flips to reveal a romantic poem on the back.
 */

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryImage } from "@/data/images";
import type { Poem } from "@/data/poems";

interface MemoryCardProps {
  image: GalleryImage;
  poem: Poem;
  index: number;
}

export default function MemoryCard({ image, poem, index }: MemoryCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  // Stagger entrance in batches so 100+ images don't all animate at once
  const batchDelay = Math.min((index % 12) * 0.08, 0.9);

  return (
    <div
      className="masonry-item"
      style={{
        perspective: "1200px", // Enables 3D space for the flip
        cursor: "pointer",
      }}
      onClick={() => setIsRevealed((prev) => !prev)}
    >
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        transition={{
          duration: 0.6,
          delay: batchDelay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        whileHover={
          !isRevealed
            ? {
                y: -4,
                boxShadow:
                  "0 12px 32px rgba(100,60,40,0.1), 0 4px 10px rgba(100,60,40,0.06)",
                transition: { duration: 0.3, ease: "easeOut" },
              }
            : {}
        }
        animate={{
          rotateY: isRevealed ? 180 : 0,
        }}
        style={{
          width: "100%",
          paddingBottom: `${image.aspect * 100}%`,
          position: "relative",
          cursor: "pointer",
          WebkitTapHighlightColor: "transparent",
          transformStyle: "preserve-3d",
        }}
      >
        {/* ── Front (Image) ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden", // Safari
            borderRadius: "12px",
            overflow: "hidden",
            background: "var(--color-card-alt)",
            boxShadow:
              "0 12px 32px rgba(74, 59, 57, 0.08), 0 4px 10px rgba(74, 59, 57, 0.04)",
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={index < 8}
            quality={85}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* ── Back (Poem) ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "var(--color-card)",
            borderRadius: "12px",
            padding: "clamp(1rem, 3vw, 2.5rem)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            boxShadow:
              "0 12px 32px rgba(74, 59, 57, 0.08), 0 4px 10px rgba(74, 59, 57, 0.04)",
            border: "1px solid var(--color-line)",
          }}
        >
          {/* Subtle tape on the back for scrapbook feel */}
          <div
            style={{
              position: "absolute",
              top: "-8px",
              left: "50%",
              transform: "translateX(-50%) rotate(-2deg)",
              background: "var(--color-tape-peach)",
              width: "40px",
              height: "15px",
              opacity: 0.8,
            }}
          />

          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(0.9rem, 3.5vw, 1.4rem)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--color-ink)",
              lineHeight: 1.5,
              whiteSpace: "pre-line",
            }}
          >
            {poem.text}
          </div>
        </div>
      </motion.article>
    </div>
  );
}
