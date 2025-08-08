import { Page } from "@playwright/test";
import BasePage from "./BasePage";

class PuzzlePage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;

  constructor(page: Page) {
    super(page);
    this.path = "/category/puzzle-skill-games";
    this.breadcrumbText = "Puzzle-Skill Games";
  }
}

export default PuzzlePage;
