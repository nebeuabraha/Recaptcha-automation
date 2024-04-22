const { test, expect } = require('@playwright/test');

test('has username', async ({ page }) => {
    await page.goto('https://membership.pureflix.com/users/sign_in');

    await page.getByRole('button', { name: 'OK', exact: true }).click();


    await page.getByPlaceholder('Email').fill('nebeu.abraha+0147@pureflix.com')
    await page.getByPlaceholder('Password').fill('bbbbbbbb')

    await page.getByRole('button', { name: 'Sign in' }).click();


    await page.getByRole('link', { name: 'Payment Information' }).click();


    await page.getByRole('button', { name:'Update Payment Information'}).click();



    //await page.pause();
    await page.getByPlaceholder('Cardholder name').fill('Deborah Stackis');
    await page.getByPlaceholder('ZIP code').fill('85263');
    
    
    const iframe = await page.frameLocator("//*[@id='adyen-component-container']/div/div/div[2]/div/div[1]/div[2]/span/iframe")
    await iframe.getByPlaceholder('1234 5678 9012 3456').fill('379656546931009');


    //await page.pause();
    const jframe = await page.frameLocator("//*[@id='adyen-component-container']/div/div/div[2]/div/div[2]/div[1]/div[2]/span[1]/iframe")
    await jframe.getByPlaceholder('MM/YY').fill('03/25');


    const kframe = await page.frameLocator("//*[@id='adyen-component-container']/div/div/div[2]/div/div[2]/div[2]/div[2]/span[1]/iframe")
    await kframe.getByPlaceholder('4 digits').fill('6609');


    //await page.pause();
    await page.getByRole('button', { name: 'Save Credit Card' }).click();


    await page.pause();
});