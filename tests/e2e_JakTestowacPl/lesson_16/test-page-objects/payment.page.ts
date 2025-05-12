import { Locator, Page } from '@playwright/test';
import { SideMenuComponent } from '../components/side-menu.component';

export class PaymentPage {
  paymentButton: Locator;
  transferReceiver: Locator;
  formAccount: Locator;
  formAmount: Locator;
  makeTransfer: Locator;
  closeButton: Locator;
  messagesExpect: Locator;
  sideMenu: SideMenuComponent;

  constructor(private page: Page) {
    this.sideMenu = new SideMenuComponent(this.page);
    // Act
    this.paymentButton = this.page.getByRole('link', { name: 'płatności' });
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

  // Method moved out of constructor
  async makePayment(transferReceiverName: string, numberAccount: string, transferAmount: string): Promise<void> {
    await this.transferReceiver.fill(transferReceiverName);
    await this.formAccount.fill(numberAccount);
    await this.formAmount.fill(transferAmount);
    await this.makeTransfer.click();
    await this.closeButton.click();
  }
}
