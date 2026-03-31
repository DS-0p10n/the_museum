// app/page.tsx — Server Component (App Router default)
// Renders the EntryGate as the homepage.
// Feature sections (Gallery, Timeline, etc.) will be added in subsequent phases.

import EntryGate from "@/components/EntryGate";

export default function HomePage() {
  return (
    <main>
      <EntryGate />
    </main>
  );
}
