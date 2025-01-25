import { test, expect, chromium } from '@playwright/test';

test.describe('Open Page', () => {
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

  test('Open Automation Test Store', async () => {
    const url = 'https://automationteststore.com/';
    await page.goto(url);

    // Assertions
    await expect(page).toHaveURL(url);
    await expect(page).toHaveTitle(
      /A place to practice your automation skills!/,
    );
  });
});
