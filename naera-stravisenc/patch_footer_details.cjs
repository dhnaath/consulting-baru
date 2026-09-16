const fs = require('fs');
const file = 'src/components/app-shell.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `        {/* Footer Informasi Versi Ringkas di Bawah Sidebar Kanan */}
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
        </div>`,
  `        {/* Footer Informasi Versi Ringkas di Bawah Sidebar Kanan */}
        <div className="p-4 mt-auto shrink-0">
          <div className="w-full rounded-xl border border-border bg-muted/40 p-3 flex flex-col gap-2.5">
            <div className="flex items-center justify-between pb-1.5 border-b border-border/60">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                <span className="font-semibold text-foreground text-xs">Client OS</span>
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
        </div>`
);

fs.writeFileSync(file, content);
console.log("Patched successfully");
