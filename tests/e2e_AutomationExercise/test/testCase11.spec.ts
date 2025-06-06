import { test, expect, chromium } from '@playwright/test';
import { testCase11Data } from '../test-data/testCase11.data';
import { HomePage } from '../page-objects/HomePage';
import { Navbar } from '../page-objects/components/Navbar';

test.describe('Test Case 11: Verify Subscription in Cart page', () => {
  test('TC11 POM verify subscription in cart page', async ({ page }) => {
    const homePage = new HomePage(page);
    const navbar = new Navbar(page);

    const subscription = testCase11Data.subscription;
    const emailSubscription = testCase11Data.emailSubscription;
    const messageSubscription = testCase11Data.messageSubscription;

    // Blocking of network resources that generate Ads
    await page.route('**/*', (route) => {
      route.request().url().startsWith('https://googleads.') ? route.abort() : route.continue();
      return;
    });
    // --- End code

    await chromium.launch();
    await homePage.navHomePage();
    await homePage.verifyHomePage();
    await homePage.verifyTitlePage();
    await navbar.clickOnNav('Cart');
    await page.evaluate(() => {
      const footerElement = document.querySelector('footer');
      if (footerElement) footerElement.scrollIntoView();
    });
    const verifyText = await page.locator('.single-widget');
    await expect(verifyText).toContainText(subscription);
    await page.type('#susbscribe_email', emailSubscription);
    await page.click('#subscribe');
    const verifyMessage = await page.locator('#footer');
    await expect(verifyMessage).toContainText(messageSubscription);
  });
});

/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Cart' button
5. Scroll down to footer
6. Verify text 'SUBSCRIPTION'
7. Enter email address in input and click arrow button
8. Verify success message 'You have been successfully subscribed!' is visible
*/
