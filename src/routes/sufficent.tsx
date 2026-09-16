import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { SufficentView } from "@/components/stages/SufficentView";

export const Route = createFileRoute("/sufficent")({
  head: () => ({
    meta: [
      { title: "Sufficent — Client OS" },
      { name: "description", content: "Fase 2: Sufficent (Kecukupan & Kemandirian)." },
    ],
  }),
  component: SufficentPage,
});

function SufficentPage() {
  return (
    <AppShell title="Sufficent" subtitle="Fase 2: Kecukupan & Kemandirian">
      <div className="w-full">
        <SufficentView />
      </div>
    </AppShell>
  );
}
