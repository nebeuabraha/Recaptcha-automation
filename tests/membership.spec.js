const { test, expect } = require('@playwright/test');

test('has username', async ({ page }) => {
    await page.goto('https://membership.stgz.pureflix.com/users/sign_in?cntn=%2Fusers');

    await page.getByRole('button', { name: 'OK', exact: true }).click();


    await page.getByPlaceholder('Email').fill('nebeu.abraha+1@pureflix.com')
    await page.getByPlaceholder('Password').fill('bbbbbbbb')

    await page.getByRole('button', { name: 'Sign in' }).click();


    await page.waitForTimeout(3000);

    await page.goto('https://membership.stgz.pureflix.com/payments');

    await page.getByRole('button', { name:'Update Payment Information'}).click();



    //await page.pause();
    await page.getByPlaceholder('Cardholder name').fill('Nebeu Abraha');
    await page.getByPlaceholder('ZIP code').fill('80015');
    
    
    const iframe = await page.frameLocator("//*[@id='adyen-component-container']/div/div/div[2]/div/div[1]/div[2]/span/iframe")
    await iframe.getByPlaceholder('1234 5678 9012 3456').fill('4111111111111111');


    //await page.pause();
    const jframe = await page.frameLocator("//*[@id='adyen-component-container']/div/div/div[2]/div/div[2]/div[1]/div[2]/span[1]/iframe")
    await jframe.getByPlaceholder('MM/YY').fill('03/30');


    const kframe = await page.frameLocator("//*[@id='adyen-component-container']/div/div/div[2]/div/div[2]/div[2]/div[2]/span[1]/iframe")
    await kframe.getByPlaceholder('3 digits').fill('737');


    //await page.pause();
    await page.getByRole('button', { name: 'Save Credit Card' }).click();

 

});