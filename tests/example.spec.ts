import { test } from "../fixtures/fixtures";

test.describe("basic functionality", () => {
  test.beforeEach("navigate to homepage", async ({ homePage }) => {
    await homePage.goTo();
  });

  test("has title", async ({ homePage }) => {
    await homePage.goTo();
  });
});

test.describe("navigation tests", () => {
  test.beforeEach("navigate to homepage", async ({ homePage }) => {
    await homePage.goTo();
  });
  test("navigation - apparel", async ({ homePage, apparelPage }) => {
    await homePage.nav.navigateTo("Apparel & accessories");
    await apparelPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Apparel & accessories", "Shoes");
    await apparelPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Apparel & accessories", "T-shirts");
    await apparelPage.verifyBreadcrumb();
  });
  test("navigation - makeup", async ({ homePage, makeupPage }) => {
    await homePage.nav.navigateTo("Makeup");
    await makeupPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Makeup", "Cheeks");
    await makeupPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Makeup", "Eyes");
    await makeupPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Makeup", "Face");
    await makeupPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Makeup", "Lips");
    await makeupPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Makeup", "Nails");
    await makeupPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Makeup", "Value Sets");
    await makeupPage.verifyBreadcrumb();
  });

  test("navigation all", async ({
    homePage,
    apparelPage,
    makeupPage,
    skincarePage,
    fragrancePage,
    menPage,
    hairCarePage,
    booksPage,
    page,
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
    await homePage.nav.navigateTo("Apparel & accessories", "Shoes");
    await apparelPage.verifyBreadcrumb();
  });
});
