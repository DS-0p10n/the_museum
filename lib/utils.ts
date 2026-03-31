// lib/utils.ts
// General utility helpers for the museum app.

/**
 * Merges class names together (simple version — extend with clsx if needed).
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a date string into a human-readable museum label.
 * e.g. "2023-06-15" → "June 15, 2023"
 */
export function formatMuseumDate(dateStr: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateStr));
  } catch {
    return dateStr;
  }
}

/**
 * Shuffles an array — useful for random gallery ordering.
 */
export function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
