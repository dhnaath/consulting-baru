const fs = require('fs');
const file = 'src/components/app-shell.tsx';
let content = fs.readFileSync(file, 'utf8');

const startIdx = content.indexOf('{/* Menu Informasi Versi Aplikasi */}');
const endIdx = content.indexOf('</aside>', startIdx);

if (startIdx !== -1 && endIdx !== -1) {
  content = content.substring(0, startIdx) + 
`            </div>
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
      ` + content.substring(endIdx);
  fs.writeFileSync(file, content);
  console.log("Patched successfully");
} else {
  console.log("Could not find boundaries");
}
