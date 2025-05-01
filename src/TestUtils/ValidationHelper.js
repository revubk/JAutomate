const { expect } = require('playwright/test');
const resources = require('../LoadResources');
const { getPage } = require('../context');

async function validateElementVisible(element) {
    const page = await getPage();
    await expect(page.locator(await resources.get(element))).toBeVisible();
}
async function elementToHaveText(element, text) {
    const page = await getPage();
    await expect(page.locator(await resources.get(element))).toHaveText(text);
}

async function validateElementNotVisible(element) {
    const page = await getPage();
    await expect(page.locator(await resources.get(element))).toBeHidden();
}

module.exports = {
    validateElementVisible,
    validateElementNotVisible,
    elementToHaveText

}
