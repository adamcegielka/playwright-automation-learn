import { test, expect } from '@playwright/test';

test.describe('Desktop testing', () => {
  const baseUrl = 'https://demo-bank.vercel.app/';

  test('quick payment with correct data', async ({ page }) => {
    await page.goto(baseUrl);
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

  test('successful mobile top-up', async ({ page }) => {
    await page.goto(baseUrl);
    await page.getByTestId('login-input').fill('testyAdi');
    await page.getByTestId('password-input').fill('password');
    await page.getByTestId('login-button').click();

    await page.locator('#widget_1_topup_receiver').selectOption('502 xxx xxx');
    await page.locator('#widget_1_topup_amount').fill('90');
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText('Doładowanie wykonane! 90,00PLN na numer 502 xxx xxx');
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test -- tests/e2e_JakTestowacPl
// npm test -- tests/e2e_JakTestowacPl/lesson_04
// npm test -- tests/e2e_JakTestowacPl/lesson_04 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_04/desktop.spec.ts --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_04/desktop.spec.ts --project=chromium --headed
