import sys
html = open('design-development/React.js AI Code Generator _ TailAdmin - React.js Admin Dashboard Template.html', 'r', encoding='utf-8').read()
start_marker = 'class="relative h-[calc(100vh-134px)] xl:h-[calc(100vh-76px)] px-4 xl:flex xl:px-0"'
start = html.find(start_marker)
if start != -1:
    start = html.rfind('<div', 0, start)
    content = html[start:start+50000]
    with open('code_generator_clean.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Saved to code_generator_clean.html')
else:
    print('Not found')
