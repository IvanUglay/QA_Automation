import { Given, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import { HomePage } from '../pages/HomePage';
import assert from 'assert';

let browser: Browser;
let page: Page;
let home: HomePage;

Given('I open the home page', async function () {
    browser = await chromium.launch();
    page = await browser.newPage();
    home = new HomePage(page);
    await home.open();
});

Then('I should see the correct heading', async function () {
    const text = await home.getHeadingText();
    assert.ok(text?.includes('Example Domain'));
    await browser.close();
});
