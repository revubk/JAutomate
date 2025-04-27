# 🚀 pw-web - Playwright Web Automation framework

Demonstrating Enterprise-Grade Test Engineering Skills

---
## Technical Stack

<img src="https://img.shields.io/badge/Playwright-2E3A8C?logo=playwright">

<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E">

<img src="https://img.shields.io/badge/CI/CD-GitHub_Actions-2088FF">

---

## 🌟 Key Features

JSON-Powered Locator Management - Externalized element selectors with dynamic loading

Intelligent Page Context - Automatic validation of page states

Multi-Environment Ready - Configured for CI/CD pipelines

API + UI Unified - Shared authentication and test contexts

---

## 📌 About

### Framework Architecture

✔ Custom Helper Layers

- Action Layer: ActionsHelper.js (Reusable interactions)
- Validation Layer: ValidationHelper.js (Smart assertions)
- Capture Layer: CaptureHelper.js (Data extraction)

✔ Dynamic Resource Loading

- Externalized locators in *.json
- Config management via config.json

✔ Cross-Test Type Support

- UI Tests: Full POM implementation
- API Tests: Shared auth tokens (see UpdateBooking.test.js)


### Scalability Features

✔ Test Data Management

```json

// Data-driven testing
"username": "performance_glitch_user",
"password": "secret_sauce" 

```

✔ CI/CD Ready

- Parallel execution config
- HTML reporting pipeline

---

## 🚀 How to Experience the Framework

### Run the demo suite

```bash
npx playwright test --reporter=html
```
---
