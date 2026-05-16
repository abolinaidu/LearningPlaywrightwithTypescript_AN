import {test,expect} from '@playwright/test';

test("The getRole locator", async ({ page }) => {

await page.goto("https://katalon-demo-cura.herokuapp.com/");

let button = await page.getByRole('link',{ name: 'Make Appointment' }).click();

});
