const fs = require('fs');
let indexFile = 'src/routes/index.tsx';

let indexContent = `import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard } from "lucide-react";
import { AppShell } from "../components/app-shell";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <AppShell title="Home" subtitle="Selamat datang">
      <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] text-muted-foreground p-8">
        <LayoutDashboard className="size-12 mb-4 opacity-20" />
        <h2 className="text-xl font-medium text-foreground mb-2">Home</h2>
        <p className="text-sm text-center max-w-sm">
          Halaman ini sementara dikosongkan. Anda dapat memikirkan konten apa yang ingin ditaruh di sini nantinya.
        </p>
      </div>
    </AppShell>
  );
}
`;
fs.writeFileSync(indexFile, indexContent);
console.log("Restored AppShell to index.tsx");
