import { test, expect } from '@playwright/test';

test.describe('Desktop testing', () => {
  const baseUrl = 'https://demo-bank.vercel.app/';

  test('quick payment with correct data', async ({ page }) => {
    // Arrange
    const userId = 'testyAdi';
    const userPassword = '87654321';
    const receiverId = '2';
    const transferAmount = '150';
    const transferTitle = 'Zwrot kasy';
    const expectedTransferReceiver = 'Chuck Demobankowy';

    // Act
    await page.goto(baseUrl);
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();
    await page.locator('#widget_1_transfer_receiver').selectOption(receiverId);
    await page.locator('#widget_1_transfer_amount').fill(transferAmount);
    await page.locator('#widget_1_transfer_title').fill(transferTitle);
    await page.getByRole('button', { name: 'wykonaj' }).click();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(
      `Przelew wykonany! ${expectedTransferReceiver} - ${transferAmount},00PLN - ${transferTitle}`,
    );
  });

  test('successful mobile phone top-up', async ({ page }) => {
    // Arrange
    const userId = 'testyAdi';
    const userPassword = '87654321';
    const selectPhoneNumber = '502 xxx xxx';
    const transferAmount = '90';
    const transferTitle = 'Doładowanie wykonane!';
    const transferMessage = 'na numer';

    // Act
    await page.goto(baseUrl);
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();
    await page
      .locator('#widget_1_topup_receiver')
      .selectOption(selectPhoneNumber);
    await page.locator('#widget_1_topup_amount').fill(transferAmount);
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(
      `${transferTitle} ${transferAmount},00PLN ${transferMessage} ${selectPhoneNumber}`,
    );
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test -- tests/e2e_JakTestowacPl
// npm test -- tests/e2e_JakTestowacPl/lesson_05
// npm test -- tests/e2e_JakTestowacPl/lesson_05 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_05/desktop.spec.ts --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_05/desktop.spec.ts --project=chromium --headed
