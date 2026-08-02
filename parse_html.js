const fs = require('fs');
const html = fs.readFileSync('design-development/React.js AI Dashboard _ TailAdmin - React.js Admin Dashboard Template.html', 'utf-8');
const headings = html.match(/<h[34][^>]*>(.*?)<\/h[34]>/gi);
console.log('Headings:', headings);
