import { AppDock } from "./shell/app-dock";
import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  PanelLeft,
  PanelRight,
  LayoutDashboard,
  Users,
  FolderKanban,
  CheckSquare,
  CheckCircle2,
  Sparkles,
  NotebookText,
  CalendarDays,
  Compass,
  Gauge,
  MessagesSquare,
  CalendarClock,
  FolderOpen,
  Activity,
  LineChart,
  AlertTriangle,
  FileText,
  Shield,
  Calculator,
  HeartHandshake,
  Navigation,
  Building,
  TrendingUp,
  Package,
  Grid2X2,
  MoreHorizontal,
  Star,
  User,
  Settings,
  Wallet,
  CreditCard,
  ChevronDown,
  ChevronRight,
  Droplet,
  Timer,
  Briefcase,
  Target,
  BookOpen,
  Bookmark,
  Lightbulb,
  Eye,
  Key,
  Dumbbell,
  Utensils,
  Music,
  CloudSun,
  Book,
  Plane,
  ShoppingCart,
  Heart,
  HeartPulse,
  Archive,
  GraduationCap,
  Layers,
  FileCheck,
  Globe,
  Film,
  Gamepad2,
  Podcast,
  Ticket,
  PenTool,
  Camera,
  Type,
  Code,
  DollarSign,
  ShieldCheck,
  RefreshCw,
  Building2,
  Sprout,
  Search,
  Bell,
  Coins,
  MessageCircle,
  Truck,
  Store,
  Home,
  ScrollText,
  Binary,
  Info,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/finance/hooks/useLanguage";
import type { ReactNode } from "react";

import { ThemeLangToggle } from "@/components/theme-lang-toggle";
import { ProfileMenu, SettingsModal } from "./wira-settings";
import { useMenuSettings } from "@/hooks/useMenuSettings";
import { useFavorites } from "@/hooks/useFavorites";
import { HeaderBreadcrumb } from "@/components/HeaderBreadcrumb";
import { useCustomNav } from "@/hooks/useCustomNav";
import { CustomSidebarSection } from "@/components/CustomSidebarSection";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { navKonsultan, type NavItem, type NavGroup as NavGroupType } from "@/config/nav";

