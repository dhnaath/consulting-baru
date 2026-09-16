const fs = require('fs');
const file = 'src/components/wira-settings.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `        <div className="space-y-1.5">
          <label className="text-sm font-medium text-card-foreground">Language</label>
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

fs.writeFileSync(file, content);
console.log("Patched successfully");
