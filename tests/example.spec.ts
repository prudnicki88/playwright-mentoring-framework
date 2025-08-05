import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";

test.describe("basic functionality", () => {
  test.beforeEach("navigate to homepage", async ({ homePage }) => {
    await homePage.goTo();
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/Armor Games/);
  });

  test("navigation", async ({ homePage, mmoPage }) => {
    await homePage.nav.navigateTo("MMO");
    await mmoPage.verifyBreadcrumb();
  });
});
