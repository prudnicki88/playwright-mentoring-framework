import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";

class LoginPage extends BasePage {
  readonly path: string;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.path = "/login";
    this.userNameInput = page.getByLabel("Username");
    this.passwordInput = page.getByLabel("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
  }

  async login(username: string, password: string) {
    await this.userNameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(this.header.container).toContainText(username);
  }
}

export default LoginPage;
