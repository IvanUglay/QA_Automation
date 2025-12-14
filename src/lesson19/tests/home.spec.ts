import { test, expect } from '../fixtures/home.fixture';

test.describe('Home page', () => {

    test('Header is visible', async ({ homePage }) => {
        await expect(homePage.header.docsLink).toBeVisible();
    });

    test('Navigate to Docs', async ({ homePage, page }) => {
        await homePage.header.docsLink.click();
        await expect(page).toHaveURL(/docs/);
    });

});
