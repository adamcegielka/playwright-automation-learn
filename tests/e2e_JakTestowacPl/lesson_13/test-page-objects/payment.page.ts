import { Locator, Page } from '@playwright/test';

export class PaymentPage {
  paymentsButton: Locator;
  transferReceiver: Locator;
  formAccount: Locator;
  formAmount: Locator;
  makeTransfer: Locator;
  closeButton: Locator;
  messagesExpect: Locator;

  constructor(private page: Page) {
    // Act
    this.paymentsButton = this.page.getByRole('link', { name: 'płatności' });
    this.transferReceiver = this.page.getByTestId('transfer_receiver');
    this.formAccount = this.page.getByTestId('form_account_to');
    this.formAmount = this.page.getByTestId('form_amount');
    this.makeTransfer = this.page.getByRole('button', {
      name: 'wykonaj przelew',
    });

    this.closeButton = this.page.getByTestId('close-button');
    // Assert
    this.messagesExpect = this.page.locator('#show_messages');
  }
}
