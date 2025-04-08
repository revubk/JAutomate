const { test, expect } = require('@playwright/test');
const { loginWith } = require('../src/LoginHelper')
const { loadLocatorOf } = require('../src/LoadResources.js')

test('Validate Dashboard page', async () => {

  const { page } = await test.step('Login', async () => {
    return await loginWith('qa@julesai.com', 'QaJULES2023!');
  });

  await test.step('Validate Dashboard', async () => {
    await expect(page).toHaveURL('https://demo.haroldwaste.com/purchases');
  });

  await test.step('Validate tab clicks', async () => {

    const tabs = page.locator('[role="tab"]');
    const count = await tabs.count();   
    for (let i = 0; i <count; i ++)
    {
      await tabs.nth(i).click();
      await page.waitForTimeout(5000); 
    }
 
    await page.locator(await loadLocatorOf('AddAPurchaseButton')).click();
    expect(page.locator(await loadLocatorOf('AddAPurchaseButton'))).toBeVisible();
  });

});