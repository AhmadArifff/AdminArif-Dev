import re

html_path = 'design-development/React.js Marketing Dashboard _ TailAdmin - React.js Admin Dashboard Template.html'
try:
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Extract MarketingMetrics
    match = re.search(r'<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">.*?<div class="col-span-12 space-y-6 xl:col-span-8">', html, re.DOTALL)
    if match:
        with open('marketing_metrics_raw.txt', 'w', encoding='utf-8') as f:
            f.write(match.group(0))
            
    # Extract Traffic Stats
    match2 = re.search(r'<h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Traffic Stats</h3>.*?<h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Top Traffic Source</h3>', html, re.DOTALL)
    if match2:
        with open('traffic_stats_raw.txt', 'w', encoding='utf-8') as f:
            f.write(match2.group(0))
            
    # Extract Top Traffic Source
    match3 = re.search(r'<h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Top Traffic Source</h3>.*?</main>', html, re.DOTALL)
    if match3:
        with open('top_traffic_source_raw.txt', 'w', encoding='utf-8') as f:
            f.write(match3.group(0))

except Exception as e:
    print(e)
