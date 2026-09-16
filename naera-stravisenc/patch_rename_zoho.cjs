const fs = require('fs');
const file = 'src/wira/components/ZohoSoloLayout.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `label="Language & Region"`,
  `label="Region"`
);
content = content.replace(
  `label="Language & Region"`,
  `label="Region"`
);
content = content.replace(
  `>Language & Region</option>`,
  `>Region</option>`
);
content = content.replace(
  `>Language & Region</h3>`,
  `>Region</h3>`
);

fs.writeFileSync(file, content);
console.log("Patched successfully");
