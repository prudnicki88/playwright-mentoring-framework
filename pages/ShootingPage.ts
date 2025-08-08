import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class ShootingPage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/category/shooting-games";
    this.breadcrumbText = "Shooting Games";
  }
}

export default ShootingPage;
