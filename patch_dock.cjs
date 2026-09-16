const fs = require('fs');
const file = 'src/components/shell/app-dock.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `import { Target } from "lucide-react";`,
  `import { Target, LayoutDashboard, CalendarDays } from "lucide-react";`
);

const oldMemo = `  const dockItems = useMemo(() => {
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
  }, [favorites]);`;

const newMemo = `  const dockItems = useMemo(() => {
    // Create a flat map of all available navigation items
    const allItems = navKonsultan.flatMap(group => group.items);
    
    // Map favorite paths to their respective item configuration
    const dynamicItems = favorites.map(favPath => {
      const found = allItems.find(item => item.to === favPath);
      if (found) {
        return { id: found.to, label: found.label, icon: found.icon };
      }
      return { id: favPath, label: favPath, icon: Target }; // Fallback
    });
    
    // 2 tombol statis baru
    const staticItems = [
      { id: "/", label: "Dashboard", icon: LayoutDashboard },
      { id: "/tasks-calendar", label: "Kalender", icon: CalendarDays },
    ];
    
    // Hilangkan duplikasi jika ternyata tombol statis sudah ada di favorit
    const filteredDynamic = dynamicItems.filter(di => !staticItems.some(si => si.id === di.id));

    return [...staticItems, ...filteredDynamic];
  }, [favorites]);`;

content = content.replace(oldMemo, newMemo);

fs.writeFileSync(file, content);
console.log("Patched dock");
