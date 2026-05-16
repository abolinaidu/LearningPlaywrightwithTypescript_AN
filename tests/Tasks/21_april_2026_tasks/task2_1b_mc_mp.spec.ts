//scenario 2: 1 browser and multiple contexts and multiple pages

import {test,expect} from '@playwright/test';   

test("one browser with multiple contexts and multiple pages",async({browser})=>{

    //creating first context and page

    const context1 = await browser.newContext();
    
    const page1 = await context1.newPage();
    
    //navigating to different websites in different contexts
    await page1.goto("https://accounts.google.com/login");
    console.log("Page 1: Google Login");
 
    const page2 = await context1.newPage();
    await page2.goto("https://app.vwo.com/#/login");
    console.log("Page 2: VWO Login");

    //seccond context and page
    const context2 = await browser.newContext();
    const page3 = await context2.newPage();
    const page4 = await context2.newPage(); 

    await page3.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Page 3: Cura Healthcare Login");  


    await page4.goto("https://courses.thetestingacademy.com/login");
    console.log("Page 4: Testing Academy Login");


});