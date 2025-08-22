import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class HairCarePage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/index.php?rt=product/category&path=52";
    this.breadcrumbText = "	    	Hair Care	    ";
  }
}

export default HairCarePage;
