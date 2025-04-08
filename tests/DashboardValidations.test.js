const { test, expect } = require('@playwright/test');
const { loginWith } = require('../src/LoginHelper')

test('Validate Dashboard page', async () => {

  const { page } = await test.step('Login', async () => {
    return await loginWith('qa@julesai.com', 'QaJULES2023!');
  });

  await test.step('Validate Dashboard', async () => {
    await expect(page).toHaveURL('https://demo.haroldwaste.com/purchases');
  });
});