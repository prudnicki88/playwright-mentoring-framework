import { expect, Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";
import HeaderComponent from "./components/HeaderComponents";

class LoginPage extends BasePage {
  readonly path: string;
  readonly breadcrumbText: string;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.path = "/index.php?rt=account/login";
    this.breadcrumbText = "Login";
    this.usernameInput = this.page.locator("#loginFrm_loginname");
    this.passwordInput = this.page.locator("#loginFrm_password");
    this.loginButton = this.page.getByRole("button", { name: "Login" });
  }

  async login(username: string, password: string, userFirstName: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await expect(new HeaderComponent(this.page).container).toContainText(`Welcome back ${userFirstName}`);
  }
}

export default LoginPage;
