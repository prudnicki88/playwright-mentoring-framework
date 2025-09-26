import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class CartPage extends BasePage {
  readonly path: string;
  breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/index.php?rt=checkout/cart";
    this.breadcrumbText = "Basket";
  }
}

export default CartPage;
