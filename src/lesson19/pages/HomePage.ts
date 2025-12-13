import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly header: Locator;
    readonly searchButton: Locator;
    readonly searchInput: Locator;
    readonly docsLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator('header');

        this.searchButton = page.getByRole('button', { name: 'Search' });

        this.searchInput = page.locator('#docsearch-input');

        this.docsLink = page
            .locator('nav')
            .getByRole('link', { name: 'Docs' });
    }

    async open() {
        await this.page.goto('/');
    }

    async search(text: string) {
        await this.searchButton.click();
        await this.searchInput.fill(text);
    }

    async openDocs() {
        await this.docsLink.click();
    }
}
