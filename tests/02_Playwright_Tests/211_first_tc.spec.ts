import {test,expect} from '@playwright/test';


//structure of the test case
test('Verify our first testcase',async({page})=>{

    await page.goto('https://app.vwo.com/');   //await -to return the promise
    await expect(page).toHaveTitle('Login - VWO');
    const img_vwo =page.locator('img');   //locator doesnot return a promise.
    await expect(img_vwo).toBeVisible();


    
});