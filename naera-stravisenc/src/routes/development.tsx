import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { DevelopmentView } from "@/components/stages/DevelopmentView";

export const Route = createFileRoute("/development")({
  head: () => ({
    meta: [
      { title: "Development — Client OS" },
      { name: "description", content: "Fase 4: Development (Pengembangan & Ekspansi)." },
    ],
  }),
  component: DevelopmentPage,
});

function DevelopmentPage() {
  return (
    <AppShell title="Development" subtitle="Fase 4: Pengembangan & Ekspansi">
      <div className="w-full">
        <DevelopmentView />
      </div>
    </AppShell>
  );
}
