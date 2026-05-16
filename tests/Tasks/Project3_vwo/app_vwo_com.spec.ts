//scenario : VWO Login validation
//Please now automate the App.vwo invalid username and password with error message. But now you have to use get by role. 

import{test,expect} from '@playwright/test';

test("VWO Login validation",async({page})=>{

    await page.goto("https://app.vwo.com/#/login");

    let uName =page.getByRole('textbox',{name: 'Email address'});
    let pWord=page.getByRole('textbox',{name: 'Password'});
    let signbtn = page.getByRole('button',{name: 'Sign in',exact: true}).click();

    await uName.fill("admin123");
    await pWord.fill("hello@123");
    

    let errormsg=page.locator('#js-notification-box-msg');
    await expect(errormsg).toBeVisible();
    await expect(errormsg).toContainText("Your email, password, IP address or location did not match");
        
});