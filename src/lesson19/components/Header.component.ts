import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
    readonly root: Locator;
    readonly docsLink: Locator;

    constructor(page: Page) {
        this.root = page.locator('nav[aria-label="Main"]');
        this.docsLink = this.root.getByRole('link', { name: 'Docs' });
    }
}
