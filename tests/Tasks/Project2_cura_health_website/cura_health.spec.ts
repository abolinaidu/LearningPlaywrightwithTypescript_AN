//scenario 2:
// https://katalon-demo-cura.herokuapp.com/
//On the make appointment.  Next page, you are going to enter the username and password.3
//https://katalon-demo-cura.herokuapp.com/#appointment- We need to verify that the URL is now changed to this. The page contains make appointments. Make Appointment

import {test,expect} from '@playwright/test';

test("Cura healthcare website",async({page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.click('#btn-make-appointment');

    let username1 = page.locator("#txt-username");
    let password1 = page.locator("#txt-password");
    let loginButton = page.locator("#btn-login");
   let mkheader = page.locator("h2");

    await username1.fill("John Doe");
    await password1.fill("ThisIsNotAPassword");
    await loginButton.click();

    await expect(page).toHaveURL("https://katalon-demo-cura.herokuapp.com/#appointment");
   await expect(mkheader).toBeVisible();
    await expect(mkheader).toContainText("Make Appointment");
   

});