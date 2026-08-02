import sys
html = open('design-development/React.js AI Code Generator _ TailAdmin - React.js Admin Dashboard Template.html', 'r', encoding='utf-8').read()
start = html.find('<div class="flex-1 transition-all duration-300 ease-in-out xl:ml-[290px]"')
end = html.rfind('<!-- ===== Main Content End ===== -->')
if start != -1 and end != -1:
    with open('code_generator_clean.html', 'w', encoding='utf-8') as f:
        f.write(html[start:end])
    print('Saved')
else:
    print('Not found')
