const fs = require('fs');
const file = 'src/components/wira-settings.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `          <ProfileMenuItem
            icon={Globe}
            label="Region"
            onClick={() => onOpenSettings("region")}
          />`,
  ``
);

content = content.replace(
  `            <SettingsTab
              id="region"
              icon={Globe}
              label="Region"
              active={activeTab === "region"}
              onClick={() => setActiveTab("region")}
            />`,
  ``
);

content = content.replace(
  `                <option value="region">Region</option>`,
  ``
);

content = content.replace(
  `            {activeTab === "region" && <RegionSettings />}`,
  ``
);

const regionComponentStart = content.indexOf('function RegionSettings() {');
if (regionComponentStart !== -1) {
    const nextComponentStart = content.indexOf('function GeneralSettings() {', regionComponentStart);
    if (nextComponentStart !== -1) {
        content = content.slice(0, regionComponentStart) + content.slice(nextComponentStart);
    }
}

// Ensure activeTab default is not 'region' if it was.
// The default active tab is likely passed as a prop, but if there's a fallback, let's check.
// Wait, looking at wira-settings.tsx line ~100: `const [activeTab, setActiveTab] = useState(defaultTab || "general");`
// This is fine.

fs.writeFileSync(file, content);
console.log("Patched wira-settings");
