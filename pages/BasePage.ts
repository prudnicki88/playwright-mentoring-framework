import { Locator, Page, expect } from "@playwright/test";
import NavComponent from "./components/NavComponent";
import HeaderComponent from "./components/HeaderComponents";

abstract class BasePage {
  readonly page: Page;
  readonly nav: NavComponent;
  readonly path: string;
  readonly breadcrumb: Locator;
  readonly breadcrumbText: string;
  readonly header: HeaderComponent;

  constructor(page: Page) {
    this.page = page;
    this.nav = new NavComponent(page);
    this.header = new HeaderComponent(page);
    this.breadcrumb = this.page.locator(".breadcrumb");
  }

  async goTo() {
    await this.page.goto(this.path);
    await expect(this.page).toHaveURL(this.path);
  }

  async verifyBreadcrumb(breadcrumbText = this.breadcrumbText) {
    await expect(this.breadcrumb).toContainText(breadcrumbText);
  }
}

export default BasePage;
