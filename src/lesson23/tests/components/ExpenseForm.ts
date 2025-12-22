
import { Page } from '@playwright/test';

export class ExpenseForm {
  constructor(private page: Page) {}

  async addExpense(title: string, amount: string) {
    await this.page.getByPlaceholder('Title').fill(title);
    await this.page.getByPlaceholder('Amount').fill(amount);
    await this.page.getByRole('button', { name: /add/i }).click();
  }
}
