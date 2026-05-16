import {chromium} from "playwright";

async function multiuserTest(){   
let browser =await chromium.launch({headless: false});
console.log("Browser Launched");


//create admin context

let adminContext = await browser.newContext();
console.log("Admin Context Created");

let adminPage = await adminContext.newPage();
await adminPage.goto('https://app.vwo.com/');
console.log("Admin login page");


//viewer context

let viewerContext = await browser.newContext();
console.log("Viewer Context Created");
let viewerPage = await viewerContext.newPage();
await viewerPage.goto('https://app.vwo.com/');
console.log("Viewer login page");   

await adminContext.close();
await viewerContext.close();
await browser.close();  

}
multiuserTest();

