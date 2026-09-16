const fs = require('fs');
const file = 'src/components/theme-lang-toggle.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `  const toggleTheme = () => {
    const newTheme = theme === "Dark" ? "Light" : "Dark";
    setTheme(newTheme);
    localStorage.setItem("appTheme", newTheme);
  };`,
  `  const setThemeMode = (newTheme: "Dark" | "Light") => {
    setTheme(newTheme);
    localStorage.setItem("appTheme", newTheme);
  };`
);

content = content.replace(
  `<button
        onClick={toggleTheme}
        className="flex h-9 w-full items-center justify-between gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs font-bold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <span className="flex items-center gap-2">
          {theme === "Dark" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          Mode {theme === "Dark" ? "Gelap" : "Terang"}
        </span>
        <div className={\`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors \${theme === "Dark" ? "bg-primary" : "bg-muted-foreground/30"}\`}>
          <span className={\`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-background shadow-sm ring-0 transition duration-200 ease-in-out \${theme === "Dark" ? "translate-x-4" : "translate-x-0.5"}\`} />
        </div>
      </button>`,
  `{/* Segmented Control Switch for Theme */}
      <div className="flex h-9 w-full items-center rounded-lg border border-border bg-muted/30 p-1">
        <button
          onClick={() => setThemeMode("Light")}
          className={\`flex-1 flex h-full items-center justify-center gap-1.5 rounded-md text-xs font-bold transition-all \${theme === "Light" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}\`}
        >
          <Sun className="size-3.5" /> Terang
        </button>
        <button
          onClick={() => setThemeMode("Dark")}
          className={\`flex-1 flex h-full items-center justify-center gap-1.5 rounded-md text-xs font-bold transition-all \${theme === "Dark" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}\`}
        >
          <Moon className="size-3.5" /> Gelap
        </button>
      </div>`
);

fs.writeFileSync(file, content);
console.log("Patched successfully");
