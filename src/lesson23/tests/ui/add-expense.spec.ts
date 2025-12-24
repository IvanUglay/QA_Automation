import { test, expect } from '../fixtures/expenseApp.fixture';
import { ExpenseForm } from '../components/ExpenseForm';

test('user can add expense', async ({ expenseApp }) => {
  const form = new ExpenseForm(expenseApp);

  await form.addExpense('Coffee', '5');

  await expect(
    expenseApp.getByText('Coffee')
  ).toBeVisible();
});
