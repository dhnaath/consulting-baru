const fs = require('fs');

function removePref(file) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(
            `          <ProfileMenuItem
            icon={Settings}
            label="Preferences"
            onClick={() => onOpenSettings("general")}
          />`,
            ``
        );
        fs.writeFileSync(file, content);
        console.log("Patched " + file);
    }
}

removePref('src/components/wira-settings.tsx');
removePref('src/wira/components/ZohoSoloLayout.tsx');

