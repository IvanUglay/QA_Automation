import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Playwright.dev Home Page', () => {
    test('Header is visible', async ({ page }) => {
        const home = new HomePage(page);
        await home.open();
        await expect(home.header).toBeVisible();
    });

    test('Search input works', async ({ page }) => {
        const home = new HomePage(page);
        await home.open();
        await home.search('fixtures');
        await expect(home.searchInput).toHaveValue('fixtures');
    });

    test('Navigate to Docs', async ({ page }) => {
        const home = new HomePage(page);
        await home.open();
        await home.openDocs();
        await expect(page).toHaveURL(/.*docs/);
    });
});
