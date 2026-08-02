const fs = require('fs');
const html = fs.readFileSync('text_generator_content.html', 'utf-8');
const match = html.match(/<div class=\"relative h-\[calc\(100vh-134px\)\][^>]*>[\s\S]*/i);
if (match) {
  let content = match[0];
  content = content.replace(/<\/body>[\s\S]*/i, '');
  content = content.replace(/<script [\s\S]*<\/script>/ig, '');
  content = content.replace(/<scribe-shadow [\s\S]*/ig, '');
  
  // also close any open tags since we just sliced from the div
  // wait, match[0] runs to the end of the file, it's just the bottom of the document
  // we will format it next
  fs.writeFileSync('text_generator_clean.html', content);
  console.log('Saved to text_generator_clean.html');
} else {
  console.log('Not found');
}
