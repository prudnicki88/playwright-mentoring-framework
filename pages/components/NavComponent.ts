import { Page, Locator, expect } from "@playwright/test";
type LinkText =
  | "Home"
  | "Apparel & accessories"
  | "Makeup"
  | "Skincare"
  | "Fragrance"
  | "Men"
  | "Hair Care"
  | "Books";
type SubLinkText =
  | "Shoes"
  | "T-shirts"
  | "Cheeks"
  | "Eyes"
  | "Face"
  | "Lips"
  | "Nails"
  | "Value Sets"
  | "Gift Ideas & Sets"
  | "Hands & Nails"
  | "Sun"
  | "Men"
  | "Women"
  | "Body & Shower"
  | "Fragrance Sets"
  | "Pre-Shave & Shaving"
  | "Skincare"
  | "Conditioner"
  | "Shampoo"
  | "Audio CD"
  | "Paperback";

class NavComponent {
  readonly page: Page;
  readonly navLink: (linkText: LinkText) => Locator;
  readonly subNavLink: (linkText: LinkText, subLinkText: SubLinkText) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.navLink = (linkText: LinkText) =>
      page.locator(".subnav > ul > li > a", { hasText: linkText });
    this.subNavLink = (linkText: LinkText, subLinkText: string) =>
      this.navLink(linkText)
        .locator("xpath=ancestor::li")
        .locator("div.subcategories > ul > li > a", {
          hasText: new RegExp(`^\\s*${subLinkText}\\s*$`),
        });
  }

  async navigateTo(linkText: LinkText, subLinkText?: SubLinkText) {
    if (subLinkText) {
      await this.navLink(linkText).hover();
      await this.subNavLink(linkText, subLinkText).click();
      await expect(this.page).toHaveTitle(new RegExp(`^${subLinkText}.*`));
    } else {
      await this.navLink(linkText).click();
      if (linkText === "Home") {
        await expect(this.page).toHaveTitle(
          new RegExp("A place to practice your automation skills!")
        );
      } else {
        await expect(this.page).toHaveTitle(new RegExp(`^${linkText}.*`));
      }
    }
  }
}

export default NavComponent;
