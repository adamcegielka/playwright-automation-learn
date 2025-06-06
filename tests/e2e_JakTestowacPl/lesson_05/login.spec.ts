import { test, expect } from '@playwright/test';

test.describe('User login to Demobank', () => {
  const baseUrl = 'https://demo-bank.vercel.app/';

  test('successful login with too short username', async ({ page }) => {
    // Arrange
    const userId = 'testyAdi';
    const userPassword = '87654321';
    const expectedUserName = 'Jan Demobankowy';

    // Act
    await page.goto(baseUrl);
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('login-button').click();

    // Assert
    await expect(page.getByTestId('user-name')).toHaveText(expectedUserName);
  });

  test('unsuccessful login with too short username', async ({ page }) => {
    // Arrange
    const userId = 'testy';
    const expectedErrorLogin = 'identyfikator ma min. 8 znaków';

    // Act
    await page.goto(baseUrl);
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').click();

    // Assert
    await expect(page.getByTestId('error-login-id')).toHaveText(expectedErrorLogin);
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    // Arrange
    const userId = 'testyAdi';
    const userPassword = '87654';
    const expectedErrorPassword = 'hasło ma min. 8 znaków';

    // Act
    await page.goto(baseUrl);
    await page.getByTestId('login-input').fill(userId);
    await page.getByTestId('password-input').fill(userPassword);
    await page.getByTestId('password-input').blur();

    // Assert
    await expect(page.getByTestId('error-login-password')).toHaveText(expectedErrorPassword);
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test -- tests/e2e_JakTestowacPl
// npm test -- tests/e2e_JakTestowacPl/lesson_05
// npm test -- tests/e2e_JakTestowacPl/lesson_05 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_05/login.spec.ts --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_05/login.spec.ts --project=chromium --headed
