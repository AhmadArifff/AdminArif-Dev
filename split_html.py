import json, re

html = open(r'd:\MATA KULIAH ONLINE\Project\AdminArif-Dev\design-development\React.js AI Dashboard _ TailAdmin - React.js Admin Dashboard Template.html', 'r', encoding='utf-8').read()

# Remove SVG paths to keep it small for reading? 
# Actually, I'll just write it to different scratch files.

# The first metric block: <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
start1 = html.find('grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4')
if start1 != -1:
    start1 = html.rfind('<div', 0, start1)
    # find closing div by matching
    # let's just grab the next 5000 chars and we can clean it up manually
    with open('C:/Users/HP/.gemini/antigravity/brain/7b71bc86-c9bf-433e-b8d7-71815154ae34/scratch/metrics.html', 'w', encoding='utf-8') as f:
        f.write(html[start1:start1+15000])

start2 = html.find('Users &amp; Revenue Statistics')
if start2 != -1:
    start2 = html.rfind('<div class="xl:col-span-8"', 0, start2)
    with open('C:/Users/HP/.gemini/antigravity/brain/7b71bc86-c9bf-433e-b8d7-71815154ae34/scratch/users_revenue.html', 'w', encoding='utf-8') as f:
        f.write(html[start2:start2+10000])

start3 = html.find('API Token Usages')
if start3 != -1:
    start3 = html.rfind('<div class="xl:col-span-4"', 0, start3)
    with open('C:/Users/HP/.gemini/antigravity/brain/7b71bc86-c9bf-433e-b8d7-71815154ae34/scratch/api_token.html', 'w', encoding='utf-8') as f:
        f.write(html[start3:start3+10000])

start4 = html.find('User Analytics')
if start4 != -1:
    start4 = html.rfind('<div class="xl:col-span-6"', 0, start4) # Or whatever the col span is
    if start4 == -1: start4 = html.rfind('<div class="rounded-2xl', 0, start4)
    with open('C:/Users/HP/.gemini/antigravity/brain/7b71bc86-c9bf-433e-b8d7-71815154ae34/scratch/user_analytics.html', 'w', encoding='utf-8') as f:
        f.write(html[start4:start4+10000])

start5 = html.find('Projects Analytics')
if start5 != -1:
    start5 = html.rfind('<div class="rounded-2xl', 0, start5)
    with open('C:/Users/HP/.gemini/antigravity/brain/7b71bc86-c9bf-433e-b8d7-71815154ae34/scratch/projects_analytics.html', 'w', encoding='utf-8') as f:
        f.write(html[start5:start5+10000])

start6 = html.find('Recent Transactions')
if start6 != -1:
    start6 = html.rfind('<div class="rounded-2xl', 0, start6)
    with open('C:/Users/HP/.gemini/antigravity/brain/7b71bc86-c9bf-433e-b8d7-71815154ae34/scratch/recent_transactions.html', 'w', encoding='utf-8') as f:
        f.write(html[start6:start6+20000])

print("Extracted to scratch")