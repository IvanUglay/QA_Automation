const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given("I open the login page", async function () {
  await this.page.goto("https://the-internet.herokuapp.com/login");
});

When("I enter a valid username and password", async function () {
  await this.page.fill("#username", "tomsmith");
  await this.page.fill("#password", "SuperSecretPassword!");
});

When("I enter invalid login credentials", async function () {
  await this.page.fill("#username", "wrong");
  await this.page.fill("#password", "wrong");
});

When("I click the login button", async function () {
  await this.page.click("button[type='submit']");
});

Then("I should see the user dashboard", async function () {
  await this.page.waitForSelector(".flash.success", { timeout: 5000 });
});

Then("I should see an error message", async function () {
  await this.page.waitForSelector(".flash.error", { timeout: 5000 });
});

Then("I should see validation warnings", async function () {
  await this.page.waitForSelector(".flash.error", { timeout: 5000 });
});

