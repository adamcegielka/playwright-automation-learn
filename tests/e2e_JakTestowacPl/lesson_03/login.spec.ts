import { test, expect } from '@playwright/test';

test.describe('User login to Demobank', () => {
  test('successful login with too short username', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('testyAdi');
    await page.getByTestId('password-input').fill('87654321');
    await page.getByTestId('login-button').click();

    // Assert
    await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
  });

  test('unsuccessful login with too short username', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('testy');
    await page.getByTestId('password-input').click();

    // Assert
    await expect(page.getByTestId('error-login-id')).toHaveText(
      'identyfikator ma min. 8 znaków',
    );
  });

  test('unsuccessful login with too short password', async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
    await page.getByTestId('login-input').fill('testyAdi');
    await page.getByTestId('password-input').fill('87654');
    await page.getByTestId('password-input').blur();

    // Assert
    await expect(page.getByTestId('error-login-password')).toHaveText(
      'hasło ma min. 8 znaków',
    );
  });
});

// run tests:
// npm run open:codegen:demobank
// npm test tests/e2e_JakTestowacPl
// npm test tests/e2e_JakTestowacPl/lesson_03
// npm test -- tests/e2e_JakTestowacPl/lesson_03 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_03/login.spec.ts --project=chromium
