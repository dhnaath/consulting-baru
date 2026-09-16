const fs = require('fs');
const file = 'src/components/app-shell.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `              <button
                type="button"
                className="flex h-9 w-full relative items-center justify-start gap-2 px-3 rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Notifications"
              >
                <Bell className="size-4" /> Notifikasi
                <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"></span>
              </button>`,
  ``
);

fs.writeFileSync(file, content);
console.log("Patched successfully");
