import { chromium, Browser, Page } from 'playwright';

export class BrowserFixture {
  browser!: Browser;
  page!: Page;

  async init(): Promise<void> {
    this.browser = await chromium.launch();
    this.page = await this.browser.newPage();
  }

  async cleanup(): Promise<void> {
    await this.browser.close();
  }
}