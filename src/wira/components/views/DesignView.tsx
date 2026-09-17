import React from "react";
import { PenTool, Figma, ExternalLink, Palette, Type, FolderOpen, LayoutTemplate, Layers } from "lucide-react";

export function DesignView() {
  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto w-full h-full flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Design Hub</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Pusat manajemen proyek desain, referensi, dan aset UI/UX.
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm self-start sm:self-auto flex items-center gap-2">
          <PenTool size={16} />
          <span>Aset Baru</span>
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Kolom Kiri: Bookmark & Proyek */}
        <div className="lg:col-span-2 space-y-8">
          
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <LayoutTemplate className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Referensi & Template</h2>
              </div>
              <span className="text-xs text-muted-foreground">Koleksi Links</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Figma Link Card - Diminta User */}
              <a 
                href="https://www.figma.com/templates/dashboard-designs/" 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 transition-transform group-hover:scale-110">
                    <Figma size={20} />
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">Figma Dashboard Templates</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Kumpulan template desain dasbor UI/UX dari komunitas Figma untuk referensi struktur layout.
                </p>
              </a>

              {/* Mock Link 1 */}
              <a 
                href="#"
                className="group flex flex-col p-5 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500 transition-transform group-hover:scale-110">
                    <Layers size={20} />
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">Dribbble UI Trends</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  Inspirasi gaya desain terkini, bento grid, dan elemen minimalis dari para kreator.
                </p>
              </a>
            </div>

            {/* Figma Embedded Preview */}
            <div className="mt-6 w-full rounded-2xl overflow-hidden border border-border bg-card shadow-sm h-[450px]">
              <iframe 
                style={{ border: "none" }} 
                width="100%" 
                height="100%" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ftemplates%2Fdashboard-designs%2F" 
                allowFullScreen
                title="Figma Dashboard Designs Preview"
              ></iframe>
            </div>
          </section>

          {/* Recent Files */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">Proyek Desain Terbaru</h2>
              </div>
              <button className="text-sm text-primary hover:underline">Lihat Semua</button>
            </div>
            
            <div className="space-y-3">
               {[
                 { title: "Redesign Aplikasi Web v2", date: "Hari ini, 10:45", type: "Figma", color: "bg-orange-500/10 text-orange-600" },
                 { title: "Aset Banner Sosial Media", date: "Kemarin, 14:20", type: "Illustrator", color: "bg-amber-500/10 text-amber-600" },
                 { title: "Mockup Portal Klien", date: "12 Sep 2026", type: "Penpot", color: "bg-green-500/10 text-green-600" },
                 { title: "Brand Identity Guidelines", date: "10 Sep 2026", type: "PDF", color: "bg-red-500/10 text-red-600" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border bg-card/50 hover:bg-accent/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.color}`}>
                        <PenTool size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium group-hover:text-primary transition-colors">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full border border-border/50">
                      {item.type}
                    </span>
                 </div>
               ))}
            </div>
          </section>
        </div>

        {/* Kolom Kanan: Design System & Assets */}
        <div className="space-y-6">
          <section className="p-6 rounded-3xl border border-border bg-card">
            <div className="flex items-center gap-2 mb-5">
              <Palette className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Color Palette</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Brand / Primary</p>
                <div className="flex h-10 rounded-lg overflow-hidden border border-border/50">
                  <div className="flex-1 bg-blue-600 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                  <div className="flex-1 bg-blue-500 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                  <div className="flex-1 bg-blue-400 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                  <div className="flex-1 bg-blue-200 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Accent / Secondary</p>
                <div className="flex h-10 rounded-lg overflow-hidden border border-border/50">
                  <div className="flex-1 bg-purple-600 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                  <div className="flex-1 bg-indigo-500 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                  <div className="flex-1 bg-teal-400 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                  <div className="flex-1 bg-emerald-200 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Neutral / Surface</p>
                <div className="flex h-10 rounded-lg overflow-hidden border border-border/50">
                  <div className="flex-1 bg-slate-900 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                  <div className="flex-1 bg-slate-700 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                  <div className="flex-1 bg-slate-300 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                  <div className="flex-1 bg-slate-100 hover:opacity-80 transition-opacity cursor-crosshair"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-6 rounded-3xl border border-border bg-card">
            <div className="flex items-center gap-2 mb-5">
              <Type className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Typography</h2>
            </div>
            <div className="space-y-5">
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Heading</p>
                  <p className="text-[10px] text-muted-foreground">Plus Jakarta Sans</p>
                </div>
                <h1 className="text-3xl font-bold text-foreground leading-tight tracking-tight">The quick brown fox</h1>
              </div>
              <div className="w-full h-px bg-border/60"></div>
              <div>
                <div className="flex items-baseline justify-between mb-1">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Body</p>
                  <p className="text-[10px] text-muted-foreground">Inter</p>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Jumps over the lazy dog. Sphynx of black quartz, judge my vow. The five boxing wizards jump quickly.
                </p>
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
