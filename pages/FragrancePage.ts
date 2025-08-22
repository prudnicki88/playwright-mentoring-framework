import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class FragrancePage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "index.php?rt=product/category&path=49";
    this.breadcrumbText = "	    	Fragrance	    ";
  }
}

export default FragrancePage;
