import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    baseURL: 'https://playwright.dev',
    viewport: { width: 1280, height: 720 }
  }
});