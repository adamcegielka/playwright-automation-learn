import { test } from '@playwright/test';
import { HomePage } from '../page-objects/HomePage';
import { RegistrationUser } from '../page-objects/RegistrationUser';
import { LoginPage } from '../page-objects/LoginPage';
import { Navbar } from '../page-objects/components/Navbar';
import { DeletionUser } from '../page-objects/DeletionUser';

test.describe.skip('User Registration and Deletion', () => {
  let homePage: HomePage;
  let navbar: Navbar;

  test.beforeEach(async ({ page }) => {
    // Blocking of network resources that generate Ads
    await page.route('**/*', (route) => {
      route.request().url().startsWith('https://googleads.') ? route.abort() : route.continue();
    });
  });

  test('Test 01: Create user account', async ({ page }) => {
    homePage = new HomePage(page);
    navbar = new Navbar(page);
    const registerUser = new RegistrationUser(page);
    const loginPage = new LoginPage(page);

    await homePage.navHomePage();
    await navbar.clickOnNav('Signup / Login');
    await registerUser.enterNameEmail();
    await registerUser.createAccount();
    await registerUser.clickButton();
    await loginPage.logout();
  });

  test('Test 02: Delete user account', async ({ page }) => {
    homePage = new HomePage(page);
    navbar = new Navbar(page);
    const loginPage = new LoginPage(page);
    const deletionUser = new DeletionUser(page);

    await homePage.navHomePage();
    await homePage.verifyTitlePage();
    await homePage.verifyHomePage();
    await navbar.clickOnNav('Signup / Login');
    await loginPage.login();
    await deletionUser.clickDeleteButton();
    await deletionUser.messageAccountDeleted();
    await deletionUser.clickContinueButton();
  });
});
