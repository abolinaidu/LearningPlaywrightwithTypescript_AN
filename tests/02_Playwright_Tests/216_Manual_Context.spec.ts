import {test,expect} from '@playwright/test';

test("two users interact",async({browser})=>{

    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();
    
    let guestContext = await browser.newContext();
    let guestPage = await guestContext.newPage();
    
    await adminPage.goto('https://app.vwo.com/');
    console.log("Admin login page");

    await guestPage.goto('https://app.vwo.com/');
    console.log("Guest login page");
});