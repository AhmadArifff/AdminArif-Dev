import sys
html = open('code_generator_clean.html', 'r', encoding='utf-8').read()
start = html.find('<div class="relative mx-auto items-center max-w-[720px]">')
end = html.find('<div class="fixed bottom-5 lg:bottom-10 left-1/2')
if start != -1 and end != -1:
    with open('message_list.html', 'w', encoding='utf-8') as f:
        f.write(html[start:end])
    print('Saved')
else:
    print('Not found')
