import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class IdlePage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/category/idle-games";
    this.breadcrumbText = "Idle Games";
  }
}

export default IdlePage;
