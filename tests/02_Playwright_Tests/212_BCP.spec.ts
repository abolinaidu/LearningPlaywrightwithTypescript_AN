//when we want to use only playwright

import {chromium,Browser,BrowserContext,Page} from 'playwright';

async function run(){

    //level 1 :launch the browser
let browser:Browser =await chromium.launch({headless:false});
console.log("Browser Launched");

//level 2 : context 

let context:BrowserContext = await browser.newContext();
console.log("Browser Context Created");

//level 3 : page - a tab inside the context

let page: Page = await context.newPage();
console.log("Page Created");

//navigate to the url
await page.goto('https://app.vwo.com/');
console.log("URL Navigated",await page.title());

//cleanup 
await page.close();
await context.close();
await browser.close();

}
run();

//Output 
//Browser Launched
//Browser Context Created
//Page Created
//URL Navigated VWO - A/B Testing, Split URL Testing, Multivariate Testing, Personalization & More