import { Page, Locator } from '@playwright/test';

export class SearchComponent {
    readonly openButton: Locator;
    readonly input: Locator;

    constructor(page: Page) {
        this.openButton = page.getByRole('button', { name: 'Search' });
        this.input = page.locator('#docsearch-input');
    }

    async search(text: string) {
        await this.openButton.click();
        await this.input.fill(text);
    }
}
