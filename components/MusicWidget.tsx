"use client";

/**
 * MusicWidget
 * -----------
 * A floating ambient music controller.
 * It uses a compact Spotify iframe wrapped in a draggable glassmorphic container.
 * Position is persisted to localStorage.
 */

import { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";

export default function MusicWidget() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Load saved position on mount
  useEffect(() => {
    const saved = localStorage.getItem("museum_musicWidgetPos");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed.x === "number" && typeof parsed.y === "number") {
          setPosition(parsed);
        }
      } catch (e) {
        console.error("Failed to parse saved widget position", e);
      }
    }
    const minState = localStorage.getItem("museum_musicWidgetMin");
    if (minState === "true") setIsMinimized(true);
    
    setIsMounted(true);
  }, []);

  const handleDragEnd = (event: any, info: PanInfo) => {
    setPosition((prev) => {
      const newPos = { x: prev.x + info.offset.x, y: prev.y + info.offset.y };
      localStorage.setItem("museum_musicWidgetPos", JSON.stringify(newPos));
      return newPos;
    });
  };

  const toggleMinimize = () => {
    setIsMinimized((prev) => {
      const next = !prev;
      localStorage.setItem("museum_musicWidgetMin", String(next));
      return next;
    });
  };

  // Prevent rendering SSR mismatch by waiting for mount
  if (!isMounted) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragEnd={handleDragEnd}
      // Start near the bottom right of the screen conceptually, 
      // but offset by the dragging coordinates.
      initial={{ x: position.x, y: position.y, opacity: 0, scale: 0.9 }}
      animate={{ x: position.x, y: position.y, opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        position: "fixed",
        bottom: "1.25rem",
        right: "1.25rem",
        zIndex: 50,
        width: "clamp(260px, calc(100vw - 2.5rem), 320px)",
        display: "flex",
        flexDirection: "column",
        background: "rgba(255, 250, 246, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid var(--color-line-warm)",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(100, 60, 40, 0.12)",
        overflow: "hidden",
      }}
    >
      {/* ── Drag Handle & Top Bar ── */}
      <motion.div
        className="drag-handle"
        style={{
          width: "100%",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "grab",
          background: "rgba(255, 255, 255, 0.3)",
          borderBottom: isMinimized ? "none" : "1px solid var(--color-line)",
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", pointerEvents: "none" }}>
          {/* Subtle drag dots icon */}
          <div style={{ display: "flex", gap: "2px" }}>
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-ink-faint)" }} />
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-ink-faint)" }} />
            <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--color-ink-faint)" }} />
          </div>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--color-ink-muted)",
            }}
          >
            Playlist
          </span>
        </div>

        <button
          onClick={toggleMinimize}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--color-ink-faint)",
            cursor: "pointer",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
          aria-label={isMinimized ? "Expand" : "Minimize"}
        >
          {isMinimized ? "+" : "−"}
        </button>
      </motion.div>

      {/* ── Spotify Embed ── */}
      <motion.div
        initial={false}
        animate={{
          height: isMinimized ? 0 : 352,
          opacity: isMinimized ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          overflow: "hidden",
          pointerEvents: isMinimized ? "none" : "auto", // stop clicks when hidden
        }}
      >
        {/* Expanded frame to 352px for the normal-sized play button and standard Spotify UI. */}
        {/* Note: &autoplay=1 is added, though modern browsers often require the user to explicitly click it if client-side navigation doesn't perfectly transfer the interaction trust. */}
        <iframe
          src="https://open.spotify.com/embed/playlist/2Fe6XpVciOpNdPFxgGTbCS?utm_source=generator&theme=0&autoplay=1"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ display: "block", borderRadius: "0 0 16px 16px" }}
        />
      </motion.div>
    </motion.div>
  );
}
