import type { Metadata } from "next";
import { galleryImages } from "@/data/images";
import { poems } from "@/data/poems";
import MasonryGallery from "@/components/Gallery";
import MusicWidget from "@/components/MusicWidget";
import TimelineWidget from "@/components/TimelineWidget";
import FlowerScatter from "@/components/FlowerScatter";

export const metadata: Metadata = {
  title: "The Collection · Welcome to Our Museum",
  description: "A curated collection of our most treasured memories.",
};

export default function MuseumPage() {
  return (
    <main
      style={{
        minHeight: "100svh",
        background: "var(--color-paper)",
        paddingBottom: "6rem",
      }}
    >
      {/* ── Page header ─────────────────────────────────────────────────── */}
      <header
        style={{
          textAlign: "center",
          padding: "5rem 1.5rem 3.5rem",
          borderBottom: "1px solid var(--color-line)",
          marginBottom: "2.5rem",
        }}
      >
        {/* Handwritten eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-handwritten)",
            fontSize: "1.2rem",
            color: "var(--color-rose-deep)",
            marginBottom: "0.5rem",
            opacity: 0.8,
          }}
        >
          the collection ~
        </p>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 400,
            color: "var(--color-ink)",
            lineHeight: 1.1,
            marginTop: "0.25rem",
          }}
        >
          Welcome to Our Museum
        </h1>

        {/* Wobbly underline */}
        <div style={{ margin: "1.2rem auto 0", maxWidth: "240px" }}>
          <svg viewBox="0 0 220 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "12px" }}>
            <path
              d="M2 8 C 30 2, 60 12, 90 6 C 120 0, 150 11, 180 5 C 200 1, 215 9, 218 7"
              stroke="var(--color-blush)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.78rem",
            color: "var(--color-ink-muted)",
            marginTop: "1rem",
            letterSpacing: "0.02em",
          }}
        >
          24 exhibits to celebrate 24 rounds around the sun
        </p>
      </header>

      {/* ── Gallery ─────────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <MasonryGallery images={galleryImages} poems={poems} />
      </div>

      {/* ── Kraft Paper Footer Note ─────────────────────────────────────── */}
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5rem 1.5rem 8rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <FlowerScatter />
        
        {/* Outer Translation Hover Layer */}
        <div
          className="group hover:-translate-y-3 transition-all duration-500"
          style={{ cursor: "pointer" }}
        >
          {/* Inner Rotation & Shadow Box */}
          <div
            className="group-hover:shadow-[4px_24px_48px_rgba(100,60,40,0.2),inset_0_0_40px_rgba(130,80,40,0.1)] transition-all duration-500"
            style={{
              position: "relative",
              maxWidth: "420px",
              background: "#D9B99B", /* soft authentic kraft paper brown */
              padding: "2.5rem 2.5rem",
              borderRadius: "2px 255px 3px 255px / 255px 5px 225px 3px",
              boxShadow: "4px 12px 32px rgba(100,60,40,0.15), inset 0 0 40px rgba(130,80,40,0.1)",
              transform: "rotate(-1.5deg)",
            }}
          >
            {/* Top authentic tape slice */}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "50%",
                transform: "translateX(-50%) rotate(2.5deg)",
                width: "110px",
                height: "28px",
                background: "rgba(255, 255, 255, 0.45)",
                backdropFilter: "blur(2px)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: "0 2px 5px rgba(0,0,0,0.03)",
              }}
            />

            <p
              style={{
                fontFamily: "var(--font-handwritten)",
                fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
                color: "#3a2a22", // Dark espresso ink
                lineHeight: 1.4,
                textAlign: "center",
                margin: 0,
              }}
            >
              That&apos;s all the museum holds for now dearest, unlock another year for another slot. I hope to see you as a recurring loyal customer. You&apos;ll forever be my muse, my one and only, Ishi.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Widgets */}
      <TimelineWidget />
      <MusicWidget />
    </main>
  );
}
