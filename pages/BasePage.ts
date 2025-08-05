import { Locator, Page, expect } from "@playwright/test";
import NavComponent from "./components/NavComponent";

abstract class BasePage {
  readonly page: Page;
  readonly nav: NavComponent;
  readonly path: string;
  readonly breadcrumb: Locator;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    this.page = page;
    this.nav = new NavComponent(page);
    this.breadcrumb = this.page.locator(".ex-breadcrumb");
  }

  async goTo() {
    await this.page.goto(this.path);
    await expect(this.page).toHaveURL(this.path);
  }

  async verifyBreadcrumb() {
    await expect(this.breadcrumb).toContainText(this.breadcrumbText);
  }
}

export default BasePage;
