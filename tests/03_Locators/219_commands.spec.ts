    import  { test, expect } from '@playwright/test';

    test('goto command with waitUntil options', async ({ page }) => {
          
        //Commit 1 : default waitUntil option
        await page.goto("https://app.vwo.com/", {waitUntil: 'commit'});
        console.log("Commit:server responded");
        
        // Load - default -wait for everything to load  (images,css,scripts)
            await page.goto("https://app.vwo.com/#login", { waitUntil: 'load' });
            console.log("Load: page loaded");

        //Networkidle - wait for network to be idle (no network request for 500ms) 
        //slowest wait for all network activity to stop 
        await page.goto("https://app.vwo.com/", { waitUntil: 'networkidle' });
        console.log("Networkidle: network is idle");

        //Wait for the HTML to be parsed.
        //Domcontentloaded - wait for DOMContentLoaded event (HTML parsed and DOM tree is built)
        await page.goto("https://app.vwo.com/", { waitUntil: 'domcontentloaded' });
        console.log("Domcontentloaded: DOM content loaded");

    });