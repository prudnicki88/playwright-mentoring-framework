import { Page, Locator } from "@playwright/test";
class ProductCardComponent {
  readonly page: Page;
  readonly productName: string;
  readonly sectionId: string | undefined;
  readonly container: (productName: string, sectionId?: string) => Locator;
  readonly addToCartButton: () => Locator;
  readonly price: () => Promise<string | null>;
  readonly thumbnail: () => Locator;

  constructor(page: Page, productName: string, sectionId: string | undefined = undefined) {
    this.page = page;
    this.productName = productName;
    this.sectionId = sectionId;
    this.container = () =>
      this.sectionId
        ? page
            .locator(`section#${sectionId}`)
            .locator("a.prdocutname", { hasText: productName })
            .locator("xpath=../../..")
        : page.locator("a.prdocutname", { hasText: productName }).locator("xpath=../../..");
    this.addToCartButton = () => this.container(this.productName).locator("i.fa-cart-plus");
    this.price = () => this.container(this.productName, this.sectionId).locator("div.oneprice").textContent();
    this.thumbnail = () => this.container(this.productName, this.sectionId).locator("div.thumbnail > a");
  }
}

export default ProductCardComponent;
