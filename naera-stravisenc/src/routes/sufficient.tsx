import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { SufficientView } from "@/components/stages/SufficientView";

export const Route = createFileRoute("/sufficient")({
  head: () => ({
    meta: [
      { title: "Sufficient — Client OS" },
      { name: "description", content: "Fase 2: Sufficient (Kecukupan & Kemandirian)." },
    ],
  }),
  component: SufficientPage,
});

function SufficientPage() {
  return (
    <AppShell title="Sufficient" subtitle="Fase 2: Kecukupan & Kemandirian">
      <div className="w-full">
        <SufficientView />
      </div>
    </AppShell>
  );
}
