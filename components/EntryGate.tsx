"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// ── Content ───────────────────────────────────────────────────────────────────

const questions = [
  { text: "Do you love me?", rotate: -1.5 },
  { text: "Will you always go on a date with me, wherever, whenever, forever?", rotate: 1.2 },
];

const noResponses = [
  "Sigh… that's not what we're looking for.",
  "Hmm, try again, my love.",
  "Incorrect answer 😌",
];

const NO_LIMIT = 3;

// ── Tape strip ────────────────────────────────────────────────────────────────

function Tape({ color = "var(--color-tape-pink)", angle = -2 }: { color?: string; angle?: number }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "-10px",
        left: "50%",
        transform: `translateX(-50%) rotate(${angle}deg)`,
        width: "4rem",
        height: "18px",
        background: color,
        borderRadius: "2px",
        zIndex: 10,
        // subtle tape ridges
        backgroundImage:
          "repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.18) 4px, rgba(255,255,255,0.18) 5px)",
      }}
    />
  );
}

// ── Doodle marks ──────────────────────────────────────────────────────────────

function HeartDoodle({ style }: { style?: React.CSSProperties }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-handwritten)",
        fontSize: "1rem",
        color: "var(--color-blush)",
        opacity: 0.6,
        userSelect: "none",
        ...style,
      }}
    >
      ♡
    </span>
  );
}

function StarDoodle({ style }: { style?: React.CSSProperties }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-handwritten)",
        fontSize: "0.75rem",
        color: "var(--color-gold)",
        opacity: 0.5,
        userSelect: "none",
        ...style,
      }}
    >
      ✦
    </span>
  );
}

// ── Question card ─────────────────────────────────────────────────────────────

interface QuestionCardProps {
  question: string;
  rotate: number;
  index: number;
  answered: boolean;
  onYes: () => void;
  onNo: () => void;
  noCount: number;
  message: string | null;
}

