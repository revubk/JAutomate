import { launchApp, closeApp } from '../src/DriverControls'

let _page;

export async function getPage() {
  if (!_page) {
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