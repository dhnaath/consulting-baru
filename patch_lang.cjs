const fs = require('fs');
const file = 'src/components/theme-lang-toggle.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `  const cycleLanguage = () => {
    const langs: Language[] = ["id", "en", "ms", "zh"];
    const currentIndex = langs.indexOf(lang);
    const nextLang = langs[(currentIndex + 1) % langs.length];
    localStorage.setItem("appLanguage", nextLang);
    window.dispatchEvent(new Event("languageChange"));
  };`,
  `  const setLanguageMode = (newLang: Language) => {
    localStorage.setItem("appLanguage", newLang);
    window.dispatchEvent(new Event("languageChange"));
  };`
);

content = content.replace(
  `      <button
        onClick={cycleLanguage}
        className="flex h-9 w-full items-center justify-start gap-2 rounded-lg border border-border bg-background px-3 text-xs font-bold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Globe className="size-4" /> Bahasa: {langText[lang]}
      </button>`,
  `      {/* Segmented Control Switch for Language */}
      <div className="flex h-9 w-full items-center rounded-lg border border-border bg-muted/30 p-1">
        {(Object.keys(langText) as Language[]).map((l) => (
          <button
            key={l}
            onClick={() => setLanguageMode(l)}
            className={\`flex-1 flex h-full items-center justify-center gap-1.5 rounded-md text-[11px] sm:text-xs font-bold transition-all \${lang === l ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}\`}
          >
            {langText[l]}
          </button>
        ))}
      </div>`
);

fs.writeFileSync(file, content);
console.log("Patched successfully");
