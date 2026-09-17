const fs = require('fs');
const nav = fs.readFileSync('src/config/nav.ts', 'utf-8');
const files = fs.readdirSync('src/routes/').filter(f => f.endsWith('.tsx') && !f.startsWith('_') && !f.startsWith('index') && f !== 'README.md');

const navRoutes = [];
const regex = /to:\s*["']([^"']+)["']/g;
let match;
while ((match = regex.exec(nav)) !== null) {
  navRoutes.push(match[1]);
}

files.forEach(f => {
  let routePath = '/' + f.replace('.tsx', '').replace(/\./g, '/');
  // special check for index routes
  if (routePath.endsWith('/index')) routePath = routePath.replace('/index', '');
  
  if (!navRoutes.includes(routePath)) {
    console.log("Not in nav.ts:", f, "(Expected route:", routePath, ")");
  }
});
