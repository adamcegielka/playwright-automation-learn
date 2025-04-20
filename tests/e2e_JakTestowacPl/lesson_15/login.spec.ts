import { test, expect } from '@playwright/test';
import { loginData } from './test-data/login.data';
import { LoginPage } from './test-page-objects/login.page';

test.describe('User login to Demobank', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    const baseUrl = 'https://demo-bank.vercel.app/';
    await page.goto(baseUrl);
    loginPage = new LoginPage(page);
  });

  test('successful login with too short username', async ({ page }) => {
    // Arrange
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;
    const expectedUserName = 'Jan Demobankowy';

    // Act
    await loginPage.login(userId, userPassword);

    // Assert
    await expect(page.getByTestId('user-name')).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short username', async () => {
    // Arrange
    const shortUserId = 'testy';
    const expectErrorMessage = 'identyfikator ma min. 8 znaków';

    // Act
    await loginPage.loginInput.fill(shortUserId);
    await loginPage.passwordInput.click();

    // Assert
    await expect(loginPage.loginError).toHaveText(expectErrorMessage);
  });

  test('unsuccessful login with too short password', async () => {
    // Arrange
    const userId = loginData.userId;
    const shortUserPassword = '87654';
    const expectErrorMessage = 'hasło ma min. 8 znaków';

    // Act
    await loginPage.loginInput.fill(userId);
    await loginPage.passwordInput.fill(shortUserPassword);
    await loginPage.passwordInput.blur();

    // Assert
    await expect(loginPage.passwordError).toHaveText(expectErrorMessage);
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test -- tests/e2e_JakTestowacPl
// npm test -- tests/e2e_JakTestowacPl/lesson_15
// npm test -- tests/e2e_JakTestowacPl/lesson_15 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_15/login.spec.ts --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_15/login.spec.ts --project=chromium --headed
