const fs = require('fs');

const html = fs.readFileSync('design-development/React.js AI Dashboard _ TailAdmin - React.js Admin Dashboard Template.html', 'utf-8');

// Find the main tag content
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
if (!mainMatch) {
  console.log('No main tag found');
  process.exit(1);
}
let mainHtml = mainMatch[1];

// Find the grid div inside main (it's the top level container for widgets)
const gridMatch = mainHtml.match(/<div class="[^"]*grid[^"]*">([\s\S]*?)<\/div>\s*<\/div>\s*$/i);
if (!gridMatch) {
  // Let's just try to split by the top-level divs inside mainHtml
  // which might be hard with regex. 
  // Let's use a simple tag balancer
}

// Simple tag balancer to extract direct children of a given container HTML
function extractDirectChildren(containerHtml) {
  const children = [];
  let depth = 0;
  let startIdx = -1;
  let inTag = false;
  let inString = false;
  let stringChar = '';
  let closing = false;
  
  for (let i = 0; i < containerHtml.length; i++) {
    const char = containerHtml[i];
    if (!inString && char === '<') {
      inTag = true;
      closing = containerHtml[i+1] === '/';
    } else if (!inString && char === '>') {
      inTag = false;
      if (closing) {
        depth--;
        if (depth === 0 && startIdx !== -1) {
          children.push(containerHtml.substring(startIdx, i + 1));
          startIdx = -1;
        }
      } else if (containerHtml[i-1] !== '/') { // not self closing
        if (depth === 0) {
          startIdx = i - containerHtml.substring(0, i).match(/<[^<]*$/)[0].length + 1;
        }
        depth++;
      }
    } else if (inTag && (char === '"' || char === "'")) {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (stringChar === char) {
        inString = false;
      }
    }
  }
  return children;
}

// In the HTML, the main structure is usually:
// <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
//   <div class="..."> (Breadcrumb?)
//   <div class="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
//      [WIDGETS]

let widgetsContainer = mainHtml;
const widgetsStart = mainHtml.indexOf('grid grid-cols-12');
if (widgetsStart > -1) {
    const fromGrid = mainHtml.substring(widgetsStart - 20);
    const children = extractDirectChildren(fromGrid.substring(fromGrid.indexOf('>')));
    
    // Save them to scratch dir
    children.forEach((child, idx) => {
        const titleMatch = child.match(/<h[234][^>]*>(.*?)<\/h[234]>/i);
        const title = titleMatch ? titleMatch[1].replace(/[^a-z0-9]/gi, '_') : 'widget_' + idx;
        fs.writeFileSync('C:/Users/HP/.gemini/antigravity/brain/7b71bc86-c9bf-433e-b8d7-71815154ae34/scratch/' + title + '.html', child, 'utf-8');
        console.log('Saved:', title);
    });
} else {
    console.log('Grid not found');
}

