import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly title: Locator;

  constructor(page: Page) {
    this.title = page.locator('h1');
  }

  async getTitleText(): Promise<string | null> {
    return await this.title.textContent();
  }
}