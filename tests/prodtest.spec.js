// @ts-check
const { test, expect } = require('@playwright/test');


test('sign in link', async ({ page }) => {
    await page.goto('https://pureflix.com/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'sign in' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*users/);
  });


  test('has username', async ({ page }) => {
    await page.goto('https://pureflix.com/');
  
    // Click sign in link.
    await page.getByRole('link', { name: 'Sign In' }).click();
    //await page.getByText('Sign In').click();
    //await expect(page).toHaveURL(/.*users/);
    await page.getByRole('Textbox').fill('Peter');


  });