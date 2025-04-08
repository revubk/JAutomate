const { launchApp } = require('../src/Driver.js')
const { loadLocatorOf } = require('../src/LoadResources.js')

async function loginWith(username, password) {
    const { browser, page } = await launchApp();
    await page.fill(await loadLocatorOf('UserName'), username);
    await page.fill(await loadLocatorOf('PassWord'), password);
    await page.click(await loadLocatorOf('LoginButton'));
    await page.waitForLoadState();
    return { browser, page };
}

module.exports = {
    loginWith
}
