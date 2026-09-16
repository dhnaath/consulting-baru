const fs = require('fs');
const file = 'src/components/wira-settings.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `        <div className="space-y-1.5">
          <label className="text-sm font-medium text-card-foreground">Application Language</label>
          <select className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-card transition-all appearance-none">
            <option>English (United States)</option>
            <option>English (United Kingdom)</option>
            <option>Bahasa Indonesia</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>`,
  ``
);

content = content.replace(
  `        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-card-foreground">Currency</label>
            <select className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-card transition-all appearance-none">
              <option>USD ($)</option>
              <option>IDR (Rp)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-card-foreground">Time Format</label>
            <select className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-card transition-all appearance-none">
              <option>12-hour (1:00 PM)</option>
              <option>24-hour (13:00)</option>
            </select>
          </div>
        </div>`,
  ``
);

fs.writeFileSync(file, content);
console.log("Patched successfully");
