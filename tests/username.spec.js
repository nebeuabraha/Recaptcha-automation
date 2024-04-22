const { test, expect } = require('@playwright/test');

test('has username', async ({ page }) => {
    await page.goto('https://signup-stage.pureflix.com/signup/c3e/email?hsCtaTracking=abab7a17-8da5-4c69-8e48-85ed4ff9ee30%7C91ad980e-0f17-4221-8242-7c7c8adb5960');



    await page.getByPlaceholder('Email').fill('nebeu.abraha+0144@pureflix.com')
    await page.getByRole('button', { name: 'OK', exact: true }).click();
 

    await page.getByRole('button', { name: 'Start Your Free Trial' }).click();

    await page.getByRole('button', { name: 'Choose Plan & Continue' }).click();


    await page.getByPlaceholder('Email').fill('nebeu.abraha+0144@pureflix.com')
    await page.getByPlaceholder('Password').fill('bbbbbbbb')




    await page.getByRole('button', { name: 'Create Your Account' }).click();

   
    await page.getByRole('button', { name: 'Debit/Credit Card' }).click();

    await page.getByPlaceholder('First Name').fill('nebeu');
    await page.getByPlaceholder('Last Name').fill('abraha');

    
    const allframes = page.frames();
    console.log("No frames: " + allframes.length);

 
    const iframe = await page.frameLocator("//*[@id='cc-card']/iframe")

    await iframe.locator("//*[@id='encryptedCardNumber']").fill('4111111111111111');






    const jframe = await page.frameLocator("//*[@id='cc-exp']/iframe")
    await jframe.locator("//*[@id='encryptedExpiryDate']").fill('03/30');



    const lframe = await page.frameLocator("//*[@id='cc-cvv']/iframe")
    await lframe.locator("//*[@id='encryptedSecurityCode']").fill('737');




    //await page.pause(); 
    await page.getByPlaceholder('Billing Zip Code').fill('80015');

    await page.getByRole('button', { name: 'Agree and Start Your Free Trial' }).click();

    
    
    
    
    await page.pause(); 

  });