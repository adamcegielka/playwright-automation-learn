import { test, expect, chromium } from '@playwright/test';

test.describe('First Tests', () => {
  let browser;
  let page;

  test.beforeEach(async () => {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
  });

  test.afterEach(async () => {
    await browser.close();
  });

  test('Open Zero Bank site', async () => {
    const url = 'http://zero.webappsecurity.com/';
    await page.goto(url);

    // Assertions
    await expect(page).toHaveURL(url);
    await expect(page).toHaveTitle(/Zero - Personal Banking - Loans - Credit Cards/);
  });

  test('incorrect login validation', async () => {
    const url = 'http://zero.webappsecurity.com/';
    await page.goto(url);

    await page.click('#signin_button');
    await page.type('#user_login', 'some username');
    await page.type('#user_password', '123456');
    await page.click('text=Sign in');

    // Assertions
    const errorMessage = await page.locator('.alert-error');
    await expect(errorMessage).toContainText('Login and/or password are wrong.');
  });
});
