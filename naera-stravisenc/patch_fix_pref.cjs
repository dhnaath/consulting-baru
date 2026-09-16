const fs = require('fs');

// 1. Restore Preferences in Profile Menu
let wiraSettings = 'src/components/wira-settings.tsx';
if (fs.existsSync(wiraSettings)) {
    let content = fs.readFileSync(wiraSettings, 'utf8');
    content = content.replace(
        `          <ProfileMenuItem
            icon={User}
            label="Profile Settings"
            onClick={() => onOpenSettings("profile")}
          />`,
        `          <ProfileMenuItem
            icon={User}
            label="Profile Settings"
            onClick={() => onOpenSettings("profile")}
          />
          <ProfileMenuItem
            icon={Settings}
            label="Preferences"
            onClick={() => onOpenSettings("general")}
          />`
    );
    fs.writeFileSync(wiraSettings, content);
}

// 2. Remove Pengaturan/Preferences from Sidebar
let appShell = 'src/components/app-shell.tsx';
if (fs.existsSync(appShell)) {
    let content = fs.readFileSync(appShell, 'utf8');
    content = content.replace(
        `              <button
                className="flex h-9 w-full items-center justify-start gap-2 px-3 rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                title="Pengaturan"
                onClick={() => handleOpenSettings("general")}
              >
                <Settings className="size-4" /> Pengaturan
              </button>`,
        ``
    );
    fs.writeFileSync(appShell, content);
}

console.log("Patched fixed preferences");
