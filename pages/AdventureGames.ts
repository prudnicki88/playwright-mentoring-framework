import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class AdventurePage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/category/adventure-games";
    this.breadcrumbText = "Adventure Games";
  }
}

export default AdventurePage;
