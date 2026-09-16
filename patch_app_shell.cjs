const fs = require('fs');
const file = 'src/components/app-shell.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `              <ThemeLangToggle />
              
              {/* Embedded Region Settings */}
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

content = content.replace(
  `              <ThemeLangToggle />`,
  replacement
);

fs.writeFileSync(file, content);
console.log("Patched app-shell");
