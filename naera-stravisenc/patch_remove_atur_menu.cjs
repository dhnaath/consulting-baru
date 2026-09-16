const fs = require('fs');
const file = 'src/components/app-shell.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `              <button
                className="flex h-9 w-full items-center justify-start gap-2 px-3 rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                title="Atur Menu"
                onClick={() => handleOpenSettings("menu")}
              >
                <MoreHorizontal className="size-4" /> Atur Menu
              </button>`,
  ``
);

fs.writeFileSync(file, content);
console.log("Patched successfully");
