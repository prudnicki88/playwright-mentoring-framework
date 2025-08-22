import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class ApparelPage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/index.php?rt=product/category&path=68";
    this.breadcrumbText = "	    	Apparel & accessories	    ";
  }
}

export default ApparelPage;
