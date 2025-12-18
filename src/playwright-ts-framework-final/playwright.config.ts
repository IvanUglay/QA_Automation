
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  reporter: [['html', { outputFolder: 'html-report', open: 'never' }]],
  use: {
    baseURL: 'https://new.fophelp.pro',
    trace: 'on-first-retry'
  }
});
