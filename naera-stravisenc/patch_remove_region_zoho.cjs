const fs = require('fs');
const file = 'src/wira/components/ZohoSoloLayout.tsx';
if (fs.existsSync(file)) {
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

    fs.writeFileSync(file, content);
    console.log("Patched zoho layout");
}
