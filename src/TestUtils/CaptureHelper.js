const resources = require('../LoadResources.js');
const { getPage } = require('../context.js');

async function CountOf(element) {
    const page = await getPage();
    const locators = page.locator(await resources.get(element));
    return await locators.count();
}

async function TextOf(element) {
    const page = await getPage();
    const locator = page.locator(await resources.get(element));
    return await locator.textContent();

}
module.exports = {
    CountOf,
    TextOf,
}
