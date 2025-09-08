import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class ProductPage extends BasePage {
  readonly productHeader: () => Locator;
  readonly productName: string;

  constructor(page: Page, productName: string) {
    super(page);
    this.productName = productName;
    this.productHeader = () => page.locator("h1.productname", { hasText: this.productName });
  }
}

export default ProductPage;
