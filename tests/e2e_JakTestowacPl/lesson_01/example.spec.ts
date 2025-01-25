import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo-bank.vercel.app/');
  await page.getByTestId('login-input').click();
  await page.getByTestId('login-input').fill('testyAdi');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('87654321');
  await page.getByTestId('login-button').click();
  await page.getByTestId('user-name').click();

  // Assert
  await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
});

// run tests:
// npx playwright codegen https://demo-bank.vercel.app/

// npm run open:codegen:demobank
// npm test tests/e2e_JakTestowacPl
// npm test tests/e2e_JakTestowacPl/lesson_01
// npm test -- tests/e2e_JakTestowacPl/lesson_01 --project=chromium
// npm test -- tests/e2e_JakTestowacPl/lesson_01/example.spec.ts --project=chromium
