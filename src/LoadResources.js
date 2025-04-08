const fs = require('fs');
const path = require('path');


async function loadPropKey(key) {
  const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../resources/config.json'), 'utf-8'));
  return await file[key];
}

async function loadLocatorOf(key) {
  const folderPath = path.join(__dirname, '../resources/locators');
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    if (file.endsWith('.json')) {
      const filePath = path.join(folderPath, file);
      const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      if (jsonData.hasOwnProperty(key)) {
        return jsonData[key];
      }
    }
  }
}


module.exports = {
  loadPropKey,
  loadLocatorOf
};
