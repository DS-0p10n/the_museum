"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { greetingsByTimezone } from "@/data/greetings";
import { getNewlyUnlockedGreetings } from "@/lib/timezoneUtils";

interface UnlockedLog {
  timezone: string;
  timestamp: number;
}

export default function TimelineWidget() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<UnlockedLog[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const logsRef = useRef<UnlockedLog[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialization & Check Loop
  useEffect(() => {
    // 1. Load persisted data
    const saved = localStorage.getItem("museum_timeline_logs");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        logsRef.current = parsed;
        setLogs(parsed);
      } catch (e) {
        console.error("Timeline parse error", e);
      }
    }
    setMounted(true);

    // 2. Unlocks checker
    const checkUnlocks = () => {
      const unlockedIds = logsRef.current.map((l) => l.timezone);
      const newlyUnlocked = getNewlyUnlockedGreetings(unlockedIds);

      if (newlyUnlocked.length > 0) {
        const timestamp = Date.now();
        const newLogs = newlyUnlocked.map((tz) => ({
          timezone: tz.timezone,
          timestamp,
        }));

        const updated = [...logsRef.current, ...newLogs];
        logsRef.current = updated;
        setLogs(updated);
        localStorage.setItem("museum_timeline_logs", JSON.stringify(updated));

        // Increment unread badge if panel is closed
        setIsOpen((currentlyOpen) => {
          if (!currentlyOpen) {
            setUnreadCount((prev) => prev + newLogs.length);
          }
          return currentlyOpen;
        });
      }
    };

    checkUnlocks(); // Immediate initial check
    const intervalId = setInterval(checkUnlocks, 10000); // Check every 10s
    return () => clearInterval(intervalId);
  }, []);

  // Clear unreads when opened & scroll to bottom
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, 50);
    }
  }, [isOpen, logs.length]);

  if (!mounted) return null;

  const handleToggle = () => setIsOpen(!isOpen);

  // Re-map logs to their full greeting data
  const renderableLogs = logs.map((log) => {
    const greetingObj = greetingsByTimezone.find((g) => g.timezone === log.timezone);
    return { log, greetingObj };
  });

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.25rem",
        left: "1.25rem",
        zIndex: 50,
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: "absolute",
              bottom: "4.5rem",
              left: 0,
              width: "clamp(300px, calc(100vw - 2.5rem), 360px)",
              height: "65vh",
              maxHeight: "500px",
              background: "rgba(253, 246, 238, 0.92)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid var(--color-line-warm)",
              borderRadius: "16px",
              boxShadow: "0 12px 40px rgba(100,60,40,0.12), 0 4px 12px rgba(100,60,40,0.06)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "1.25rem 1.5rem 1rem",
                borderBottom: "1px dashed var(--color-line)",
                background: "rgba(255, 255, 255, 0.4)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  color: "var(--color-ink)",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Global Timeline
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  color: "var(--color-ink-faint)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginTop: "0.25rem",
                }}
              >
                {logs.length} / {greetingsByTimezone.length} regions unlocked
              </p>
            </div>

            {/* Scrollable list */}
            <div
              ref={scrollRef}
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {renderableLogs.length === 0 ? (
                <div style={{ textAlign: "center", color: "var(--color-ink-muted)", marginTop: "2rem" }}>
                  <p style={{ fontFamily: "var(--font-handwritten)", fontSize: "1.1rem" }}>
                    Waiting for midnight...
                  </p>
                </div>
              ) : (
                renderableLogs.map(({ log, greetingObj }, i) => {
                  if (!greetingObj) return null;
                  const timeString = new Intl.DateTimeFormat("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                  }).format(new Date(log.timestamp));

                  return (
                    <motion.div
                      key={log.timezone}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      style={{
                        background: "var(--color-card)",
                        padding: "1.25rem",
                        borderRadius: "12px",
                        border: "1px solid var(--color-line)",
                        boxShadow: "0 2px 8px rgba(100,60,40,0.03)",
                      }}
                    >
                      {/* Region & Time header */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                          borderBottom: "1px dotted var(--color-line-warm)",
                          paddingBottom: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.7rem",
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                            color: "var(--color-ink-muted)",
                            textTransform: "uppercase",
                          }}
                        >
                          {greetingObj.region}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-handwritten)",
                            fontSize: "0.85rem",
                            color: "var(--color-ink-faint)",
                          }}
                        >
                          {timeString}
                        </span>
                      </div>

                      {/* Entries */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {greetingObj.entries.map((entry, idx) => (
                          <div key={idx} style={{ textAlign: "center" }}>
                            <p
                              style={{
                                fontFamily: "var(--font-serif)",
                                fontStyle: "italic",
                                fontSize: "1.2rem",
                                color: "var(--color-ink)",
                                lineHeight: 1.3,
                              }}
                            >
                              {entry.text}
                            </p>
                            {entry.transliteration && (
                              <p
                                style={{
                                  fontFamily: "var(--font-sans)",
                                  fontSize: "0.75rem",
                                  color: "var(--color-ink-muted)",
                                  marginTop: "0.35rem",
                                }}
                              >
                                {entry.transliteration}
                              </p>
                            )}
                            <p
                              style={{
                                fontFamily: "var(--font-handwritten)",
                                fontSize: "0.95rem",
                                color: "var(--color-rose-deep)",
                                marginTop: "0.4rem",
                                opacity: 0.85,
                              }}
                            >
                              — {entry.language}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          height: "3.5rem",
          padding: "0 1.5rem",
          borderRadius: "100px",
          background: "var(--color-card)",
          border: "1px solid var(--color-line-warm)",
          boxShadow: "0 4px 16px rgba(100,60,40,0.08), 0 2px 4px rgba(100,60,40,0.04)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <span style={{ fontSize: "1.4rem" }}>🌍</span>
        
        <span
          className="hidden sm:inline-block"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "1.1rem",
            color: "var(--color-ink)",
            whiteSpace: "nowrap",
          }}
        >
          Happy Birthday Dearest
        </span>
        
        {/* Unread Badge */}
        <AnimatePresence>
          {unreadCount > 0 && !isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              style={{
                position: "absolute",
                top: "-4px",
                right: "-4px",
                background: "var(--color-rose)",
                color: "#fff",
                fontSize: "0.75rem",
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(220, 100, 100, 0.3)",
              }}
            >
              {unreadCount}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
