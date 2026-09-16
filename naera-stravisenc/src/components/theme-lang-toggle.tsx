import { useState, useEffect } from "react";
import { Globe, Moon, Sun } from "lucide-react";
import { useLanguage, Language } from "@/finance/hooks/useLanguage";

export function ThemeLangToggle() {
  const lang = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"Dark" | "Light">("Light");

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem("appTheme") as "Dark" | "Light") || "Light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (theme === "Dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [theme, mounted]);

  const setThemeMode = (newTheme: "Dark" | "Light") => {
    setTheme(newTheme);
    localStorage.setItem("appTheme", newTheme);
  };

  const setLanguageMode = (newLang: Language) => {
    localStorage.setItem("appLanguage", newLang);
    window.dispatchEvent(new Event("languageChange"));
  };

  const langText = {
    id: "ID",
    en: "EN",
    ms: "MS",
    zh: "ZH",
  };

  if (!mounted) {
    return (
      <div className="flex flex-col gap-3 w-full">
        <div className="h-9 w-16 rounded-lg border border-border bg-background"></div>
        <div className="h-9 w-9 rounded-lg border border-border bg-background"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Segmented Control Switch for Language */}
      <div className="flex h-9 w-full items-center rounded-lg border border-border bg-muted/30 p-1">
        {(Object.keys(langText) as Language[]).map((l) => (
          <button
            key={l}
            onClick={() => setLanguageMode(l)}
            className={`flex-1 flex h-full items-center justify-center gap-1.5 rounded-md text-[11px] sm:text-xs font-bold transition-all ${lang === l ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
          >
            {langText[l]}
          </button>
        ))}
      </div>
      {/* Segmented Control Switch for Theme */}
      <div className="flex h-9 w-full items-center rounded-lg border border-border bg-muted/30 p-1">
        <button
          onClick={() => setThemeMode("Light")}
          className={`flex-1 flex h-full items-center justify-center gap-1.5 rounded-md text-xs font-bold transition-all ${theme === "Light" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
        >
          <Sun className="size-3.5" /> Terang
        </button>
        <button
          onClick={() => setThemeMode("Dark")}
          className={`flex-1 flex h-full items-center justify-center gap-1.5 rounded-md text-xs font-bold transition-all ${theme === "Dark" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"}`}
        >
          <Moon className="size-3.5" /> Gelap
        </button>
      </div>
    </div>
  );
}
