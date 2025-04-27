const { loadLocatorOf } = require('../LoadResources.js');
const { getPage } = require('../context.js');

async function enterTextInto(element, text) {
    const page = await getPage();
    await page.fill(await loadLocatorOf(element), text);
}

async function clickOn(element)
{
    const page = await getPage();
    await page.click(await loadLocatorOf(element));
}

module.exports = {
    enterTextInto,
    clickOn

}
