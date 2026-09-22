const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    try {
        await page.goto('https://otis-cleaning.vercel.app/services/office-cleaning', { waitUntil: 'networkidle2' });
        await page.screenshot({ path: 'audit/office_cleaning_live.png' });
        console.log("Screenshot saved: audit/office_cleaning_live.png");
    } catch (e) {
        console.error("Failed to load page:", e);
    }

    try {
        await page.goto('https://otis-cleaning.vercel.app/sectors/clinic-cleaning', { waitUntil: 'networkidle2' });
        await page.screenshot({ path: 'audit/clinic_cleaning_live.png' });
        console.log("Screenshot saved: audit/clinic_cleaning_live.png");
    } catch (e) {
        console.error("Failed to load page:", e);
    }

    await browser.close();
})();
