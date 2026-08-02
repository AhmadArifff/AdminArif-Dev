const fs = require('fs');
const html = fs.readFileSync('design-development/React.js AI Text Generator _ TailAdmin - React.js Admin Dashboard Template.html', 'utf-8');
const match = html.match(/<div class="flex-1 transition-all duration-300 ease-in-out xl:ml-\[290px\] "[\s\S]*/i);
if (match) {
  let content = match[0];
  content = content.replace(/<\/body>[\s\S]*/i, '');
  fs.writeFileSync('text_generator_content.html', content);
  console.log('Saved to text_generator_content.html');
} else {
  console.log('No match found');
}
