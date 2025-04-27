const { test, expect } = require('@playwright/test');
const resources = require('../src/LoadResources.js');
const { waitForVisibleElement } = require('../src/TestUtils/ValidationHelper.js')
const { navigateTo } = require('../src/DriverControls.js')

test.describe.configure({ mode: 'serial' });

test.beforeEach(async () => {
    await navigateTo('harold');
});

test.describe('@runTest', () => {

    test('Login Page Validations', async () => {

        resources.setPage('harold-login');
        await waitForVisibleElement('PageElements.LoginTitle');
        await waitForVisibleElement('PageElements.LoginDescriptionText');
        await waitForVisibleElement('PageElements.LoginWithMicrosoft');
        await waitForVisibleElement('PageElements.LoginWithGoogle');
        await waitForVisibleElement('PageElements.EmailLabel');
        await waitForVisibleElement('PageElements.PasswordLabel');

    });
});

test('Login Error Validations', async () => {
    //empty fields
    await page.click(await loadLocatorOf('LoginButton'));
    await expect(appPage.locator(await loadLocatorOf('errorBelowUsername'))).toHaveText("Required");
    await expect(appPage.locator(await loadLocatorOf('errorBelowPassword'))).toHaveText("Required");

    //invalid username &password
    await page.fill(await loadLocatorOf('UserName'), 'jj');
    await expect(appPage.locator(await loadLocatorOf('errorBelowUsername'))).toHaveText("Email not valid");
    await page.fill(await loadLocatorOf('PassWord'), 'jj');
    await expect(appPage.locator(await loadLocatorOf('errorBelowPassword'))).toHaveText("Password too short");
    await page.click(await loadLocatorOf('LoginButton'));


    //clear input field
    await page.fill(await loadLocatorOf('UserName'), '');
    await page.fill(await loadLocatorOf('PassWord'), '');
    await expect(appPage.locator(await loadLocatorOf('errorBelowUsername'))).toHaveText("Required");
    await expect(appPage.locator(await loadLocatorOf('errorBelowPassword'))).toHaveText("Required");
    await page.reload();
    await expect(appPage.locator(await loadLocatorOf('errorBelowUsername'))).not.toBeVisible();
    await expect(appPage.locator(await loadLocatorOf('errorBelowPassword'))).not.toBeVisible();


});
