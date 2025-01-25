import { test, expect } from '@playwright/test';

test.describe('Desktop testing', () => {
  test('quick payment with correct data', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('testyAdi');
    await page.getByTestId('password-input').fill('password');
    await page.getByTestId('login-button').click();
    await page.locator('#widget_1_transfer_receiver').selectOption('2');
    await page.locator('#widget_1_transfer_amount').fill('150');
    await page.locator('#widget_1_transfer_title').fill('Zwrot kasy');
    await page.getByRole('button', { name: 'wykonaj' }).click();

    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(
      'Przelew wykonany! Chuck Demobankowy - 150,00PLN - Zwrot kasy',
    );
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test tests/e2e_JakTestowacPl
// npm test tests/e2e_JakTestowacPl/lesson_03
// npm test -- tests/e2e_JakTestowacPl/lesson_03 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_03/desktop.spec.ts --project=chromium
