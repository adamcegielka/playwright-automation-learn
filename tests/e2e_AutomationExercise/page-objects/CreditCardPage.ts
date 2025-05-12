import { Locator, Page, expect } from '@playwright/test';
import { testPaymentByCarsData } from '../test-data/testPaymentByCard.data';

export class CreditCardPage {
  readonly page: Page;
  readonly cardName: Locator;
  readonly cardNumber: Locator;
  readonly cardCvv: Locator;
  readonly cardExpirationDateMonth: Locator;
  readonly cardExpirationDateYear: Locator;
  readonly buttonPayOrder: Locator;
  readonly verifyMessage: Locator;
  readonly buttonContinue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cardName = page.locator('input[name="name_on_card"]');
    this.cardNumber = page.locator('input[name="card_number"]');
    this.cardCvv = page.getByPlaceholder('ex. 311');
    this.cardExpirationDateMonth = page.getByPlaceholder('MM');
    this.cardExpirationDateYear = page.getByPlaceholder('YYYY');
    this.buttonPayOrder = page.getByRole('button', {
      name: 'Pay and Confirm Order',
    });
    this.verifyMessage = page.locator('.title.text-center');
    this.buttonContinue = page.getByRole('link', { name: 'Continue' });
  }

  async enterPaymentDetails() {
    const cardName = testPaymentByCarsData.cardVendor;
    const cardNumber = testPaymentByCarsData.cardNumber;
    const cardCvv = testPaymentByCarsData.cardCvv;
    const cardExpirationDateMonth = testPaymentByCarsData.cardExpirationDateMonth;
    const cardExpirationDateYear = testPaymentByCarsData.cardExpirationDateYear;
    await this.cardName.fill(cardName);
    await this.cardNumber.fill(cardNumber);
    await this.cardCvv.fill(cardCvv);
    await this.cardExpirationDateMonth.fill(cardExpirationDateMonth);
    await this.cardExpirationDateYear.fill(cardExpirationDateYear);
  }

  async confirmOrder() {
    await this.buttonPayOrder.click();
  }

  async clickContinue() {
    await this.buttonContinue.click();
  }

  async messageOrderPlaced() {
    await expect(this.verifyMessage).toContainText('Order Placed!');
  }
}
