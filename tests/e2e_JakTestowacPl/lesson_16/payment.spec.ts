import { test, expect } from '@playwright/test';
import { loginData } from './test-data/login.data';
import { LoginPage } from './test-page-objects/login.page';
import { PaymentPage } from './test-page-objects/payment.page';

test.describe('Payment testing', () => {
  let paymentPage: PaymentPage;

  test.beforeEach(async ({ page }) => {
    const baseUrl = 'https://demo-bank.vercel.app/';
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;

    await page.goto(baseUrl);
    const loginPage = new LoginPage(page);
    await loginPage.login(userId, userPassword);

    paymentPage = new PaymentPage(page);
    await paymentPage.sideMenu.paymentButton.click();
  });

  test('easy payment', async () => {
    // Arrange
    const transferReceiverName = 'Smok Wawelski';
    const numberAccount = '12 3456 7891 2345 5678 9123 4567';
    const transferAmount = '102';
    const expectMessage = `Przelew wykonany! ${transferAmount},00PLN dla Smok Wawelski`;

    // Act
    await paymentPage.makePayment(transferReceiverName, numberAccount, transferAmount);

    // Assert
    await expect(paymentPage.messagesExpect).toHaveText(expectMessage);
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test -- tests/e2e_JakTestowacPl
// npm test -- tests/e2e_JakTestowacPl/lesson_16
// npm test -- tests/e2e_JakTestowacPl/lesson_16 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_16/payment.spec.ts --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_16/payment.spec.ts --project=chromium --headed
