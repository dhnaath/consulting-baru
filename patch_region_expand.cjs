const fs = require('fs');
const file = 'src/components/app-shell.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `  const [isSettingsOpen, setIsSettingsOpen] = useState(false);`,
  `  const [isSettingsOpen, setIsSettingsOpen] = useState(false);\n  const [isRegionOpen, setIsRegionOpen] = useState(false);`
);

content = content.replace(
  `import {
  Menu,`,
  `import {
  Menu,
  Globe,
  ChevronDown,`
);


const embeddedRegion = `              {/* Embedded Region Settings */}
              <div className="pt-4 border-t border-border/80 w-full mt-2">
                <h4 className="text-xs font-semibold text-muted-foreground mb-3 tracking-wider">Region</h4>
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Country / Region</label>
                    <select className="w-full px-2.5 py-1.5 bg-muted/30 border border-border rounded-md outline-none focus:ring-1 focus:ring-primary text-xs appearance-none">
                      <option>United States</option>
                      <option>Indonesia</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>Singapore</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">City</label>
                    <input
                      type="text"
                      placeholder="e.g. Jakarta"
                      className="w-full px-2.5 py-1.5 bg-muted/30 border border-border rounded-md outline-none focus:ring-1 focus:ring-primary text-xs"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Timezone</label>
                    <select className="w-full px-2.5 py-1.5 bg-muted/30 border border-border rounded-md outline-none focus:ring-1 focus:ring-primary text-xs appearance-none">
                      <option>(UTC-08:00) Pacific Time</option>
                      <option>(UTC+07:00) WIB</option>
                      <option>(UTC+08:00) WITA</option>
                      <option>(UTC+09:00) WIT</option>
                      <option>(UTC+00:00) UTC</option>
                    </select>
                  </div>
                </div>
              </div>`;

const expandableRegion = `              {/* Expandable Region Settings */}
              <div className="pt-2 border-t border-border/80 w-full">
                <button
                  type="button"
                  onClick={() => setIsRegionOpen(!isRegionOpen)}
                  className={\`flex h-9 w-full items-center justify-between px-3 rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer \${
                    isRegionOpen ? "!bg-accent font-medium border-primary/30" : ""
                  }\`}
                  title="Region Settings"
                >
                  <span className="flex items-center gap-2">
                    <Globe className="size-4 shrink-0" />
                    <span className="text-sm">Region</span>
                  </span>
                  <ChevronDown className={\`size-4 transition-transform duration-200 \${isRegionOpen ? "rotate-180" : ""}\`} />
                </button>
                
                {isRegionOpen && (
                  <div className="w-full rounded-xl border border-border bg-muted/20 p-3 mt-2 animate-in fade-in zoom-in-95 duration-150">
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground">Country / Region</label>
                        <select className="w-full px-2.5 py-1.5 bg-background border border-border rounded-md outline-none focus:ring-1 focus:ring-primary text-xs appearance-none">
                          <option>United States</option>
                          <option>Indonesia</option>
                          <option>United Kingdom</option>
                          <option>Australia</option>
                          <option>Singapore</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground">City</label>
                        <input
                          type="text"
                          placeholder="e.g. Jakarta"
                          className="w-full px-2.5 py-1.5 bg-background border border-border rounded-md outline-none focus:ring-1 focus:ring-primary text-xs"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-foreground">Timezone</label>
                        <select className="w-full px-2.5 py-1.5 bg-background border border-border rounded-md outline-none focus:ring-1 focus:ring-primary text-xs appearance-none">
                          <option>(UTC-08:00) Pacific Time</option>
                          <option>(UTC+07:00) WIB</option>
                          <option>(UTC+08:00) WITA</option>
                          <option>(UTC+09:00) WIT</option>
                          <option>(UTC+00:00) UTC</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>`;

content = content.replace(embeddedRegion, expandableRegion);

fs.writeFileSync(file, content);
console.log("Patched region expandable");
