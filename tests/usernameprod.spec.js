const { test, expect } = require('@playwright/test');

test('has username', async ({ page }) => {
    await page.goto('https://signup.pureflix.com/signup/c3e/email?_ga=2.230514325.849144209.1712599458-437249602.1712599458');



    await page.getByPlaceholder('Email').fill('nebeu.abraha+0148@pureflix.com')
    await page.getByRole('button', { name: 'OK', exact: true }).click();


    //await page.pause(); 

 
    
    await page.getByRole('button', { name: 'CONTINUE' }).click();
    await page.getByRole('button', { name: 'Choose Plan & Continue' }).click();


    await page.getByPlaceholder('Email').fill('nebeu.abraha+0148@pureflix.com')
    await page.getByPlaceholder('Password').fill('bbbbbbbb')




    await page.getByRole('button', { name: 'Create Your Account' }).click();

   
    await page.getByRole('button', { name: 'Debit/Credit Card' }).click();

    await page.getByPlaceholder('First Name').fill('Spencer');
    await page.getByPlaceholder('Last Name').fill('Gardner');

    
    const allframes = page.frames();
    console.log("No frames: " + allframes.length);

 
    const iframe = await page.frameLocator("//*[@id='cc-card']/iframe")

    await iframe.locator("//*[@id='encryptedCardNumber']").fill('378751881351409');






    const jframe = await page.frameLocator("//*[@id='cc-exp']/iframe")
    await jframe.locator("//*[@id='encryptedExpiryDate']").fill('08/27');



    const lframe = await page.frameLocator("//*[@id='cc-cvv']/iframe")
    await lframe.locator("//*[@id='encryptedSecurityCode']").fill('1558');




    //await page.pause(); 
    await page.getByPlaceholder('Billing Zip Code').fill('85255');

    await page.getByRole('button', { name: 'Agree and Start Your Free Trial' }).click();

    
    
    
    
    await page.pause(); 

  });