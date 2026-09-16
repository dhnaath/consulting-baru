import * as React from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Folder,
  FolderOpen,
  Plus,
  ChevronDown,
  ChevronRight,
  FileText,
  ExternalLink,
  MoreVertical,
  Trash2,
  Edit2,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  useCustomNav,
  CustomCategory,
  CustomMenuItem,
} from "@/hooks/useCustomNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface CustomSidebarSectionProps {
  onItemClick?: () => void;
}

export function CustomSidebarSection({ onItemClick }: CustomSidebarSectionProps) {
  const {
    categories,
    addCategory,
    renameCategory,
    deleteCategory,
    toggleCollapse,
    addMenuItem,
    deleteMenuItem,
  } = useCustomNav();

  const currentPath = useRouterState({
    select: (s) => s.location.pathname + (s.location.searchStr || ""),
  });

  // Dialog States
  const [isMainCollapsed, setIsMainCollapsed] = React.useState(false);
  const [isFolderDialogOpen, setIsFolderDialogOpen] = React.useState(false);
  const [folderNameInput, setFolderNameInput] = React.useState("");
  const [editingCategoryId, setEditingCategoryId] = React.useState<string | null>(null);

  const [isMenuDialogOpen, setIsMenuDialogOpen] = React.useState(false);
  const [targetCategoryId, setTargetCategoryId] = React.useState<string>("");
  const [menuLabelInput, setMenuLabelInput] = React.useState("");
  const [menuTypeInput, setMenuTypeInput] = React.useState<"workspace" | "link" | "external">("workspace");
  const [menuTargetInput, setMenuTargetInput] = React.useState("");
  const [menuDescInput, setMenuDescInput] = React.useState("");

  const handleOpenAddFolder = () => {
    setEditingCategoryId(null);
    setFolderNameInput("");
    setIsFolderDialogOpen(true);
  };

  const handleOpenEditFolder = (cat: CustomCategory) => {
    setEditingCategoryId(cat.id);
    setFolderNameInput(cat.title);
    setIsFolderDialogOpen(true);
  };

  const handleSaveCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!folderNameInput.trim()) return;

    if (editingCategoryId) {
      renameCategory(editingCategoryId, folderNameInput.trim());
    } else {
      addCategory(folderNameInput.trim());
    }

    setIsFolderDialogOpen(false);
    setFolderNameInput("");
    setEditingCategoryId(null);
  };

  const handleOpenAddMenu = (categoryId?: string) => {
    const defaultCat = categoryId || categories[0]?.id || "";
    setTargetCategoryId(defaultCat);
    setMenuLabelInput("");
    setMenuTypeInput("workspace");
    setMenuTargetInput("");
    setMenuDescInput("");
    setIsMenuDialogOpen(true);
  };

  const handleSaveMenu = (e: React.FormEvent) => {
    e.preventDefault();
    if (!menuLabelInput.trim() || !targetCategoryId) return;

    addMenuItem(targetCategoryId, {
      label: menuLabelInput.trim(),
      type: menuTypeInput,
      target: menuTargetInput.trim() || undefined,
      description: menuDescInput.trim() || undefined,
    });

    setIsMenuDialogOpen(false);
  };

  return (
    <div className="border-t border-border pt-5 mt-4">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-3 px-1 group cursor-pointer" onClick={() => setIsMainCollapsed(!isMainCollapsed)}>
        <div className="flex items-center gap-1.5 flex-1 select-none">
          {isMainCollapsed ? (
            <ChevronRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          ) : (
            <ChevronDown className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          )}
          <Layers className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
          <h4 className="text-lg font-bold capitalize text-muted-foreground group-hover:text-foreground transition-colors">
            Folder & Menu Kustom
          </h4>
        </div>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleOpenAddFolder(); }}
          className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors flex items-center gap-1 text-[11px] font-medium cursor-pointer"
          title="Tambah Folder / Kategori Baru"
        >
          <Plus className="size-3.5" />
          <span className="hidden sm:inline">Folder</span>
        </button>
      </div>

      {/* Categories List */}
      {!isMainCollapsed && (
      <>
        <div className="flex flex-col gap-0.5">
          {categories.length === 0 ? (
          <div className="text-center py-4 px-2 border border-dashed border-border rounded-xl bg-muted/20">
            <p className="text-xs text-muted-foreground mb-2">
              Belum ada folder kustom.
            </p>
            <button
              type="button"
              onClick={handleOpenAddFolder}
              className="text-xs font-semibold text-primary hover:underline flex items-center justify-center gap-1 mx-auto"
            >
              <Plus className="size-3.5" /> Buat Folder Pertama
            </button>
          </div>
        ) : (
          categories.map((cat) => {
            const isCollapsed = !!cat.isCollapsed;

            return (
              <div key={cat.id} className="relative flex flex-col group/cat">
                {/* Folder Row */}
                <div className="flex items-center justify-between py-1 px-1.5 rounded-md hover:bg-muted/60 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleCollapse(cat.id)}
                    className="flex items-center gap-1.5 flex-1 min-w-0 text-left cursor-pointer"
                  >
                    <span className="text-muted-foreground/80 hover:text-foreground">
                      {isCollapsed ? (
                        <ChevronRight className="size-3.5 shrink-0" />
                      ) : (
                        <ChevronDown className="size-3.5 shrink-0" />
                      )}
                    </span>
                    {isCollapsed ? (
                      <Folder className="size-3.5 text-muted-foreground shrink-0" />
                    ) : (
                      <FolderOpen className="size-3.5 text-primary shrink-0" />
                    )}
                    <span className="text-xs font-semibold text-foreground/90 truncate">
                      {cat.title}
                    </span>
                    <span className="text-[10px] text-muted-foreground ml-0.5">
                      ({cat.items.length})
                    </span>
                  </button>

                  {/* Actions for this category */}
                  <div className="flex items-center gap-0.5 opacity-80 group-hover/cat:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => handleOpenAddMenu(cat.id)}
                      className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                      title={`Tambah menu ke ${cat.title}`}
                    >
                      <Plus className="size-3" />
                    </button>

                    <DropdownMenu>
                      <DropdownMenuTrigger className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-accent transition-colors outline-none cursor-pointer">
                        <MoreVertical className="size-3" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-36 p-1">
                        <DropdownMenuItem
                          onClick={() => handleOpenEditFolder(cat)}
                          className="text-xs cursor-pointer flex items-center gap-2"
                        >
                          <Edit2 className="size-3" />
                          <span>Ubah Nama</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => deleteCategory(cat.id)}
                          className="text-xs text-rose-500 hover:text-rose-600 cursor-pointer flex items-center gap-2"
                        >
                          <Trash2 className="size-3" />
                          <span>Hapus Folder</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                {/* Sub Menu Items */}
                {!isCollapsed && (
                  <div className="relative flex flex-col gap-0.5 pl-5 pr-1 py-1 ml-3.5 mt-0.5 before:absolute before:left-[7px] before:top-0 before:bottom-3.5 before:w-px before:bg-border/80">
                    {cat.items.length === 0 ? (
                      <button
                        type="button"
                        onClick={() => handleOpenAddMenu(cat.id)}
                        className="relative text-left text-[11px] text-muted-foreground/70 hover:text-primary py-1 italic flex items-center gap-1"
                      >
                        <Plus className="size-3" /> Tambah menu baru...
                      </button>
                    ) : (
                      cat.items.map((item) => {
                        const isSelected =
                          currentPath === item.path ||
                          (currentPath.includes("id=") &&
                            item.id &&
                            currentPath.includes(item.id));

                        return (
                          <div
                            key={item.id}
                            className={`group/item relative flex items-center justify-between rounded-md px-2 py-1.5 transition-colors before:absolute before:-left-[13px] before:-top-1 before:w-[14px] before:h-[18px] before:border-l before:border-b before:border-border/80 before:rounded-bl-[16px] ${
                              isSelected
                                ? "bg-accent/80 text-foreground font-semibold"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                            }`}
                          >
                            <Link
                              to={item.path}
                              onClick={onItemClick}
                              className="flex items-center gap-2 flex-1 min-w-0"
                            >
                              {item.type === "external" ? (
                                <ExternalLink className="size-3 shrink-0 opacity-70" />
                              ) : (
                                <FileText className="size-3 shrink-0 opacity-70" />
                              )}
                              <span className="truncate text-xs">{item.label}</span>
                            </Link>

                            <button
                              type="button"
                              onClick={() => deleteMenuItem(cat.id, item.id)}
                              className="opacity-0 group-hover/item:opacity-100 p-0.5 rounded text-muted-foreground hover:text-rose-500 transition-opacity ml-1"
                              title="Hapus Menu"
                            >
                              <Trash2 className="size-3" />
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
      {/* Button to quickly add menu if categories exist */}
      {categories.length > 0 && (
        <button
          type="button"
          onClick={() => handleOpenAddMenu()}
          className="mt-3.5 w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-dashed border-border/80 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary hover:bg-muted/30 transition-all cursor-pointer"
        >
          <Sparkles className="size-3.5 text-primary" />
          <span>+ Tambah Menu Kustom</span>
        </button>
      )}
      </>
      )}

      {/* Dialog: Tambah / Ubah Folder */}
      <Dialog open={isFolderDialogOpen} onOpenChange={setIsFolderDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingCategoryId ? "Ubah Nama Folder" : "Tambah Folder / Kategori Baru"}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveCategory} className="space-y-4 py-2">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                Nama Folder / Kategori
              </label>
              <input
                type="text"
                required
                value={folderNameInput}
                onChange={(e) => setFolderNameInput(e.target.value)}
                placeholder="Contoh: Dokumen Klien, Riset Khusus, Inisiatif Q4"
                className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
            </div>
            <DialogFooter className="gap-2 sm:gap-0">
              <button
                type="button"
                onClick={() => setIsFolderDialogOpen(false)}
                className="px-4 py-2 text-xs font-medium rounded-lg border border-border hover:bg-muted"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary/90"
              >
                {editingCategoryId ? "Simpan Perubahan" : "Buat Folder"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Dialog: Tambah Menu Kustom */}
      <Dialog open={isMenuDialogOpen} onOpenChange={setIsMenuDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Tambah Menu Baru</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSaveMenu} className="space-y-4 py-2">
            {/* Target Folder */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                Pilih Folder / Kategori
              </label>
              <select
                value={targetCategoryId}
                onChange={(e) => setTargetCategoryId(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    📁 {c.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Menu Label */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                Nama Menu
              </label>
              <input
                type="text"
                required
                value={menuLabelInput}
                onChange={(e) => setMenuLabelInput(e.target.value)}
                placeholder="Contoh: Strategi Produk 2026, Notulensi Rapat"
                className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
            </div>

            {/* Menu Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                Tipe Menu
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setMenuTypeInput("workspace")}
                  className={`px-2.5 py-2 text-xs rounded-lg border text-center transition-all ${
                    menuTypeInput === "workspace"
                      ? "border-primary bg-primary/10 text-primary font-bold"
                      : "border-border text-muted-foreground hover:bg-muted"
                  }`}
                >
                  📄 Workspace
                </button>
                <button
                  type="button"
                  onClick={() => setMenuTypeInput("link")}
                  className={`px-2.5 py-2 text-xs rounded-lg border text-center transition-all ${
                    menuTypeInput === "link"
                      ? "border-primary bg-primary/10 text-primary font-bold"
                      : "border-border text-muted-foreground hover:bg-muted"
                  }`}
                >
                  🔗 Halaman Internal
                </button>
                <button
                  type="button"
                  onClick={() => setMenuTypeInput("external")}
                  className={`px-2.5 py-2 text-xs rounded-lg border text-center transition-all ${
                    menuTypeInput === "external"
                      ? "border-primary bg-primary/10 text-primary font-bold"
                      : "border-border text-muted-foreground hover:bg-muted"
                  }`}
                >
                  🌐 Tautan Web
                </button>
              </div>
            </div>

            {/* Conditional Target Input */}
            {menuTypeInput === "link" && (
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  Pilih Rute Halaman
                </label>
                <select
                  value={menuTargetInput}
                  onChange={(e) => setMenuTargetInput(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">-- Pilih Halaman --</option>
                  <option value="/proyek">Proyek</option>
                  <option value="/tugas">Tugas</option>
                  <option value="/kalender">Kalender</option>
                  <option value="/catatan">Catatan</option>
                  <option value="/insider">Insider</option>
                  <option value="/insight">Insight</option>
                  <option value="/outward">Outward</option>
                  <option value="/outlook">Outlook</option>
                  <option value="/finances">Keuangan</option>
                  <option value="/contacts">Kontak</option>
                  <option value="/favorit">Favorit</option>
                </select>
              </div>
            )}

            {menuTypeInput === "external" && (
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  URL Tautan
                </label>
                <input
                  type="url"
                  required
                  value={menuTargetInput}
                  onChange={(e) => setMenuTargetInput(e.target.value)}
                  placeholder="https://drive.google.com/..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            {/* Description */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                Deskripsi Singkat (Opsional)
              </label>
              <input
                type="text"
                value={menuDescInput}
                onChange={(e) => setMenuDescInput(e.target.value)}
                placeholder="Penjelasan ringkas fungsi menu ini..."
                className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <DialogFooter className="gap-2 sm:gap-0 pt-2">
              <button
                type="button"
                onClick={() => setIsMenuDialogOpen(false)}
                className="px-4 py-2 text-xs font-medium rounded-lg border border-border hover:bg-muted"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-medium text-white bg-primary rounded-lg hover:bg-primary/90"
              >
                Tambah Menu
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
