const { test, expect } = require('@playwright/test');
const testData = require('../resources/testData.json');
const { loadLocatorOf } = require('../src/LoadResources.js')
const { launchApp } = require('../src/Driver.js')

test.describe.configure({ mode: 'serial' });

let browser, context, page;
test.beforeEach(async () => {
  const app = await launchApp();
  browser = app.browser;
  context = app.context;
  page = app.page;
});

test('Login Validation', async () => {

//put more test data in json for login validation
    for (const data of testData) {

        //Validate data on page
        await expect(page.locator(await loadLocatorOf('Header'))).toBeVisible();
        await expect(page.locator(await loadLocatorOf('LoginTitle'))).toBeVisible();
        await expect(page.locator(await loadLocatorOf('LoginDescriptionText'))).toHaveText('Optimize and control your sourcing of recycled materials conveniently.');
        await expect(page.locator(await loadLocatorOf('LoginWithMicrosoft'))).toBeVisible();
        await expect(page.locator(await loadLocatorOf('LoginWithGoogle'))).toBeVisible();
        await expect(page.locator(await loadLocatorOf('EmailLabel'))).toBeVisible();
        await expect(page.locator(await loadLocatorOf('PasswordLabel'))).toBeVisible();
        
        //validate login
        await page.fill(await loadLocatorOf('UserName'), data.username);
        await page.fill(await loadLocatorOf('PassWord'), data.password);
        await page.click(await loadLocatorOf('LoginButton'));
        await page.waitForLoadState();
        //await expect(page).toHaveURL('https://demo.haroldwaste.com/purchases');
        
    }
});

test('Login Error Validations',  async () => {

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
