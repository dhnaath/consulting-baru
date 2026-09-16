import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { ImprovementView } from "@/components/stages/ImprovementView";

export const Route = createFileRoute("/improvement")({
  head: () => ({
    meta: [
      { title: "Improvement — Client OS" },
      { name: "description", content: "Fase 3: Improvement (Optimalisasi & Kaizen)." },
    ],
  }),
  component: ImprovementPage,
});

function ImprovementPage() {
  return (
    <AppShell title="Improvement" subtitle="Fase 3: Optimalisasi & Kaizen">
      <div className="w-full">
        <ImprovementView />
      </div>
    </AppShell>
  );
}
