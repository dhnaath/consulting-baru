const fs = require('fs');
const file = 'src/components/app-shell.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `            {/* Bagian Kanan Header: Switch Profile & Actions */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 min-w-0 flex-1 basis-0">
              {actions}
              <div className="relative">
                <button
                  type="button"
                  className={\`p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0 flex items-center justify-center transition-colors \${isProfileOpen ? "bg-accent text-foreground" : ""}\`}
                  title="Profil"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <User className="size-5 shrink-0" />
                </button>
                <ProfileMenu
                  isOpen={isProfileOpen}
                  onClose={() => setIsProfileOpen(false)}
                  onOpenSettings={handleOpenSettings}
                />
              </div>
              <button
                type="button"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0 flex items-center justify-center transition-colors"
                title="Pencarian"
                aria-label="Search"
              >
                <Search className="size-5 shrink-0" />
              </button>
              <button
                className="p-2 -mr-1 sm:-mr-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0 block"
                onClick={() => setOpenDrawer(openDrawer === "right" ? null : "right")}
                title="Buka Menu Kanan"
              >
                <PanelRight size={20} />
              </button>
            </div>`,
  `            {/* Bagian Kanan Header: Switch Profile & Actions */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 min-w-0 flex-1 basis-0">
              {actions}
              <button
                type="button"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0 flex items-center justify-center transition-colors"
                title="Pencarian"
                aria-label="Search"
              >
                <Search className="size-5 shrink-0" />
              </button>
              <button
                type="button"
                className="p-2 relative text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0 flex items-center justify-center transition-colors"
                title="Notifikasi"
                aria-label="Notifications"
              >
                <Bell className="size-5 shrink-0" />
                <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"></span>
              </button>
              <div className="relative">
                <button
                  type="button"
                  className={\`p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0 flex items-center justify-center transition-colors \${isProfileOpen ? "bg-accent text-foreground" : ""}\`}
                  title="Profil"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <User className="size-5 shrink-0" />
                </button>
                <ProfileMenu
                  isOpen={isProfileOpen}
                  onClose={() => setIsProfileOpen(false)}
                  onOpenSettings={handleOpenSettings}
                />
              </div>
              <button
                className="p-2 -mr-1 sm:-mr-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0 block"
                onClick={() => setOpenDrawer(openDrawer === "right" ? null : "right")}
                title="Buka Menu Kanan"
              >
                <PanelRight size={20} />
              </button>
            </div>`
);

fs.writeFileSync(file, content);
console.log("Patched successfully");
