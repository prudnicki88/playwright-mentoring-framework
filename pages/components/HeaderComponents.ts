import { Page, Locator } from "@playwright/test";
class HeaderComponent {
  readonly page: Page;
  readonly container: Locator;
  readonly cartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.container = page.locator("div.headerstrip");
    this.cartButton = this.container.locator("span.menu_text").getByText("Cart");
  }
}

export default HeaderComponent;
