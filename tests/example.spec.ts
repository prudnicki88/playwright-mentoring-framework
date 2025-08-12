import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";

test.describe("basic functionality", () => {
  test.beforeEach("navigate to homepage", async ({ homePage }) => {
    await homePage.goTo();
    await homePage.dismissCookiePrompt();
  });

  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/Armor Games/);
  });
});

test.describe("navigation tests", () => {
  test("navigation", async ({
    homePage,
    mmoPage,
    strategyPage,
    shootingPage,
    actionPage,
    adventurePage,
    puzzlePage,
    towerDefensePage,
    idlePage,
  }) => {
    await homePage.nav.navigateTo("MMO");
    await mmoPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Strategy");
    await strategyPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Shooting");
    await shootingPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Action");
    await actionPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Adventure");
    await adventurePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Puzzle");
    await puzzlePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Tower Defense");
    await towerDefensePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Idle");
    await idlePage.verifyBreadcrumb();
  });
});


