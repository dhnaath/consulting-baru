import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "../components/app-shell";
import { navKonsultan } from "../config/nav";
import { useState, useRef, useEffect, useMemo } from "react";
import { Search } from "lucide-react";

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

function Launcher() {
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = useMemo(() => {
    return navKonsultan
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.to !== "/"),
      }))
      .filter((group) => group.items.length > 0);
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

  return (
    <AppShell title="Launcher" subtitle="Aplikasi">
      <div className="flex-1 flex flex-col h-[calc(100vh-140px)] relative overflow-hidden bg-background/50">
        


        {/* Pages Container */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex [hide-scrollbar::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pages.length > 0 ? pages.map((page, pageIdx) => (
            <div 
              key={pageIdx} 
              className="w-full h-full shrink-0 snap-center flex-none px-4 sm:px-8 md:px-12 lg:px-24 pb-12 pt-8 overflow-y-auto flex flex-col items-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground/70 mb-8 tracking-tight">
                {page.title}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-x-4 gap-y-8 place-items-start max-w-6xl mx-auto w-full">
                {page.items.map((item) => {
                  const gradient = getGradient(item.label);
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex flex-col items-center gap-2 group w-full outline-none"
                    >
                      <div 
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-[1.25rem] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-110 group-active:scale-95 ${gradient}`}
                      >
                        <item.icon className="size-7 sm:size-8 opacity-90 drop-shadow-sm" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs sm:text-sm text-foreground/90 font-medium text-center line-clamp-2 leading-tight px-1 group-hover:text-foreground">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )) : (
            <div className="w-full flex items-center justify-center text-muted-foreground">
              No applications found.
            </div>
          )}
        </div>

        {/* Pagination Dots */}
        {pages.length > 1 && (
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 pb-2">
            {pages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToPage(idx)}
                className={`size-2 rounded-full transition-all duration-300 ${
                  currentPage === idx ? "bg-primary w-3" : "bg-primary/30 hover:bg-primary/50"
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
