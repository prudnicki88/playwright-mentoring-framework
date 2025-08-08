import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class TowerDefensePage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/category/tower-defense-games";
    this.breadcrumbText = "Tower Defense Games";
  }
}

export default TowerDefensePage;
