const { chromium, firefox, webkit } = require('playwright');
const { loadPropKey } = require('./loadResources.js');

async function launchApp() {
  const browserName = await loadPropKey('browser');
  const url = await loadPropKey('url');
  console.log("Loaded URL from config:", url);

  let browserType;

  switch (browserName) {
    case 'chrome':
      browserType = chromium;
      break;
    case 'firefox':
      browserType = firefox;
      break;
    case 'webkit':
      browserType = webkit;
      break;
    default:
      throw new Error(`Unsupported browser specified: ${browserName}`);
  }

  const browser = await browserType.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);
  await page.waitForLoadState('domcontentloaded');
  console.log('✅ Page loaded successfully');

  return { browser, context, page };
}

module.exports = {
  launchApp,
};
