import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class HomePage extends BasePage {
  readonly path: string;

  constructor(page: Page) {
    super(page);
    this.path = "/";
  }
}

export default HomePage;
