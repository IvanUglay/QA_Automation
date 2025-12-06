import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Page tests', () => {

  test('Successful login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(page).toHaveURL(/secure/);
    await expect(loginPage.flashMessage)
      .toContainText('You logged into a secure area!');
  });

  test('Login with invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('tomsmith', 'wrongpassword');

    await expect(loginPage.flashMessage)
      .toContainText('Your password is invalid!');
  });

  test('Login with empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();
    await loginPage.login('', '');

    await expect(loginPage.flashMessage)
      .toContainText('Your username is invalid!');
  });

});
