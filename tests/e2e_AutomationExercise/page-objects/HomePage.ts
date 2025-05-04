import { expect, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navHomePage() {
    await this.page.goto('https://automationexercise.com/');

    // Check if the button exists before you try to click it
    const consentButton = this.page.getByRole('button', { name: 'Consent' });
    if (await consentButton.isVisible()) {
      await consentButton.click();
    }
  }

  // Assertions
  async verifyTitlePage() {
    await expect(this.page).toHaveTitle('Automation Exercise');
  }

  async verifyHomePage() {
    await expect(this.page).toHaveURL('https://automationexercise.com/');
  }

  async verifyUrlCart() {
    await expect(this.page).toHaveURL(
      'https://automationexercise.com/view_cart',
    );
  }
}
