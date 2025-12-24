import { test as base, expect, Page } from '@playwright/test';

type Fixtures = {
  expenseApp: Page;
};

export const test = base.extend<Fixtures>({
  expenseApp: async ({ page }, use) => {
    await page.goto('/');
    await use(page);
  }
});

export { expect };
