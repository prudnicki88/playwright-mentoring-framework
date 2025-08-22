import { Page, Locator, expect } from "@playwright/test";
type LinkText = "Home" | "Apparel & accessories" | "Makeup" | "Skincare" | "Fragrance" | "Men" | "Hair Care" | "Books";

class NavComponent {
  readonly page: Page;
  readonly navLink: (linkText: LinkText) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.navLink = (linkText: LinkText) => page.getByRole("link", { name: linkText });
  }

  async navigateTo(linkText: LinkText) {
    await this.navLink(linkText).click();
    if (linkText === "Home") {
      await expect(this.page).toHaveTitle(new RegExp("A place to practice your automation skills!"));
    } else {
      await expect(this.page).toHaveTitle(new RegExp(`^${linkText}.*`));
    }
  }
}

export default NavComponent;
