import { test, expect } from '@playwright/test';
import { loginData } from './test-data/login.data';
import { LoginPage } from './test-page-objects/login.page';
import { DesktopPage } from './test-page-objects/desktop.page';

test.describe('Desktop testing', () => {
  test.beforeEach(async ({ page }) => {
    const baseUrl = 'https://demo-bank.vercel.app/';
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto(baseUrl);
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();
  });

  test('quick payment with correct data', async ({ page }) => {
    // Arrange
    const receiverId = '2';
    const transferAmount = '150';
    const transferTitle = 'Zwrot kasy';
    const expectMessage = `Przelew wykonany! Chuck Demobankowy - ${transferAmount},00PLN - ${transferTitle}`;

    // Act
    const desktopPage = new DesktopPage(page);
    await desktopPage.transferReceiver.selectOption(receiverId);
    await desktopPage.transferAmount.fill(transferAmount);
    await desktopPage.transferTitle.fill(transferTitle);
    await desktopPage.buttonMake.click();
    await desktopPage.buttonClose.click();

    // Assert
    await expect(desktopPage.messageText).toHaveText(expectMessage);
  });

  test('successful mobile phone top-up', async ({ page }) => {
    // Arrange
    const phoneNumber = '502 xxx xxx';
    const topUpAmount = '90';
    const expectMessage = `Doładowanie wykonane! ${topUpAmount},00PLN na numer ${phoneNumber}`;

    // Act
    const desktopPage = new DesktopPage(page);
    await desktopPage.topUpReceiver.selectOption(phoneNumber);
    await desktopPage.topUpAmount.fill(topUpAmount);
    await desktopPage.topUpAgreement.click();
    await desktopPage.topUpPhone.click();
    await desktopPage.buttonClose.click();

    // Assert
    await expect(desktopPage.messageText).toHaveText(expectMessage);
  });

  test('correct balance after successful phone top-up', async ({ page }) => {
    // Arrange
    const phoneNumber = '502 xxx xxx';
    const topUpAmount = '90';
    const initialBalance = await page.locator('#money_value').innerText();
    const expectBalance = Number(initialBalance) - Number(topUpAmount);

    // Act
    const desktopPage = new DesktopPage(page);
    await desktopPage.topUpReceiver.selectOption(phoneNumber);
    await desktopPage.topUpAmount.fill(topUpAmount);
    await desktopPage.topUpAgreement.click();
    await desktopPage.topUpPhone.click();
    await desktopPage.buttonClose.click();

    // Assert
    await expect(desktopPage.moneyValue).toHaveText(`${expectBalance}`);
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test -- tests/e2e_JakTestowacPl
// npm test -- tests/e2e_JakTestowacPl/lesson_13
// npm test -- tests/e2e_JakTestowacPl/lesson_13 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_13/desktop.spec.ts --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_13/desktop.spec.ts --project=chromium --headed
