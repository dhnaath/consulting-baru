const fs = require('fs');

// 1. Rename in nav
let navFile = 'src/config/nav.ts';
let navContent = fs.readFileSync(navFile, 'utf8');
navContent = navContent.replace(
  `{ to: "/", label: "Dashboard", icon: LayoutDashboard }`,
  `{ to: "/", label: "Home", icon: LayoutDashboard }`
);
fs.writeFileSync(navFile, navContent);

// 2. Rename in dock
let dockFile = 'src/components/shell/app-dock.tsx';
let dockContent = fs.readFileSync(dockFile, 'utf8');
dockContent = dockContent.replace(
  `{ id: "/", label: "Dashboard", icon: LayoutDashboard }`,
  `{ id: "/", label: "Home", icon: LayoutDashboard }`
);
fs.writeFileSync(dockFile, dockContent);

// 3. Replace index.tsx with empty Home
let indexFile = 'src/routes/index.tsx';
let indexContent = `import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[50vh] text-muted-foreground p-8">
      <LayoutDashboard className="size-12 mb-4 opacity-20" />
      <h2 className="text-xl font-medium text-foreground mb-2">Home</h2>
      <p className="text-sm text-center max-w-sm">
        Halaman ini sementara dikosongkan. Anda dapat memikirkan konten apa yang ingin ditaruh di sini nantinya.
      </p>
    </div>
  );
}
`;
fs.writeFileSync(indexFile, indexContent);

console.log("Patched Home");
