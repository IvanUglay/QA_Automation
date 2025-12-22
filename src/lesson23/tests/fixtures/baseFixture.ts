
import { test as base } from '@playwright/test';

export const test = base.extend({
  expenseApp: async ({ page }, use) => {
    await page.goto('/');
    await use(page);
  }
});

export { expect } from '@playwright/test';
