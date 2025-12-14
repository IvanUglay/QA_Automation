import { Given, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { fixture } from '../hooks/hooks';
import { HomePage } from '../pages/HomePage';

let homePage: HomePage;

Given('I open example page', async () => {
  homePage = new HomePage(fixture.page);
  await homePage.open();
});

Then('I see example title', async () => {
  const title = await homePage.header.getTitleText();
  assert.ok(title?.includes('Example Domain'));
});