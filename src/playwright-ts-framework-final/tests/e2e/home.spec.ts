
import { test, expect } from '../fixtures/testFixtures';

test('Homepage loads and has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/FOP/i);
});
