import { Page } from '@playwright/test';
import { HeaderComponent } from '../components/Header.component';

export class HomePage {
  readonly page: Page;
  readonly header: HeaderComponent;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderComponent(page);
  }

  async open(): Promise<void> {
    await this.page.goto('https://example.com');
  }
}