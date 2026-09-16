const fs = require('fs');
const file = 'src/components/app-shell.tsx';
let content = fs.readFileSync(file, 'utf8');

const searchBtn = `              <button
                type="button"
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg shrink-0 flex items-center justify-center transition-colors"
                title="Pencarian"
                aria-label="Search"
              >
                <Search className="size-5 shrink-0" />
              </button>`;
              
content = content.replace(searchBtn, '');

fs.writeFileSync(file, content);
console.log("Removed Search button");
