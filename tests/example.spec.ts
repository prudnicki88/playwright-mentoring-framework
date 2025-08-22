import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";

test.describe("basic functionality", () => {
  test.beforeEach("navigate to homepage", async ({ homePage }) => {
    await homePage.goTo();
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle("A place to practice your automation skills!");
  });
});

test.describe("navigation tests", () => {
  test.only("navigation", async ({
    homePage,
    apparelPage,
    makeupPage,
    skincarePage,
    fragrancePage,
    menPage,
    hairCarePage,
    booksPage,
  }) => {
    await homePage.nav.navigateTo("Apparel & accessories");
    await apparelPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Makeup");
    await makeupPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Skincare");
    await skincarePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Fragrance");
    await fragrancePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Men");
    await menPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Hair Care");
    await hairCarePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Books");
    await booksPage.verifyBreadcrumb();
  });
});
