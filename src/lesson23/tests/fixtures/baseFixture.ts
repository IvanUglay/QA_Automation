import { test as base, expect, Page } from '@playwright/test';

type Fixtures = {
  appPage: Page;
};

export const test = base.extend<Fixtures>({
  appPage: async ({ page }, use) => {
    await page.goto('/');
    await use(page);
  }
});

export { expect };
