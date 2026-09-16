const fs = require('fs');
const file = 'src/components/app-shell.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `  const [isVersionOpen, setIsVersionOpen] = useState(false);`,
  ``
);

content = content.replace(
  `              <ThemeLangToggle />
              {/* Menu Informasi Versi Aplikasi */}
              <div className="pt-2 border-t border-border/80 w-full space-y-2">
                <button
                  type="button"
                  onClick={() => setIsVersionOpen(!isVersionOpen)}
                  className={\`flex h-9 w-full items-center justify-between px-3 rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer \${
                    isVersionOpen ? "!bg-accent font-medium border-primary/30" : ""
                  }\`}
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
      </aside>`,
  `              <ThemeLangToggle />
            </div>
          </nav>
        </div>
        
        {/* Footer Informasi Versi Ringkas di Bawah Sidebar Kanan */}
        <div className="p-4 mt-auto shrink-0">
          <div className="w-full rounded-xl border border-border bg-muted/30 p-3 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[11px] text-foreground">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                <span className="font-semibold">Client OS</span>
              </div>
              <span className="font-mono px-1.5 py-0.5 rounded bg-background border border-border text-[10px] font-bold text-muted-foreground">
                v2.4.2
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground font-medium">
              Build 2026.09 • Sistem Terbarui
            </p>
          </div>
        </div>
      </aside>`
);

fs.writeFileSync(file, content);
console.log("Patched successfully");
