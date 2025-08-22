import { Page, Locator, expect } from "@playwright/test";
type LinkText = "Home" | "Apparel & accessories" | "Makeup" | "Skincare" | "Fragrance" | "Men" | "Hair Care" | "Books";

class NavComponent {
  readonly page: Page;
  readonly navLink: (linkText: LinkText) => Locator;
  readonly subNavLink: (linkText: LinkText, subLinkText: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.navLink = (linkText: LinkText) => page.locator(".subnav > ul > li > a", { hasText: linkText });
    this.subNavLink = (linkText: LinkText, subLinkText: string) =>
      this.navLink(linkText).locator("xpath=..").locator("div.subcategories > ul > li > a", { hasText: subLinkText });
  }

  async navigateTo(linkText: LinkText, subLinkText?: string) {
    if (subLinkText) {
      await this.navLink(linkText).hover();
      await this.subNavLink(linkText, subLinkText).click();
      await expect(this.page).toHaveTitle(new RegExp(`^${subLinkText}.*`));
    } else {
      await this.navLink(linkText).click();
      if (linkText === "Home") {
        await expect(this.page).toHaveTitle(new RegExp("A place to practice your automation skills!"));
      } else {
        await expect(this.page).toHaveTitle(new RegExp(`^${linkText}.*`));
      }
    }
  }
}

export default NavComponent;
