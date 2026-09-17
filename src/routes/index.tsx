import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/app-shell";
import { navKonsultan } from "../config/nav";
import { useState, useRef, useEffect, useMemo } from "react";
import { Search, Star } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

export const Route = createFileRoute("/")({
  component: Launcher,
});

const gradients = [
  "bg-gradient-to-br from-blue-400 to-blue-600",
  "bg-gradient-to-br from-green-400 to-green-600",
  "bg-gradient-to-br from-purple-400 to-purple-600",
  "bg-gradient-to-br from-orange-400 to-orange-600",
  "bg-gradient-to-br from-pink-400 to-pink-600",
  "bg-gradient-to-br from-indigo-400 to-indigo-600",
  "bg-gradient-to-br from-teal-400 to-teal-600",
  "bg-gradient-to-br from-rose-400 to-rose-600",
  "bg-gradient-to-br from-amber-400 to-amber-600",
  "bg-gradient-to-br from-cyan-400 to-cyan-600",
  "bg-gradient-to-br from-violet-400 to-violet-600",
  "bg-gradient-to-br from-fuchsia-400 to-fuchsia-600",
  "bg-gradient-to-br from-emerald-400 to-emerald-600",
  "bg-gradient-to-br from-sky-400 to-sky-600",
  "bg-gradient-to-br from-red-400 to-red-600",
  "bg-gradient-to-br from-slate-600 to-slate-800",
];

function getGradient(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

const SUPER_CATEGORIES = [
  {
    title: "Konsultasi & Proyek",
    subCategories: ["Tahapan", "Proyek", "Portal Klien", "Value Treated"],
  },
  {
    title: "Manajemen Keuangan",
    subCategories: [
      "Keuangan & Investasi",
      "5 Tahap Keuangan",
      "Syariah & Muamalah",
      "Asset",
      "Liability",
      "Earning",
      "Expense",
    ],
  },
  {
    title: "Produktivitas",
    subCategories: ["Overview", "Productivity", "Memos", "Personal", "Lain-lain"],
  },
  {
    title: "Kehidupan Pribadi",
    subCategories: ["Wellbeing", "Lifestyle", "Entertainment", "Education", "Creativity"],
  },
];

function Launcher() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeSubCategories, setActiveSubCategories] = useState<Record<string, string>>({});
  const { favorites, toggleFavorite } = useFavorites();

  const pages = useMemo(() => {
    return SUPER_CATEGORIES.map((superCat) => {
      const groups = navKonsultan.filter((group) =>
        superCat.subCategories.includes(group.title)
      );
      
      const allItems = groups.flatMap((g) => g.items).filter((item) => item.to !== "/");
      
      return {
        title: superCat.title,
        subCategories: groups.map(g => ({
          title: g.title,
          items: g.items.filter((item) => item.to !== "/")
        })),
        allItems
      };
    }).filter(page => page.allItems.length > 0);
  }, []);

  // Handle scroll to update current page
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth } = scrollRef.current;
        const page = Math.round(scrollLeft / clientWidth);
        setCurrentPage(page);
      }
    };
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: pageIndex * scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const setSubCategory = (pageTitle: string, subCategoryTitle: string | null) => {
    setActiveSubCategories(prev => ({
      ...prev,
      [pageTitle]: subCategoryTitle || "All"
    }));
  };

  return (
    <AppShell title="Launcher" subtitle="Aplikasi">
      <div className="flex-1 w-full relative bg-background/50 flex flex-col">
        
        {/* Pages Container */}
        <div 
          ref={scrollRef}
          className="w-full flex overflow-x-auto snap-x snap-mandatory [hide-scrollbar::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'smooth' }}
        >
          {pages.length > 0 ? pages.map((page, pageIdx) => {
            const activeSub = activeSubCategories[page.title] || "All";
            
            const displayItems = activeSub === "All" 
              ? page.allItems 
              : page.subCategories.find(sub => sub.title === activeSub)?.items || [];

            return (
              <div 
                key={pageIdx} 
                className="w-full shrink-0 snap-center flex-none px-4 sm:px-6 md:px-8 lg:px-12 pt-[0px] pb-[0px] flex flex-col items-center"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground/80 mb-8 tracking-tight">
                  {page.title}
                </h3>
                
                {/* Subcategory Pills */}
                <div 
                  className="w-full max-w-5xl mb-10 overflow-x-auto [&::-webkit-scrollbar]:hidden" 
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <div className="flex flex-nowrap items-center gap-3 w-max mx-auto px-2 py-1">
                    <button
                      onClick={() => setSubCategory(page.title, "All")}
                      className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        activeSub === "All"
                          ? "bg-primary text-primary-foreground shadow-md scale-105"
                          : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
                      }`}
                    >
                      Semua
                    </button>
                    {page.subCategories.map((sub) => (
                      <button
                        key={sub.title}
                        onClick={() => setSubCategory(page.title, sub.title)}
                        className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          activeSub === sub.title
                            ? "bg-primary text-primary-foreground shadow-md scale-105"
                            : "bg-muted/80 text-muted-foreground hover:bg-muted hover:text-foreground hover:scale-105"
                        }`}
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-x-6 gap-y-8 place-items-start max-w-[1400px] mx-auto w-full mb-10">
                  {displayItems.map((item) => {
                    const gradient = getGradient(item.label);
                    const isFav = favorites.includes(item.to);
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="flex flex-col items-center gap-3 group w-full outline-none relative"
                      >
                        <div 
                          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-[1.25rem] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-110 group-active:scale-95 ${gradient} relative`}
                        >
                          <item.icon className="size-7 sm:size-8 opacity-90 drop-shadow-sm" strokeWidth={1.5} />
                          
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              toggleFavorite(item.to);
                            }}
                            className={`absolute -top-2 -right-2 p-1.5 rounded-full bg-background border shadow-sm transition-all duration-200 opacity-0 group-hover:opacity-100 scale-90 hover:scale-110 ${
                              isFav ? "opacity-100" : ""
                            }`}
                          >
                            <Star
                              className={`size-3 sm:size-3.5 transition-colors ${
                                isFav ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                              }`}
                            />
                          </button>
                        </div>
                        <span className="text-xs sm:text-sm text-foreground/90 font-medium text-center line-clamp-2 leading-tight px-1 group-hover:text-foreground">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }) : (
            <div className="w-full flex items-center justify-center py-20 text-muted-foreground">
              No applications found.
            </div>
          )}
        </div>

        {/* Pagination Dots */}
        {pages.length > 1 && (
          <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-2 pb-2 pointer-events-none z-50">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToPage(idx)}
                className={`size-2 rounded-full transition-all duration-300 pointer-events-auto ${
                  currentPage === idx ? "bg-primary w-3 shadow-md" : "bg-primary/30 hover:bg-primary/50 shadow-sm"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </AppShell>
  );
}

