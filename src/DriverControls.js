const { chromium, firefox, webkit } = require('playwright');
const { loadConfig } = require('./LoadResources.js');

let context;
async function launchAppForUrl(url) {
  const browserName = await loadConfig('BrowserConfigs.browser');
  const url = await loadConfig(`PageUrls.${url}`);
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

  const browser = await browserType.launch({headless : await loadConfig('BrowserConfigs.headless')});
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);
  await page.waitForLoadState('networkidle');
  console.log('✅ Page loaded successfully');

}

async function closeApp() {
  const page = await getPage();
  await page.close();

}

async function closeApp()
{
  await context.close();
}

module.exports = {
  launchAppForUrl,
  closeApp
};
