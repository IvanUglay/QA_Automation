import { Before, After, AfterStep } from '@cucumber/cucumber';
import { BrowserFixture } from '../fixtures/browser.fixture';

export const fixture = new BrowserFixture();

Before(async () => {
  await fixture.init();
});

After(async () => {
  await fixture.cleanup();
});

AfterStep(async () => {
});