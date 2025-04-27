const { expect } = require('playwright/test');
const resources = require('../LoadResources');
const { getPage } = require('../context');

async function waitForVisibleElement(element) {
    const page = await getPage();
    await expect(page.locator(await resources.get(element))).toBeVisible();
}

module.exports = {
    waitForVisibleElement
}
