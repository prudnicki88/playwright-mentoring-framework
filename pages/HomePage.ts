import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import ProductCardComponent from "./components/ProductCard";

class HomePage extends BasePage {
  readonly path: string;

  constructor(page: Page) {
    super(page);
    this.path = "/";
  }

  getProductCard(productName: string, sectionId: string | undefined = undefined) {
    return new ProductCardComponent(this.page, productName, sectionId);
  }
}

export default HomePage;
