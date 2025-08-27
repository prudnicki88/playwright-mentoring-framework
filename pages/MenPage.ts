import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class MenPage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/index.php?rt=product/category&path=58";
    this.breadcrumbText = "Men";
  }
}

export default MenPage;
