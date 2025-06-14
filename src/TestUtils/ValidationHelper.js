const { expect } = require('playwright/test');
const resources = require('../LoadResources');
const { getPage } = require('../context');

async function validateElementVisible(element) {
    const page = await getPage();
    await expect(page.locator(await resources.get(element))).toBeVisible();
}

async function visibleInstances(element, number) {
    const page = await getPage();
    const locator = page.locator(await resources.get(element));
    await expect(locator).toHaveCount(number);
}


async function elementToHaveText(element, text) {
    const page = await getPage();
    await expect(page.locator(await resources.get(element))).toHaveText(text);
}

async function validateElementNotVisible(element) {
    const page = await getPage();
    await expect(page.locator(await resources.get(element))).toBeHidden();
}

<<<<<<< HEAD
async function visibleInstances(element, number) {
    const page = await getPage();
    const locator = page.locator(await resources.get(element));
    await expect(locator).toHaveCount(number);
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
    visibleInstances,
    validateElementNotVisible,
    elementToHaveText
=======
>>>>>>> 40c4c73 (Added Product Page Validation test for SauceDemo page)

module.exports = {
    validateElementVisible,
    visibleInstances,
    validateElementNotVisible,
    elementToHaveText

}
