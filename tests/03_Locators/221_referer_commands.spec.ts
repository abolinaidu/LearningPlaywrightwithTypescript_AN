//This concept is mostly used in banking and finance applications where the referer is used to track the source of traffic and ensure that requests are coming from trusted sources. By setting the referer for the entire context, you can ensure that all requests made within that context include the specified referer header, which can help prevent unauthorized access and improve security.

import { test } from "@playwright/test";

test("set referer for entire context", async ({ browser }) => {
    let context = await browser.newContext({
        extraHTTPHeaders: {
            "Referer": "https://thetestingacademy.com"
        }
    });

    let page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    console.log("Page 1 — partner referer included");

    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Page 2 — partner referer included");




});