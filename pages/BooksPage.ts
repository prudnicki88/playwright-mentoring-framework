import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class BooksPage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/index.php?rt=product/category&path=65";
    this.breadcrumbText = "Books";
  }
}

export default BooksPage;
