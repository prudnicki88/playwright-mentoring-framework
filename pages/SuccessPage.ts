import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class SuccessPage extends BasePage {
  readonly path: string;
  breadcrumbText: string;
  readonly mainContainer: Locator;

  constructor(page: Page) {
    super(page);
    this.path = "/index.php?rt=checkout/success";
    this.breadcrumbText = "Success";
    this.mainContainer = this.page.locator("#maincontainer");
  }

  async verifyOrderProcessedText() {
    await expect(this.mainContainer).toContainText("Your Order Has Been Processed!");
    await expect(this.mainContainer).toContainText(/Your order #\d{5} has been created!/);
  }
}

export default SuccessPage;
