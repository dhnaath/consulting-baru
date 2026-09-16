const fs = require('fs');
const file = 'src/wira/components/ZohoSoloLayout.tsx';
if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');

    content = content.replace(
    `          <ProfileMenuItem
            icon={Globe}
            label="Region"
            onClick={() => onOpenSettings("region")}
          />
          <ProfileMenuItem
            icon={Moon}
            label="Appearance"
            onClick={() => onOpenSettings("appearance")}
          />`,
    `          <ProfileMenuItem
            icon={Globe}
            label="Region"
            onClick={() => onOpenSettings("region")}
          />`
    );

    content = content.replace(
    `            <SettingsTab
              id="region"
              icon={Globe}
              label="Region"
              active={activeTab === "region"}
              onClick={() => setActiveTab("region")}
            />
            <SettingsTab
              id="appearance"
              icon={Moon}
              label="Appearance"
              active={activeTab === "appearance"}
              onClick={() => setActiveTab("appearance")}
            />`,
    `            <SettingsTab
              id="region"
              icon={Globe}
              label="Region"
              active={activeTab === "region"}
              onClick={() => setActiveTab("region")}
            />`
    );

    content = content.replace(
    `                <option value="region">Region</option>
                <option value="appearance">Appearance</option>`,
    `                <option value="region">Region</option>`
    );

    content = content.replace(
    `            {activeTab === "region" && <RegionSettings />}
            {activeTab === "appearance" && <AppearanceSettings />}`,
    `            {activeTab === "region" && <RegionSettings />}`
    );

    const appearanceComponentStart = content.indexOf('function AppearanceSettings() {');
    if (appearanceComponentStart !== -1) {
        const nextComponentStart = content.indexOf('function BillingSettings() {', appearanceComponentStart);
        if (nextComponentStart !== -1) {
            content = content.slice(0, appearanceComponentStart) + content.slice(nextComponentStart);
        }
    }


    fs.writeFileSync(file, content);
    console.log("Patched zoho-layout successfully");
}
