import { Locator, Page, expect } from "@playwright/test";
import BasePage from "./BasePage";

class ProductPage extends BasePage {
  readonly productHeader: () => Locator;
  readonly productName: string;
  readonly priceContainer: Locator;
  readonly totalPriceContainer: Locator;
  readonly quantityInput: Locator;
  readonly addToCartButton: Locator;
  price: string;

  constructor(page: Page, productName: string) {
    super(page);
    this.productName = productName;
    this.productHeader = () => page.locator("h1.productname", { hasText: this.productName });
    this.priceContainer = page.locator("div.productfilneprice");
    this.totalPriceContainer = page.locator(".total-price");
    this.quantityInput = page.locator("input#product_quantity");
    this.addToCartButton = page.locator("a.cart");
    this.price = "";
  }
  async verifyProductHeader() {
    await expect(this.productHeader()).toHaveText(this.productName);
  }
  async verifyPrice(price: string) {
    await expect(this.priceContainer).toContainText(price);
  }
  async verifyTotalPrice(price: string) {
    await expect(this.totalPriceContainer).toContainText(price);
  }
  async setQuantity(quantity: string) {
    await this.quantityInput.fill(quantity);
  }
  async addToCart() {
    await this.addToCartButton.click();
  }
  async extractPrice() {
    const priceText = await this.priceContainer.textContent();
    return priceText;
  }
}

export default ProductPage;
