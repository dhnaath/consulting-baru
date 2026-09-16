import { useRef, useMemo } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Target } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { navKonsultan } from "@/config/nav";

// Jarak (px) dari kursor ke ikon yang mempengaruhi ukurannya.
// Makin kecil = efek zoom makin "lokal" (cuma ikon terdekat yang membesar).
// Makin besar = efek zoom menyebar ke ikon-ikon di sekitarnya juga.
const CURSOR_RADIUS = 70;

// Ukuran ikon: [normal, saat pas di tengah kursor, normal lagi]
const ICON_SIZE_RANGE = [40, 70, 40];

function DockIcon({ 
  item, 
  mouseX, 
  isActive 
}: { 
  item: { id: string, label: string, icon: any }, 
  mouseX: any,
  isActive: boolean
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-CURSOR_RADIUS, 0, CURSOR_RADIUS],
    ICON_SIZE_RANGE
  );
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link to={item.id} className="relative group outline-none bg-transparent border-0 p-0 m-0 leading-none flex flex-col items-center justify-end shrink-0">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
        {item.label}
      </div>
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        className={`flex items-center justify-center rounded-2xl cursor-pointer ${
          isActive 
            ? "bg-indigo-600 text-white shadow-md" 
            : "bg-white/80 text-neutral-500 shadow-sm hover:bg-neutral-100 hover:text-neutral-900"
        } backdrop-blur-md border border-neutral-200/50`}
      >
        <item.icon className="w-1/2 h-1/2" />
      </motion.div>
      {isActive && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-indigo-600" />
      )}
    </Link>
  );
}

export function AppDock() {
  const mouseX = useMotionValue(Infinity);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { favorites } = useFavorites();

  const dockItems = useMemo(() => {
    if (favorites.length === 0) return [];
    
    // Create a flat map of all available navigation items
    const allItems = navKonsultan.flatMap(group => group.items);
    
    // Map favorite paths to their respective item configuration
    return favorites.map(favPath => {
      const found = allItems.find(item => item.to === favPath);
      if (found) {
        return { id: found.to, label: found.label, icon: found.icon };
      }
      return { id: favPath, label: favPath, icon: Target }; // Fallback
    });
  }, [favorites]);

  if (dockItems.length === 0) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 hidden sm:flex">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-3 px-4 pb-3 h-16 rounded-3xl bg-white/40 backdrop-blur-xl border border-neutral-200/50 shadow-lg"
      >
        {dockItems.map((item) => {
          const isActive = pathname === item.id || (item.id !== "/" && pathname.startsWith(item.id));
          return (
            <DockIcon 
              key={item.id} 
              item={item} 
              mouseX={mouseX} 
              isActive={isActive} 
            />
          );
        })}
      </motion.div>
    </div>
  );
}
