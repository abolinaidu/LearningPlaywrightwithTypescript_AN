// scenario :using xpath open the vwo app and enter incorrect email /password and it should throw an error - incorrect creds with submit button and verify the error message
//capcha handliing not possible in playwright
import { test, expect } from "@playwright/test";

test("locators are lazy, strict, and auto-wait", async ({ page }) => {
    await page.goto("https://app.vwo.com/#login");

    //elements in the app.vwo.com -website,right click,inspect.
    //check for the locators as given -ID->Name->classname->tag name->css selector-> xpath(preference rule)

    //attributes list:
    // <input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID"
    // >

    // Rule 2 - Css Selector 
    // id ->then use ' #'
    // class -> then use'.'

    // Create locators — nothing happens yet (lazy)
    let usernameField = page.locator('xpath=//input[@id="login-username"]');
    let passwordField = page.locator("xpath=//input[@id='login-password']");
    let loginButton = page.locator("xpath=//button[@id='js-login-btn']");

    // NOW Playwright finds the element and acts (auto-wait)

    await usernameField.fill("admin");
    await passwordField.fill("pass123");
    await loginButton.click();

    console.log("All actions completed ✅");

    let error_message = page.locator('#js-notification-box-msg');
    // error_message.getByText()
    await expect(error_message).toContainText("Your email, password, IP address or location did not match");

});