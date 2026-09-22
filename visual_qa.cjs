const puppeteer = require('puppeteer');
const fs = require('fs');

const URLS = {
  'home-en': 'http://localhost:3000/',
  'home-fr': 'http://localhost:3000/fr/',
  'commercial-en': 'http://localhost:3000/services/commercial-cleaning',
  'commercial-fr': 'http://localhost:3000/fr/services/entretien-commercial',
  'internal-login': 'http://localhost:3000/internal/blueprint'
};

const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844, isMobile: true }
};

async function runVisualQA() {
  if (!fs.existsSync('./audit/pilot')) {
    fs.mkdirSync('./audit/pilot', { recursive: true });
  }

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  let consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[${msg.type()}] ${msg.text()}`);
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
  });

  const results = {};

  for (const [name, url] of Object.entries(URLS)) {
    results[name] = { overflowDesktop: false, overflowMobile: false, consoleErrors: [], redirected: false };
    console.log("Navigating to", url);
    try {
      // Desktop
      await page.setViewport(VIEWPORTS.desktop);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      // wait a bit for rendering
      await new Promise(r => setTimeout(r, 2000));
      
      // Check if redirected (for internal-login)
      if (name === 'internal-login' && page.url().includes('/internal/login')) {
        results[name].redirected = true;
      }
      
      const currentErrors = [...consoleErrors];
      consoleErrors = [];
      results[name].consoleErrors = currentErrors;

      await page.screenshot({ path: `./audit/pilot/${name}-desktop.png`, fullPage: true });
      
      // Check horizontal overflow
      const overflowDesktop = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      results[name].overflowDesktop = overflowDesktop;

      // Mobile
      await page.setViewport(VIEWPORTS.mobile);
      // Wait for layout adjust
      await new Promise(r => setTimeout(r, 1000));
      
      await page.screenshot({ path: `./audit/pilot/${name}-mobile.png`, fullPage: true });
      
      const overflowMobile = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      results[name].overflowMobile = overflowMobile;
    } catch (e) {
      console.log(`Failed on ${url}:`, e.message);
      results[name].error = e.message;
    }
  }

  await browser.close();
  
  fs.writeFileSync('./audit/pilot/qa-results.json', JSON.stringify(results, null, 2));
  console.log("Visual QA completed.");
}

runVisualQA().catch(console.error);
