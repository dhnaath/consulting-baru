import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { OutwardView } from "@/components/overview/OutwardView";

export const Route = createFileRoute("/outward")({
  head: () => ({
    meta: [
      { title: "Outward — Client OS" },
      { name: "description", content: "Overview: Outward radar dan pemantauan dinamika eksternal." },
    ],
  }),
  component: OutwardPage,
});

function OutwardPage() {
  return (
    <AppShell title="Outward" subtitle="Overview > Outward">
      <div className="w-full">
        <OutwardView />
      </div>
    </AppShell>
  );
}
