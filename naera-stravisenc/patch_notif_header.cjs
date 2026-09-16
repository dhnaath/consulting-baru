const fs = require('fs');
const file = 'src/components/app-shell.tsx';
let content = fs.readFileSync(file, 'utf8');

const searchBtn = `                <Search className="size-5 shrink-0" />
              </button>`;
              
const searchAndNotif = `                <Search className="size-5 shrink-0" />
              </button>
              <button
                type="button"
                className="p-2 relative text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0 flex items-center justify-center transition-colors"
                title="Notifikasi"
                aria-label="Notifications"
              >
                <Bell className="size-5 shrink-0" />
                <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"></span>
              </button>`;

content = content.replace(searchBtn, searchAndNotif);

fs.writeFileSync(file, content);
console.log("Patched header notif");
