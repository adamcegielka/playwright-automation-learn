import { test, expect, chromium } from '@playwright/test';
import { testCase19Data } from '../test-data/testCase19.data';
import { HomePage } from '../page-objects/HomePage';
import { Navbar } from '../page-objects/components/Navbar';
import { Sidebar } from '../page-objects/components/Sidebar';

test.describe('Test Case 19: View & Cart Brand Products', () => {
  test('TC19 POM view & cart brand products', async ({ page }) => {
    const homePage = new HomePage(page);
    const navbar = new Navbar(page);
    const sidebar = new Sidebar(page);

    const verifyBrandsPolo = testCase19Data.verifyBrandsPolo;
    const verifyBrandPoloProducts = testCase19Data.verifyBrandPoloProducts;
    const verifyBrandPoloProductsAll = testCase19Data.verifyBrandPoloProductsAll;
    const verifyBrandBabyhugProducts = testCase19Data.verifyBrandBabyhugProducts;
    const verifyBrandBabyhugProductsAll = testCase19Data.verifyBrandBabyhugProductsAll;

    // Blocking of network resources that generate Ads
    await page.route('**/*', (route) => {
      route.request().url().startsWith('https://googleads.') ? route.abort() : route.continue();
      return;
    });
    // --- End code

    await chromium.launch();
    await homePage.navHomePage();
    await navbar.clickOnNav('Products');
    await expect(page.getByText(verifyBrandsPolo)).toBeVisible();
    await sidebar.brands('Polo');
    await expect(page.getByRole('heading', { name: verifyBrandPoloProducts })).toBeVisible();
    await expect(page.getByText(verifyBrandPoloProductsAll)).toBeVisible();
    await sidebar.brands('Babyhug');
    await expect(page.getByRole('heading', { name: verifyBrandBabyhugProducts })).toBeVisible();
    await expect(page.getByText(verifyBrandBabyhugProductsAll)).toBeVisible();
  });
});

/*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Click on 'Products' button
4. Verify that Brands are visible on left side bar
5. Click on any brand name
6. Verify that user is navigated to brand page and brand products are displayed
7. On left side bar, click on any other brand link
8. Verify that user is navigated to that brand page and can see products
*/
