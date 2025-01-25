import { test, expect } from '@playwright/test';
import { loginData } from './test-data/login.data';

test.describe('Payment testing', () => {
  test.beforeEach(async ({ page }) => {
    const baseUrl = 'https://demo-bank.vercel.app/';
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto(baseUrl);
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();
    await page.getByRole('link', { name: 'płatności' }).click();
  });

  test('easy payment', async ({ page }) => {
    // Arrange
    const transferReceiverName = 'Smok Wawelski';
    const numberAccount = '12 3456 7891 2345 5678 9123 4567';
    const transferAmount = '102';
    const expectMessage = `Przelew wykonany! ${transferAmount},00PLN dla Smok Wawelski`;

    // Act
    await page.getByTestId('transfer_receiver').fill(transferReceiverName);
    await page.getByTestId('form_account_to').fill(numberAccount);
    await page.getByTestId('form_amount').fill(transferAmount);
    await page.getByRole('button', { name: 'wykonaj przelew' }).click();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(expectMessage);
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test -- tests/e2e_JakTestowacPl
// npm test -- tests/e2e_JakTestowacPl/lesson_10
// npm test -- tests/e2e_JakTestowacPl/lesson_10 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_10/payment.spec.ts --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_10/payment.spec.ts --project=chromium --headed
