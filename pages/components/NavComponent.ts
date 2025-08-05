import { Page, Locator, expect } from "@playwright/test";
type LinkText =
  | "MMO"
  | "Strategy"
  | "Shooting"
  | "Action"
  | "Adventure"
  | "Puzzle"
  | "Tower Defense"
  | "Idle"
  | "More"
  | "Forums"
  | "Developer Portal";

class NavComponent {
  readonly page: Page;
  readonly navLink: (linkText: LinkText) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.navLink = (linkText: LinkText) => page.getByRole("link", { name: linkText, exact: true });
  }

  async navigateTo(linkText: LinkText) {
    await this.navLink(linkText).click();
    if (linkText === "More") {
      await expect(this.page).toHaveTitle("Play Free Games Online at Armor Games");
    } else if (linkText === "Forums") {
      await expect(this.page).toHaveTitle("Armor Games Community");
    } else if (linkText === "Developer Portal") {
      await expect(this.page).toHaveTitle("Armor Games - Developers");
    } else {
      await expect(this.page).toHaveTitle(new RegExp(`^${linkText}.*`));
    }
  }
}

export default NavComponent;
