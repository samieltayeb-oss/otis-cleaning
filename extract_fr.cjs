const puppeteer = require('puppeteer');
const fs = require('fs');

async function extractFrench() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  // Go to the original index.html
  // But wait, the local server is running. I can just load the file directly!
  // No, loading via localhost is safer.
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  
  // Click the lang button
  // Wait, I might have messed up index.html with my previous Python script!
  // Let me restore index.html from git first? 
  // No, I didn't change the JS in index.html, I only added the <a> tag.
  
  // Let's click the original button
  await page.evaluate(() => {
    // If toggleLang exists, call it
    if (typeof toggleLang === 'function') {
      toggleLang();
    } else {
      const btn = document.getElementById('lang-btn');
      if (btn) btn.click();
    }
  });
  
  // Wait a moment for DOM updates
  await new Promise(r => setTimeout(r, 1000));
  
  // Now modify the DOM to decouple the language switcher
  await page.evaluate(() => {
    // Remove the injected <a> tag I mistakenly added
    document.querySelectorAll('.lang-switcher').forEach(el => el.remove());
    
    // Modify the lang-btn to be a simple link to English
    const btn = document.getElementById('lang-btn');
    if (btn) {
      const a = document.createElement('a');
      a.href = '/';
      a.id = 'lang-btn';
      a.className = btn.className;
      a.style.cssText = 'text-decoration:none;display:flex;align-items:center;justify-content:center;';
      a.textContent = 'EN';
      btn.replaceWith(a);
    }
    
    // Also modify the mobile lang button if it exists
    const mobBtn = document.getElementById('mob-lang-btn');
    if (mobBtn) {
      const a = document.createElement('a');
      a.href = '/';
      a.id = 'mob-lang-btn';
      a.className = mobBtn.className;
      a.textContent = 'Switch to English';
      mobBtn.replaceWith(a);
    }
    
    // Update HTML lang
    document.documentElement.lang = 'fr-CA';
    
    // Fix image paths: 'imgs/' -> '/imgs/'
    document.querySelectorAll('img').forEach(img => {
      let src = img.getAttribute('src');
      if (src && src.startsWith('imgs/')) {
        img.setAttribute('src', '/' + src);
      }
    });
  });
  
  let content = await page.content();
  
  fs.writeFileSync('fr/index.html', content, 'utf-8');
  console.log("Extracted French DOM to fr/index.html");
  
  // Now let's fix English index.html as well
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    document.querySelectorAll('.lang-switcher').forEach(el => el.remove());
    
    const btn = document.getElementById('lang-btn');
    if (btn) {
      const a = document.createElement('a');
      a.href = '/fr/';
      a.id = 'lang-btn';
      a.className = btn.className;
      a.style.cssText = 'text-decoration:none;display:flex;align-items:center;justify-content:center;';
      a.textContent = 'FR';
      btn.replaceWith(a);
    }
    
    const mobBtn = document.getElementById('mob-lang-btn');
    if (mobBtn) {
      const a = document.createElement('a');
      a.href = '/fr/';
      a.id = 'mob-lang-btn';
      a.className = mobBtn.className;
      a.textContent = 'Passer en Français';
      mobBtn.replaceWith(a);
    }
    
    document.documentElement.lang = 'en-CA';
    
    document.querySelectorAll('img').forEach(img => {
      let src = img.getAttribute('src');
      if (src && src.startsWith('imgs/')) {
        img.setAttribute('src', '/' + src);
      }
    });
  });
  
  let enContent = await page.content();
  fs.writeFileSync('index.html', enContent, 'utf-8');
  console.log("Fixed English DOM in index.html");

  await browser.close();
}

extractFrench().catch(console.error);
