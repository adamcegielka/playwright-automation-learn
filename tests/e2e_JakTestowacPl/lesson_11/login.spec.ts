import { test, expect } from '@playwright/test';
import { loginData } from './test-data/login.data';
import { LoginPage } from './page-objects/login.page';

test.describe('User login to Demobank', () => {
  test.beforeEach(async ({ page }) => {
    const baseUrl = 'https://demo-bank.vercel.app/';
    await page.goto(baseUrl);
  });

  test('successful login with too short username', async ({ page }) => {
    // Arrange
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;
    const expectedUserName = 'Jan Demobankowy';

    // Act
    const loginPage = new LoginPage(page);
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(userPassword);
    await loginPage.loginButton.click();

    // Assert
    await expect(page.getByTestId('user-name')).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short username', async ({ page }) => {
    // Arrange
    const shortUserId = 'testy';
    const expectErrorMessage = 'identyfikator ma min. 8 znaków';

    // Act
    await page.getByTestId('login-input').fill(shortUserId);
    await page.getByTestId('password-input').click();

    // Assert
    await expect(page.getByTestId('error-login-id')).toHaveText(
      expectErrorMessage,
    );
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    // Arrange
    const userId = loginData.userId;
    const shortUserPassword = '87654';
    const expectErrorMessage = 'hasło ma min. 8 znaków';

    // Act
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(shortUserPassword);
    await page.getByTestId('password-input').blur();

    // Assert
    await expect(page.getByTestId('error-login-password')).toHaveText(
      expectErrorMessage,
    );
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test -- tests/e2e_JakTestowacPl
// npm test -- tests/e2e_JakTestowacPl/lesson_11
// npm test -- tests/e2e_JakTestowacPl/lesson_11 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_11/login.spec.ts --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_11/login.spec.ts --project=chromium --headed
