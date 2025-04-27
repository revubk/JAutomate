import { launchApp, closeApp } from '../src/DriverControls'

let _page;
<<<<<<< HEAD
let _initialized = false;

export async function getPage() {
  if (!_page && _initialized==false) {
    _initialized = true;
    console.log('🚀 Creating NEW browser instance');
=======

export async function getPage() {
  if (!_page) {
>>>>>>> 58f0c13 (Modified setup functions of browser and added action functions)
    _page = await launchApp();
  }
  return _page;
}

export async function closePage() {
  if (_page) {
    await closeApp();
    _page = null;
  }
}