function QuestionCard({
  question,
  rotate,
  index,
  answered,
  onYes,
  onNo,
  noCount,
  message,
}: QuestionCardProps) {
  const hideNo = noCount >= NO_LIMIT;
  const tapeColor = index === 0 ? "var(--color-tape-pink)" : "var(--color-tape-peach)";
  const tapeAngle = index === 0 ? -2 : 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.7, delay: index * 0.22, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ rotate: rotate * 0.3, transition: { duration: 0.3 } }}
      style={{ position: "relative", transformOrigin: "center center" }}
    >
      {/* Washi tape */}
      <Tape color={tapeColor} angle={tapeAngle} />

      {/* Card body */}
      <div
        style={{
          background: index === 0 ? "var(--color-card)" : "var(--color-card-alt)",
          border: "1px solid var(--color-line)",
          borderRadius: "4px",
          padding: "2.25rem 2rem 1.75rem",
          boxShadow: "0 2px 12px rgba(100,60,40,0.06), 0 1px 3px rgba(100,60,40,0.04)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Corner doodle */}
        <HeartDoodle
          style={{ position: "absolute", top: "0.75rem", right: "0.9rem", fontSize: "0.85rem" }}
        />

        {/* Handwritten exhibit tag */}
        <p
          style={{
            fontFamily: "var(--font-handwritten)",
            fontSize: "0.95rem",
            color: "var(--color-ink-faint)",
            marginBottom: "0.6rem",
            lineHeight: 1,
          }}
        >
          {index === 0 ? "question one —" : "question two —"}
        </p>

        {/* Question text */}
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "1.3rem",
            fontWeight: 400,
            color: "var(--color-ink)",
            lineHeight: 1.35,
            marginBottom: "1.75rem",
          }}
        >
          {question}
        </p>

        {/* Thin pencil-line divider */}
        <div
          style={{
            borderTop: "1px dashed var(--color-line-warm)",
            marginBottom: "1.5rem",
            opacity: 0.7,
          }}
        />

        {/* Answer area */}
        <AnimatePresence mode="wait">
          {answered ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-handwritten)",
                  fontSize: "1.1rem",
                  color: "var(--color-rose)",
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontFamily: "var(--font-handwritten)",
                  fontSize: "1rem",
                  color: "var(--color-rose)",
                }}
              >
                perfect answer ♡
              </span>
            </motion.div>
          ) : (
            <motion.div key="unanswered" exit={{ opacity: 0 }}>
              {/* Buttons */}
              <div style={{ display: "flex", gap: "0.65rem" }}>
                {/* Yes */}
                <motion.button
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onYes}
                  style={{
                    fontFamily: "var(--font-handwritten)",
                    fontSize: "1rem",
                    background: "var(--color-rose)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "100px",
                    padding: "0.45rem 1.5rem 0.5rem",
                    cursor: "pointer",
                    transition: "background 0.2s",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--color-rose-deep)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--color-rose)")
                  }
                >
                  yes ♡
                </motion.button>

                {/* No */}
                <AnimatePresence>
                  {!hideNo && (
                    <motion.button
                      key="no-btn"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.7, rotate: 5 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={onNo}
                      style={{
                        fontFamily: "var(--font-handwritten)",
                        fontSize: "1rem",
                        background: "transparent",
                        color: "var(--color-ink-faint)",
                        border: "1.5px solid var(--color-line-warm)",
                        borderRadius: "100px",
                        padding: "0.45rem 1.5rem 0.5rem",
                        cursor: "pointer",
                        transition: "color 0.2s, border-color 0.2s",
                        letterSpacing: "0.02em",
                      }}
                    >
                      no
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Refusal note — looks like a sticky note scribble */}
              <AnimatePresence mode="wait">
                {message && (
                  <motion.p
                    key={message}
                    initial={{ opacity: 0, x: -6, rotate: -1 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontFamily: "var(--font-handwritten)",
                      fontSize: "0.95rem",
                      color: "var(--color-rose)",
                      marginTop: "0.9rem",
                      display: "inline-block",
                    }}
                  >
                    {message}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Only-yes nudge */}
              <AnimatePresence>
                {hideNo && (
                  <motion.p
                    key="only-yes"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    style={{
                      fontFamily: "var(--font-handwritten)",
                      fontSize: "0.9rem",
                      color: "var(--color-gold)",
                      marginTop: "0.9rem",
                    }}
                  >
                    there's only one right answer here 💛
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────

export default function EntryGate() {
  const router = useRouter();

  const [answered, setAnswered] = useState([false, false]);
  const [noCounts, setNoCounts] = useState([0, 0]);
  const [messages, setMessages] = useState<(string | null)[]>([null, null]);
  const [exiting, setExiting] = useState(false);

  const handleYes = (i: number) => {
    const next = answered.map((v, idx) => (idx === i ? true : v));
    setAnswered(next);
    if (next.every(Boolean)) {
      setTimeout(() => {
        setExiting(true);
        setTimeout(() => router.push("/museum"), 800);
      }, 500);
    }
  };

  const handleNo = (i: number) => {
    const newCounts = noCounts.map((v, idx) =>
      idx === i ? Math.min(v + 1, NO_LIMIT) : v
    );
    setNoCounts(newCounts);
    const newMessages = messages.map((_, idx) =>
      idx === i ? noResponses[newCounts[idx] % noResponses.length] : messages[idx]
    );
    setMessages(newMessages);
  };

  const visibleCount = answered[0] ? 2 : 1;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            minHeight: "100svh",
            background: "var(--color-paper)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "5rem 1.5rem 6rem",
            position: "relative",
          }}
        >
          {/* ── Scattered background doodles ── */}
          <HeartDoodle style={{ position: "absolute", top: "8%",  left: "7%",  fontSize: "1.4rem", opacity: 0.25 }} />
          <StarDoodle  style={{ position: "absolute", top: "12%", right: "9%", fontSize: "1rem",   opacity: 0.3  }} />
          <HeartDoodle style={{ position: "absolute", bottom: "10%", right: "6%", fontSize: "1rem", opacity: 0.2 }} />
          <StarDoodle  style={{ position: "absolute", bottom: "14%", left: "8%", fontSize: "1.1rem", opacity: 0.25 }} />
          <HeartDoodle style={{ position: "absolute", top: "40%", left: "4%", fontSize: "0.9rem", opacity: 0.18 }} />

          {/* ── Header ── */}
          <motion.header
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            {/* Handwritten eyebrow */}
            <p
              style={{
                fontFamily: "var(--font-handwritten)",
                fontSize: "1.05rem",
                color: "var(--color-ink-faint)",
                marginBottom: "0.5rem",
                letterSpacing: "0.03em",
              }}
            >
              an intimate exhibition ~
            </p>

            {/* Main title */}
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(2.4rem, 6vw, 3.8rem)",
                fontWeight: 400,
                color: "var(--color-ink)",
                lineHeight: 1.05,
                marginTop: "0.25rem",
              }}
            >
              Welcome to Our Museum
            </h1>

            {/* Hand-drawn underline wiggle (SVG) */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.55, duration: 1, ease: "easeOut" }}
              style={{ transformOrigin: "left center", margin: "1.2rem auto 0", maxWidth: "260px" }}
            >
              <svg viewBox="0 0 220 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "12px" }}>
                <path
                  d="M2 8 C 30 2, 60 12, 90 6 C 120 0, 150 11, 180 5 C 200 1, 215 9, 218 7"
                  stroke="var(--color-blush)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{
                fontFamily: "var(--font-handwritten)",
                fontSize: "1rem",
                color: "var(--color-ink-muted)",
                marginTop: "1rem",
              }}
            >
              before you enter, a few questions…
            </motion.p>
          </motion.header>

          {/* ── Question cards ── */}
          <div
            style={{
              width: "100%",
              maxWidth: "24rem",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            {Array.from({ length: visibleCount }).map((_, i) => (
              <QuestionCard
                key={i}
                index={i}
                question={questions[i].text}
                rotate={questions[i].rotate}
                answered={answered[i]}
                onYes={() => handleYes(i)}
                onNo={() => handleNo(i)}
                noCount={noCounts[i]}
                message={messages[i]}
              />
            ))}
          </div>

          {/* ── Footer ── */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{
              fontFamily: "var(--font-handwritten)",
              fontSize: "0.9rem",
              color: "var(--color-ink-faint)",
              marginTop: "5rem",
              letterSpacing: "0.02em",
            }}
          >
            made with love, just for you ♡
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
