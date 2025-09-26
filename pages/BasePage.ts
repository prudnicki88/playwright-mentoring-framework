import { Locator, Page, expect } from "@playwright/test";
import NavComponent from "./components/NavComponent";
import HeaderComponent from "./components/HeaderComponents";
import ProductCardComponent from "./components/ProductCardComponent";

abstract class BasePage {
  readonly page: Page;
  readonly nav: NavComponent;
  readonly path: string;
  readonly breadcrumb: Locator;
  breadcrumbText: string;
  readonly header: HeaderComponent;

  constructor(page: Page) {
    this.page = page;
    this.nav = new NavComponent(page);
    this.header = new HeaderComponent(page);
    this.breadcrumbText = "";
    this.breadcrumb = this.page.locator(".breadcrumb li:last-child");
  }

  async goTo() {
    await this.page.goto(this.path);
    await expect(this.page).toHaveURL(this.path);
  }

  async verifyBreadcrumb(breadcrumbText = this.breadcrumbText) {
    await expect(this.breadcrumb).toContainText(
      breadcrumbText ? breadcrumbText : this.breadcrumbText
    );
  }

  getProductCard(productName: string, sectionId: string | undefined = undefined) {
    return new ProductCardComponent(this.page, productName, sectionId);
  }
}

export default BasePage;
