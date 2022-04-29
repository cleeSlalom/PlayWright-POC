//playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://google.com/',
    browserName: 'chromium',
    headless: false,
  },
};
export default config;