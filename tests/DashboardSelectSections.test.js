const { test, expect } = require('@playwright/test');
const { loginWith } = require('../src/LoginHelper.js')
const { loadLocatorOf } = require('../src/LoadResources.js')
const testData = require('../resources/testData.json');


test('Choose different sections on Dashboard', async () =>{

  const { page } = await test.step('Login', async () => {

    return await loginWith(testData[0].username, testData[0].password);
  });

  await test.step('Choose Supplier and Customer options', async () => {
    
    const options = {'SupplierAndCustomer.SuppliersAndSites': 'Suppliers & Sites', 'SupplierAndCustomer.CustAndSites': 'Customers & Sites', 'SupplierAndCustomer.ContactsOption': 'Contacts'}

    for (const [key, text] of Object.entries(options))
    {
      {
        try {
      await page.locator(await loadLocatorOf('SupplierAndCustomer')).click();
      await page.locator(await loadLocatorOf(key)).click();
      await page.waitForLoadState(); 
      await expect(page.locator(await loadLocatorOf('PageTitle'))).toHaveText(text);
    } catch (error) {
      console.warn(`${error.message}`);
      throw new Error('Check failed for ${key}: ${error.message}');
    }
    }
}})


await test.step('Choose Purchases options', async () => {


    const options = {'Purchases.Trading': 'Purchase & Opportunity list', 
      'Purchases.Recycling': 'Purchase & Opportunity list', 
      // 'Purchases.ContractAndServices': 'Contracts & Services',
      'Purchases.Offers':'Offers',
      'Purchases.SourcingHub':'Sourcing hub',
      'Purchases.PurchaseGoals':'Purchase goals & Target purchase costs'}

    
    for (const [key, text] of Object.entries(options))
    {
      try {
      await page.locator(await loadLocatorOf('Purchases')).click();
      await page.locator(await loadLocatorOf(key)).click();
      await page.waitForLoadState(); 
      await expect(page.locator(await loadLocatorOf('PageTitle'))).toHaveText(text);
    } catch (error) {
      console.warn(`${error.message}`);
      throw new Error(`Check failed for ${key}: ${error.message}`);
    }
    }

  })
})