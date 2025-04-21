import { Page } from '@playwright/test';

export class SideMenuComponent {
  paymentButton;

  constructor(private page: Page) {
    this.paymentButton = this.page.getByRole('link', { name: 'płatności' });
  }
}
