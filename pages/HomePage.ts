import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class HomePage extends BasePage {
  readonly path: string;
  readonly consentButton: Locator;

  constructor(page: Page) {
    super(page);
    this.path = "/";
    this.consentButton = page.getByRole("button", { name: "Consent" });
  }

  async dismissCookiePrompt() {
    await this.consentButton.click();
  }
}

export default HomePage;
