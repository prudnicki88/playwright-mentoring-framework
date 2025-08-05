import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class MMOPage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/category/mmo-games";
    this.breadcrumbText = "MMO Games";
  }
}

export default MMOPage;
