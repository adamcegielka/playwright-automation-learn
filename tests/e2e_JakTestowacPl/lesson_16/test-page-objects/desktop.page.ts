import { Locator, Page } from '@playwright/test';
import { SideMenuComponent } from '../components/side-menu.component';

export class DesktopPage {
  transferReceiver: Locator;
  transferAmount: Locator;
  transferTitle: Locator;
  buttonMake: Locator;
  buttonClose: Locator;
  messageText: Locator;
  topUpReceiver: Locator;
  topUpAmount: Locator;
  topUpAgreement: Locator;
  topUpPhone: Locator;
  moneyValue: Locator;
  userName: Locator;
  sideMenu: SideMenuComponent;

  constructor(private page: Page) {
    this.sideMenu = new SideMenuComponent(this.page);

    // Act
    this.transferReceiver = this.page.locator('#widget_1_transfer_receiver');
    this.transferAmount = this.page.locator('#widget_1_transfer_amount');
    this.transferTitle = this.page.locator('#widget_1_transfer_title');
    this.buttonMake = this.page.getByRole('button', { name: 'wykonaj' });
    this.buttonClose = this.page.getByTestId('close-button');

    // Assert
    this.messageText = this.page.locator('#show_messages');

    // Act
    this.topUpReceiver = this.page.locator('#widget_1_topup_receiver');
    this.topUpAmount = this.page.locator('#widget_1_topup_amount');
    this.topUpAgreement = this.page.locator('#uniform-widget_1_topup_agreement span');
    this.topUpPhone = this.page.getByRole('button', {
      name: 'doładuj telefon',
    });

    this.moneyValue = this.page.locator('#money_value');
    this.userName = this.page.getByTestId('user-name');
  }
}
