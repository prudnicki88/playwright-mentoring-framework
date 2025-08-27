import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class MakeupPage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/index.php?rt=product/category&path=36";
    this.breadcrumbText = "Makeup";
  }
}

export default MakeupPage;
