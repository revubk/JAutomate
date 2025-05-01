const resources = require('../LoadResources');
const { getPage } = require('../context.js');

async function enterTextInto(element, text) {
    const page = await getPage();
    await page.fill(await resources.get(element), text);
}

async function clickOn(element) {
    const page = await getPage();
    await page.click(await resources.get(element));
}

async function waitForPageLoad() {
    const page = await getPage();
    await page.waitForLoadState("networkidle");
}

module.exports = {
    enterTextInto,
    clickOn,
    waitForPageLoad
}
