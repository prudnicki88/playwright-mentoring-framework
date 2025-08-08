import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class ActionPage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/category/action-games";
    this.breadcrumbText = "Action Games";
  }
}

export default ActionPage;
