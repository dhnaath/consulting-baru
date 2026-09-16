import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('bizcoach_menu_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('bizcoach_menu_favorites', JSON.stringify(favorites));
    window.dispatchEvent(new Event('favorites_updated'));
  }, [favorites]);

  useEffect(() => {
    const handleSync = () => {
      try {
        const saved = localStorage.getItem('bizcoach_menu_favorites');
        if (saved) {
          const parsed = JSON.parse(saved);
          setFavorites((prev) => {
            if (JSON.stringify(prev) === saved) {
              return prev;
            }
            return parsed;
          });
        }
      } catch {}
    };
    window.addEventListener('favorites_updated', handleSync);
    // Also sync across tabs
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('favorites_updated', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  const toggleFavorite = (path: string) => {
    setFavorites((prev) => {
      if (prev.includes(path)) {
        return prev.filter((p) => p !== path);
      }
      if (prev.length >= 10) {
        alert('Maksimal 10 menu favorit diperbolehkan.');
        return prev;
      }
      return [...prev, path];
    });
  };

  return { favorites, toggleFavorite };
}
