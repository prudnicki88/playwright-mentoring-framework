import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class SkincarePage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/index.php?rt=product/category&path=43";
    this.breadcrumbText = "	    	Skincare	    ";
  }
}

export default SkincarePage;
