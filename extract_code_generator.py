import json, re

html = open(r'd:\MATA KULIAH ONLINE\Project\AdminArif-Dev\design-development\React.js AI Code Generator _ TailAdmin - React.js Admin Dashboard Template.html', 'r', encoding='utf-8').read()

start1 = html.find('<div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">')
if start1 != -1:
    content = html[start1:start1+150000]
    # find closing by searching for <!-- ===== Main Content End ===== -->
    end1 = content.find('<!-- ===== Main Content End ===== -->')
    if end1 != -1:
        content = content[:end1]
    
    with open('code_generator_clean.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Extracted to code_generator_clean.html")
else:
    print("Could not find main content div")