function NavGroup({ title, items }: { title: string; items: any[] }) {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActiveGroup = items.some((item) => {
    if (item.to === "/" || item.to === "/portal") {
      return pathname === item.to;
    }
    return pathname.startsWith(item.to);
  });

  return (
    <div
      className={`mb-4 last:mb-0 rounded-xl transition-all ${isActiveGroup ? "py-2.5 nav-gooey-active shadow-[-4px_0_12px_rgba(0,0,0,0.02)]" : "py-1"}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between pr-3 pl-[22px] py-1.5 text-sm font-bold tracking-wider text-muted-foreground/70 transition-colors hover:text-foreground"
      >
        <span className={isActiveGroup ? "text-foreground" : ""}>{title}</span>
        {isOpen ? (
          <ChevronDown className={`size-3 ${isActiveGroup ? "text-foreground" : ""}`} />
        ) : (
          <ChevronRight className="size-3" />
        )}
      </button>
      {isOpen && (
        <div className="mt-1 flex flex-col gap-0.5">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" || item.to === "/portal" }}
              className="flex items-center gap-2.5 rounded-lg pl-[27px] pr-3 py-2 text-sm font-medium text-muted-foreground/70 transition-colors hover:text-foreground relative"
              activeProps={{ className: "text-foreground font-bold" }}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function AppShell({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const location = useRouterState({ select: (s) => s.location });
  const pathname = location.pathname;
  const fullPath = pathname + (location.searchStr || "");
  const rawNav = navKonsultan;
  const { enabledMenus } = useMenuSettings();
  const { findItemById, findItemByPath } = useCustomNav();

  const searchParams = new URLSearchParams(location.searchStr || "");
  const customIdParam = searchParams.get("id");
  const customMatch = customIdParam
    ? findItemById(customIdParam)
    : findItemByPath(fullPath);

  const nav = rawNav
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => enabledMenus[item.to] !== false),
    }))
    .filter((group) => group.items.length > 0);

  let categoryName = "Umum";
  let categoryGroup: { title?: string; items?: readonly any[] | any[] } | undefined = rawNav[0];

  if (customMatch && (pathname === "/lainnya" || customMatch.item.path === fullPath)) {
    categoryName = customMatch.category.title;
    categoryGroup = {
      title: customMatch.category.title,
      items: customMatch.category.items.map((i) => ({
        label: i.label,
        to: i.path,
      })),
    };
  } else {
    const exactItem = rawNav.flatMap((g) => g.items).find((i) => i.to === pathname);
    if (exactItem) {
      const foundGroup = rawNav.find((g) => g.items.includes(exactItem));
      if (foundGroup) {
        categoryName = foundGroup.title || "Umum";
        categoryGroup = foundGroup;
      }
    } else {
      const fallbackItem = rawNav
        .flatMap((g) => g.items)
        .find((i) => i.to !== "/" && pathname.startsWith(i.to));
      if (fallbackItem) {
        const foundGroup = rawNav.find((g) => g.items.includes(fallbackItem));
        if (foundGroup) {
          categoryName = foundGroup.title || "Umum";
          categoryGroup = foundGroup;
        }
      }
    }
  }

  const categorySiblings = categoryGroup?.items
    ?.filter((item) => item.to !== fullPath && item.to !== pathname)
    ?.map((item) => ({ label: item.label, href: item.to })) || [];

  const displayTitle =
    customMatch && pathname === "/lainnya" ? customMatch.item.label : title;

  const [openDrawer, setOpenDrawer] = useState<"left" | "right" | null>(
    null,
  );
  const [collapsedNavGroups, setCollapsedNavGroups] = useState<Record<string, boolean>>({});
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isVersionOpen, setIsVersionOpen] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState("general");
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const isMobile = window.innerWidth < 1024;

      if (isMobile) {
        const mobileContainer = document.querySelector(
          ".lg\\:hidden.overflow-x-auto",
        ) as HTMLElement;
        if (mobileContainer) {
          const activeElement = mobileContainer.querySelector(".\\!bg-accent") as HTMLElement;
          if (activeElement) {
            const containerRect = mobileContainer.getBoundingClientRect();
            const activeRect = activeElement.getBoundingClientRect();
            const scrollLeft =
              mobileContainer.scrollLeft +
              (activeRect.left - containerRect.left) -
              containerRect.width / 2 +
              activeRect.width / 2;
            mobileContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
          }
        }
      } else {
        const sidebarContainer = document.querySelector(
          ".bg-sidebar .overflow-y-auto",
        ) as HTMLElement;
        if (sidebarContainer) {
          const activeElement = sidebarContainer.querySelector(".nav-gooey-active") as HTMLElement;
          if (activeElement) {
            const containerRect = sidebarContainer.getBoundingClientRect();
            const activeRect = activeElement.getBoundingClientRect();
            const scrollTop =
              sidebarContainer.scrollTop +
              (activeRect.top - containerRect.top) -
              containerRect.height / 2 +
              activeRect.height / 2;
            sidebarContainer.scrollTo({ top: scrollTop, behavior: "smooth" });
          }
        }
      }
    }, 150);

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);

  const handleOpenSettings = (tab = "general") => {
    setActiveSettingsTab(tab);
    setIsSettingsOpen(true);
    setIsProfileOpen(false);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground">
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        initialTab={activeSettingsTab}
      />

      <aside id="sidenavLeft" className={`fixed inset-y-0 left-0 z-50 flex w-[275px] flex-col border-r border-border bg-background transition-transform duration-500 ease-in-out ${openDrawer === "left" ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center gap-3 px-4 py-4 sm:px-6 shrink-0">
          <button className="hidden p-2 -ml-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0" onClick={() => setOpenDrawer(null)}><PanelLeft size={20} /></button>
          <div className="flex flex-col opacity-0 pointer-events-none select-none">
            <h1 className="truncate text-xl font-semibold tracking-tight sm:text-2xl">T</h1>
            <div className="mt-1 flex items-center font-mono text-xs sm:text-sm">T</div>
          </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 py-6 sm:px-6 sm:py-8">
          <nav className="flex flex-col gap-6">
            {nav.map((group) => {
              const isGroupCollapsed = group.title ? !!collapsedNavGroups[group.title] : false;
              return (
              <div key={group.title} className="flex flex-col gap-2 ml-[5px]">
                {group.title && (
                  <button
                    type="button"
                    onClick={() => setCollapsedNavGroups(prev => ({ ...prev, [group.title!]: !prev[group.title!] }))}
                    className="flex items-center justify-between w-full text-left outline-none mb-1 group"
                  >
                    <h4 className="text-lg font-bold capitalize text-muted-foreground group-hover:text-foreground transition-colors">
                      {group.title}
                    </h4>
                    {isGroupCollapsed ? (
                      <ChevronRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    ) : (
                      <ChevronDown className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    )}
                  </button>
                )}
                {!isGroupCollapsed && (
                  <div className="flex flex-col gap-2">
                    {group.items.map((item) => {
                      const isFav = favorites.includes(item.to);
                      return (
                        <div key={item.to} className="group/item relative flex items-center">
                          <Link
                            to={item.to}
                            activeOptions={{ exact: item.to === "/" || item.to === "/portal" }}
                            onClick={() => setOpenDrawer(null)}
                            className="flex-1 whitespace-nowrap text-sm text-muted-foreground hover:text-foreground py-1 px-2 -ml-2 rounded-md hover:bg-muted/50 transition-colors"
                            activeProps={{ className: "text-foreground font-bold" }}
                          >
                            {item.label}
                          </Link>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleFavorite(item.to);
                            }}
                            className={`absolute right-0 p-1.5 rounded-md transition-opacity ${isFav ? 'opacity-100' : 'opacity-0 group-hover/item:opacity-100'} hover:bg-accent`}
                            title={isFav ? "Hapus dari Favorit" : "Tambah ke Favorit"}
                          >
                            <Star className={`size-3.5 ${isFav ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground'}`} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )})}


          
            {/* Bagian Bawah Sidebar Kiri: Custom Folder & Menu */}
            <div className="ml-[5px]">
              <CustomSidebarSection onItemClick={() => setOpenDrawer(null)} />
            </div>
          </nav>
        </div>
      </aside>

      <aside id="sidenavRight" className={`fixed inset-y-0 right-0 z-50 flex w-[275px] flex-col border-l border-border bg-background transition-transform duration-500 ease-in-out ${openDrawer === "right" ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-end gap-3 px-4 py-4 sm:px-6 shrink-0">
          <button className="hidden p-2 -mr-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0" onClick={() => setOpenDrawer(null)}><PanelRight size={20} /></button>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 py-2 sm:px-6">
          <nav className="flex flex-col gap-4 items-start">
            <div className="flex flex-col gap-3 w-full">
              <button
                className="flex h-9 w-full items-center justify-start gap-2 px-3 rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                title="Atur Menu"
                onClick={() => handleOpenSettings("menu")}
              >
                <MoreHorizontal className="size-4" /> Atur Menu
              </button>
              <button
                className="flex h-9 w-full items-center justify-start gap-2 px-3 rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                title="Pengaturan"
                onClick={() => handleOpenSettings("general")}
              >
                <Settings className="size-4" /> Pengaturan
              </button>
              <button
                type="button"
                className="flex h-9 w-full relative items-center justify-start gap-2 px-3 rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Notifications"
              >
                <Bell className="size-4" /> Notifikasi
                <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"></span>
              </button>
              <ThemeLangToggle />

              {/* Menu Informasi Versi Aplikasi */}
              <div className="pt-2 border-t border-border/80 w-full space-y-2">
                <button
                  type="button"
                  onClick={() => setIsVersionOpen(!isVersionOpen)}
                  className={`flex h-9 w-full items-center justify-between px-3 rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer ${
                    isVersionOpen ? "!bg-accent font-medium border-primary/30" : ""
                  }`}
                  title="Informasi Versi Aplikasi"
                >
                  <span className="flex items-center gap-2">
                    <Info className="size-4 text-primary shrink-0" />
                    <span className="text-sm">Versi Aplikasi</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold font-mono bg-primary/10 text-primary border border-primary/20">
                    v2.4.2
                  </span>
                </button>

                {/* Detail Informasi Versi saat diklik */}
                {isVersionOpen && (
                  <div className="w-full rounded-xl border border-border bg-muted/40 p-3 text-xs space-y-2.5 animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-1.5 border-b border-border/60">
                      <div className="flex items-center gap-1.5">
                        <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-semibold text-foreground text-xs">
                          Client OS Hub
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-medium">
                        Aktif
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-muted-foreground">
                      <div className="flex justify-between items-center">
                        <span>Nomor Versi</span>
                        <span className="font-mono font-semibold text-foreground">v2.4.2</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Rilis Build</span>
                        <span className="font-mono text-foreground">2026.09-stable</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Kanal Pembaruan</span>
                        <span className="text-foreground">Production</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Sinkronisasi</span>
                        <span className="text-emerald-500 font-medium flex items-center gap-1">
                          ✓ Terverifikasi
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>

        {/* Footer Informasi Versi Ringkas di Bawah Sidebar Kanan */}
        <div className="p-4 border-t border-border mt-auto shrink-0 bg-background/50">
          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span className="font-medium text-foreground">Client OS</span>
            </div>
            <span className="font-mono px-1.5 py-0.5 rounded bg-muted text-[10px] font-semibold text-muted-foreground">
              v2.4.2
            </span>
          </div>
          <p className="text-[10px] text-muted-foreground/70 mt-1">
            Build 2026.09 • Sistem Terbarui
          </p>
        </div>
      </aside>
      <main id="mainContent" className={`relative flex flex-1 flex-col overflow-hidden transition-[margin] duration-500 ease-in-out ${openDrawer === "left" ? "ml-[275px]" : openDrawer === "right" ? "mr-[275px]" : "ml-0"}`}>
        {openDrawer && (
          <div className="absolute inset-0 z-40 bg-black/40 transition-opacity duration-500" onClick={() => setOpenDrawer(null)} />
        )}
        <header className="sticky top-0 shrink-0 z-20 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="flex items-center justify-between gap-2 px-3 py-2.5 sm:px-6 sm:py-3">
            {/* Bagian Kiri Header: Breadcrumb & Nav Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0 flex-1 basis-0 justify-start">
              <button
                type="button"
                className="p-2 -ml-1 sm:-ml-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0 block"
                onClick={() => setOpenDrawer(openDrawer === "left" ? null : "left")}
                title="Buka Navigasi"
              >
                <PanelLeft size={20} />
              </button>

              <div className="min-w-0 flex-1 overflow-hidden">
                <HeaderBreadcrumb
                  className="text-xs"
                  segments={[
                    { label: "Home", href: "/" },
                    ...(categoryName && categoryName !== "Umum"
                      ? [
                          {
                            label: categoryName,
                            siblings: categorySiblings,
                          },
                        ]
                      : []),
                    { label: displayTitle },
                  ]}
                />
              </div>
            </div>

            {/* Bagian Tengah Header: Nama Menu yang Dibuka */}
            <div className="shrink-0 px-2 text-center max-w-[35%] sm:max-w-[45%]">
              <h1 className="truncate text-base sm:text-lg font-bold tracking-tight text-foreground">
                {displayTitle}
              </h1>
            </div>

            {/* Bagian Kanan Header: Switch Profile & Actions */}
            <div className="flex items-center justify-end gap-2 sm:gap-3 min-w-0 flex-1 basis-0">
              {actions}
              <div className="relative">
                <button
                  type="button"
                  className={`p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0 flex items-center justify-center transition-colors ${isProfileOpen ? "bg-accent text-foreground" : ""}`}
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
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-6 sm:px-6 sm:py-8 relative z-10">{children}</div><AppDock />
      </main>
    </div>
  );
}
