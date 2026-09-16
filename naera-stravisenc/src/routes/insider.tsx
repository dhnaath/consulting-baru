import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { InsiderView } from "@/components/overview/InsiderView";

export const Route = createFileRoute("/insider")({
  head: () => ({
    meta: [
      { title: "Insider — Client OS" },
      { name: "description", content: "Overview: Insider intelligence dan pemantauan internal." },
    ],
  }),
  component: InsiderPage,
});

function InsiderPage() {
  return (
    <AppShell title="Insider" subtitle="Overview > Insider">
      <div className="w-full">
        <InsiderView />
      </div>
    </AppShell>
  );
}
