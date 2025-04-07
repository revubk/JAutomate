const { test } = require('@playwright/test');
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
        
        // if (data.expectedError) {
        //   await expect(page.locator('.error-msg')).toHaveText(data.expectedError);
        // } else {
        //   await expect(page).toHaveURL('https://yourapp.com/dashboard');
        // }
      });
    }
});

