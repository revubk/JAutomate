// playwright.config.js

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
      headless: false, // 👀 browser will be visible
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure'
    }
  };
  
  module.exports = config;
  