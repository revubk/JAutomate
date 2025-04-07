const fs = require('fs');
const path = require('path');


async function loadPropKey(key) {
  const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../resources/config.json'), 'utf-8'));
  return await file[key];
}

async function loadLocatorOf(key) {
  const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../resources/locators.json'), 'utf-8'));
  return await file[key];
}


module.exports = {
  loadPropKey,
  loadLocatorOf
};
