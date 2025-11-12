import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class ConfirmPage extends BasePage {
  readonly path: string;
  breadcrumbText: string;
  readonly confirmButton: Locator;

  constructor(page: Page) {
    super(page);
    this.path = "/index.php?rt=checkout/confirm";
    this.breadcrumbText = "Confirm";
    this.confirmButton = this.page.locator("#checkout_btn");
  }
}

export default ConfirmPage;
