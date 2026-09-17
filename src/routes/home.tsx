import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "../components/app-shell";

export const Route = createFileRoute("/home")({
  component: Home,
});

function Home() {
  return (
    <AppShell title="Beranda" subtitle="Utama">
      <div className="flex flex-col items-center justify-center h-[calc(100vh-140px)]">
        <h2 className="text-3xl font-bold text-foreground">
          Selamat Pagi, ...................
        </h2>
      </div>
    </AppShell>
  );
}
