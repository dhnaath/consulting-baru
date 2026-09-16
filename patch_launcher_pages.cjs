const fs = require('fs');

let file = 'src/routes/index.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the useMemo block and for-loop block with the new logic
const oldLogicStart = `  // Flatten all items and remove the Launcher itself`;
const oldLogicEnd = `  // Handle scroll to update current page`;

const newLogic = `  const pages = useMemo(() => {
    return navKonsultan
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.to !== "/"),
      }))
      .filter((group) => group.items.length > 0);
  }, []);

  // Handle scroll to update current page`;

let newContent = content.slice(0, content.indexOf(oldLogicStart)) + newLogic + content.slice(content.indexOf(oldLogicEnd) + oldLogicEnd.length);

// Now update the page mapping inside JSX
const oldJsxStart = `          {pages.length > 0 ? pages.map((page, pageIdx) => (`;
const oldJsxEnd = `          )) : (`;

const newJsx = `          {pages.length > 0 ? pages.map((page, pageIdx) => (
            <div 
              key={pageIdx} 
              className="w-full h-full shrink-0 snap-center flex-none px-4 sm:px-8 md:px-12 lg:px-24 pb-12 pt-8 overflow-y-auto flex flex-col items-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-foreground/70 mb-8 tracking-tight">
                {page.title}
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-x-4 gap-y-8 place-items-start max-w-6xl mx-auto w-full">
                {page.items.map((item) => {
                  const gradient = getGradient(item.label);
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex flex-col items-center gap-2 group w-full outline-none"
                    >
                      <div 
                        className={\`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-[1.25rem] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-110 group-active:scale-95 \${gradient}\`}
                      >
                        <item.icon className="size-7 sm:size-8 opacity-90 drop-shadow-sm" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs sm:text-sm text-foreground/90 font-medium text-center line-clamp-2 leading-tight px-1 group-hover:text-foreground">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )) : (`

newContent = newContent.slice(0, newContent.indexOf(oldJsxStart)) + newJsx + newContent.slice(newContent.indexOf(oldJsxEnd) + oldJsxEnd.length);

fs.writeFileSync(file, newContent);
console.log("Patched Launcher pages logic");
