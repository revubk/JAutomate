const { test, expect } = require('@playwright/test');
const testData = require('../resources/testData.json');
const { loadLocatorOf } = require('../src/loadResources.js')
const { launchApp } = require('../src/Driver.js')

let browser, context, page;

test.beforeEach(async () => {
  const app = await launchApp();
  browser = app.browser;
  context = app.context;
  page = app.page;
});

test.describe('Login Validation', () => {

    for (const data of testData) {
      test(`Login with username: ${data.username}`, async () => {

        await page.fill(await loadLocatorOf('UserName'), data.username);
        await page.fill(await loadLocatorOf('PassWord'), data.password);
        await page.click(await loadLocatorOf('LoginButton'));
        
      });
    }
});

test.describe('Login Error Validations',  () => {

    test(`Error Validations on input field`, async () => {

      //empty fields
      await page.click(await loadLocatorOf('LoginButton'));
      await expect(page.locator(await loadLocatorOf('errorBelowUsername'))).toHaveText("Required");
      await expect(page.locator(await loadLocatorOf('errorBelowPassword'))).toHaveText("Required");

      //invalid username &password
      await page.fill(await loadLocatorOf('UserName'), 'jj');
      await expect(page.locator(await loadLocatorOf('errorBelowUsername'))).toHaveText("Email not valid");
      await page.fill(await loadLocatorOf('PassWord'), 'jj');
      await expect(page.locator(await loadLocatorOf('errorBelowPassword'))).toHaveText("Password too short");
      await page.click(await loadLocatorOf('LoginButton'));


      //clear input field
      await page.fill(await loadLocatorOf('UserName'), '');
      await page.fill(await loadLocatorOf('PassWord'), '');
      await expect(page.locator(await loadLocatorOf('errorBelowUsername'))).toHaveText("Required");
      await expect(page.locator(await loadLocatorOf('errorBelowPassword'))).toHaveText("Required");
      await page.reload();
      await expect(page.locator(await loadLocatorOf('errorBelowUsername'))).not.toBeVisible();
      await expect(page.locator(await loadLocatorOf('errorBelowPassword'))).not.toBeVisible();
      
    });

});
