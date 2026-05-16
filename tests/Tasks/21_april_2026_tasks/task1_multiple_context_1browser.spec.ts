//scenario 1: 1 browser and multiple contexts

import {test,expect} from '@playwright/test';

test('One browser and multiple contexts',async({browser})=>{
    //admin context
    let adminContext1 = await browser.newContext();
    let adminPage1  = await adminContext1.newPage();
    
//viewer context
    let viewerContext1 = await browser.newContext();
    let viewerPage1 = await viewerContext1.newPage();


    await adminPage1.goto("https://app.vwo.com/");
    console.log("Admin page 1 opened");

    await viewerPage1.goto("https://app.vwo.com/");
    console.log("Viewer page 1 opened");

    await adminContext1.close();
    console.log("Admin context 1 closed");  
    await viewerContext1.close();
    console.log("Viewer context 1 closed");
    await browser.close();

    });
