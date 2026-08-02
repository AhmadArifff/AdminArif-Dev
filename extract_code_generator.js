const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('design-development/React.js AI Code Generator _ TailAdmin - React.js Admin Dashboard Template.html', 'utf8');
const $ = cheerio.load(html);
// Find the main content div that we extracted previously
const mainContent = $('div.mx-auto.max-w-screen-2xl.p-4\\.md\\:p-6\\.2xl\\:p-10').html();
fs.writeFileSync('code_generator_clean.html', mainContent || 'NOT FOUND');
console.log('Extracted to code_generator_clean.html');
