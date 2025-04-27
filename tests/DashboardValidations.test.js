const { test, expect } = require('@playwright/test');
const resources = require('../src/LoadResources');
const { loadLocatorOf } = require('../src/LoadResources.js')
const testData = require('../resources/testData.json');

//NOT UPDATED
test('Validate Dashboard page', async () => {



  await test.step('Validate tab clicks', async () => {

    const tabs = page.locator('[role="tab"]');
    const count = await tabs.count();   
    for (let i = 0; i <count; i ++)
    {
      await tabs.nth(i).click();
      await page.waitForLoadState();
    }
 
    try {
      await page.locator(await loadLocatorOf('AddAPurchaseButton')).click();
      expect(page.locator(await loadLocatorOf('AddAPurchaseButton'))).toBeVisible();
    } catch (error)
    {
      throw new Error(`Error on AddAPurchaseButton step: ${error.message}`);
    }
  });

});