import { expect, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navHomePage() {
    await this.page.goto('https://automationexercise.com/');
    await this.page.getByRole('button', { name: 'Consent' }).click();
    // await this.page.getByRole('button', { name: 'Zgadzam się' }).click(); // for Polish
  }

  // Assertions
  async verifyTitlePage() {
    await expect(this.page).toHaveTitle('Automation Exercise');
  }

  async verifyHomePage() {
    await expect(this.page).toHaveURL('https://automationexercise.com/');
  }

  async verifyUrlCart() {
    await expect(this.page).toHaveURL('https://automationexercise.com/view_cart');
  }
}