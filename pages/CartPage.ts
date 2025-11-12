import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class CartPage extends BasePage {
  readonly path: string;
  breadcrumbText: string;
  readonly checkoutButton1: Locator;

  constructor(page: Page) {
    super(page);
    this.path = "/index.php?rt=checkout/cart";
    this.breadcrumbText = "Basket";
    this.checkoutButton1 = this.page.locator("#cart_checkout1");
  }
}

export default CartPage;
