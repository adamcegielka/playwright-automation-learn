import { test, expect } from '@playwright/test';
import { loginData } from './test-data/login.data';

test.describe('Desktop testing', () => {
  test.beforeEach(async ({ page }) => {
    const baseUrl = 'https://demo-bank.vercel.app/';
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto(baseUrl);
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();
  });

  test('quick payment with correct data', async ({ page }) => {
    // Arrange
    const receiverId = '2';
    const transferAmount = '150';
    const transferTitle = 'Zwrot kasy';
    const expectMessage = `Przelew wykonany! Chuck Demobankowy - ${transferAmount},00PLN - ${transferTitle}`;

    // Act
    await page.locator('#widget_1_transfer_receiver').selectOption(receiverId);
    await page.locator('#widget_1_transfer_amount').fill(transferAmount);
    await page.locator('#widget_1_transfer_title').fill(transferTitle);
    await page.getByRole('button', { name: 'wykonaj' }).click();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(expectMessage);
  });

  test('successful mobile phone top-up', async ({ page }) => {
    // Arrange
    const phoneNumber = '502 xxx xxx';
    const topUpAmount = '90';
    const expectMessage = `Doładowanie wykonane! ${topUpAmount},00PLN na numer ${phoneNumber}`;

    // Act
    await page.locator('#widget_1_topup_receiver').selectOption(phoneNumber);
    await page.locator('#widget_1_topup_amount').fill(topUpAmount);
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#show_messages')).toHaveText(expectMessage);
  });

  test('correct balance after successful phone top-up', async ({ page }) => {
    // Arrange
    const phoneNumber = '502 xxx xxx';
    const topUpAmount = '90';
    const initialBalance = await page.locator('#money_value').innerText();
    const expectBalance = Number(initialBalance) - Number(topUpAmount);

    // Act
    await page.locator('#widget_1_topup_receiver').selectOption(phoneNumber);
    await page.locator('#widget_1_topup_amount').fill(topUpAmount);
    await page.locator('#uniform-widget_1_topup_agreement span').click();
    await page.getByRole('button', { name: 'doładuj telefon' }).click();
    await page.getByTestId('close-button').click();

    // Assert
    await expect(page.locator('#money_value')).toHaveText(`${expectBalance}`);
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test -- tests/e2e_JakTestowacPl
// npm test -- tests/e2e_JakTestowacPl/lesson_12
// npm test -- tests/e2e_JakTestowacPl/lesson_12 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_12/desktop.spec.ts --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_12/desktop.spec.ts --project=chromium --headed
