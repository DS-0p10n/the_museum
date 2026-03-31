import { greetingsByTimezone, GreetingTimezone } from "@/data/greetings";

/**
 * Checks if the current local time in a given timezone has reached
 * April 1st, 00:00 (for the current year).
 * 
 * It formats the provided 'now' Date object into the target timezone
 * and checks if the local month is April (4) or later.
 * This naturally covers the remainder of the year.
 */
export function hasReachedBirthday(timezone: string, now: Date = new Date()): boolean {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      month: "numeric",
      day: "numeric",
      year: "numeric",
    }).formatToParts(now);

    const monthPart = parts.find((p) => p.type === "month")?.value;
    const month = monthPart ? parseInt(monthPart, 10) : 0;

    // April is month 4. As soon as the local time hits April 1st 00:00,
    // the formatted month in that timezone becomes 4.
    return month >= 4;
  } catch (error) {
    console.error(`Invalid timezone provided: ${timezone}`, error);
    return false;
  }
}

/**
 * Evaluates all configured timezones and returns a list of the ones
 * that have successfully crossed into April 1st.
 */
export function getUnlockedGreetings(now: Date = new Date()): GreetingTimezone[] {
  return greetingsByTimezone.filter((tz) => hasReachedBirthday(tz.timezone, now));
}

/**
 * Compares the currently unlocked timezones against a list of previously
 * known unlocked timezone IDs. Returns ONLY the newly unlocked ones to
 * prevent duplicate trigger events in the UI.
 * 
 * @param previouslyUnlockedIds Array of timezone strings (e.g. ["Pacific/Auckland"])
 * @param now Optional current Date (defaults to system now)
 */
export function getNewlyUnlockedGreetings(
  previouslyUnlockedIds: string[],
  now: Date = new Date()
): GreetingTimezone[] {
  const currentUnlocked = getUnlockedGreetings(now);
  
  // Filter down to only those that aren't in the previously unlocked list
  return currentUnlocked.filter(
    (tz) => !previouslyUnlockedIds.includes(tz.timezone)
  );
}

/**
 * Used to extract just the timezone IDs from a list of GreetingTimezone objects.
 * Helpful for updating the 'previouslyUnlockedIds' state in the UI.
 */
export function extractTimezoneIds(greetings: GreetingTimezone[]): string[] {
  return greetings.map((g) => g.timezone);
}
