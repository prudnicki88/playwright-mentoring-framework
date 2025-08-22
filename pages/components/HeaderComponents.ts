import { Page, Locator, expect } from "@playwright/test";
class HeaderComponent {
  readonly page: Page;
  readonly container: Locator;

  constructor(page: Page) {
    this.page = page;
    this.container = page.locator("div.headerstrip");
  }
}

export default HeaderComponent;
