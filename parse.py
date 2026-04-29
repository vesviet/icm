from bs4 import BeautifulSoup

with open('/tmp/privacy-policy.html', 'r') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

main = soup.find('div', class_='elementor-widget-text-editor')
if main:
    print(main.get_text(separator='\n').strip()[:500])
