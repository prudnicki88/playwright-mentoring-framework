import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class StrategyPage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/category/strategy-games";
    this.breadcrumbText = "Strategy Games";
  }
}

export default StrategyPage;
