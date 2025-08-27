import { test } from "../fixtures/fixtures";

test.beforeEach("navigate to homepage", async ({ homePage }) => {
  await homePage.goTo();
});

test.describe("navigation tests", () => {
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

  test("navigation - skincare", async ({ homePage, skincarePage }) => {
    await homePage.nav.navigateTo("Skincare");
    await skincarePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Skincare", "Eyes");
    await skincarePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Skincare", "Face");
    await skincarePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Skincare", "Gift Ideas & Sets");
    await skincarePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Skincare", "Hands & Nails");
    await skincarePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Skincare", "Sun");
    await skincarePage.verifyBreadcrumb();
  });

  test("navigation - fragrance", async ({ homePage, fragrancePage }) => {
    await homePage.nav.navigateTo("Fragrance");
    await fragrancePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Fragrance", "Men");
    await fragrancePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Fragrance", "Women");
    await fragrancePage.verifyBreadcrumb();
  });

  test("navigation - men", async ({ homePage, menPage }) => {
    await homePage.nav.navigateTo("Men");
    await menPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Men", "Body & Shower");
    await menPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Men", "Fragrance Sets");
    await menPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Men", "Pre-Shave & Shaving");
    await menPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Men", "Skincare");
    await menPage.verifyBreadcrumb();
  });

  test("navigation - hair care", async ({ homePage, hairCarePage }) => {
    await homePage.nav.navigateTo("Hair Care");
    await hairCarePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Hair Care", "Conditioner");
    await hairCarePage.verifyBreadcrumb("Conditioner");
    await homePage.nav.navigateTo("Hair Care", "Shampoo");
    await hairCarePage.verifyBreadcrumb("Shampoo");
  });

  test("navigation - books", async ({ homePage, booksPage }) => {
    await homePage.nav.navigateTo("Books");
    await booksPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Books", "Audio CD");
    await booksPage.verifyBreadcrumb("Audio CD");
    await homePage.nav.navigateTo("Books", "Paperback");
    await booksPage.verifyBreadcrumb("Paperback");
  });
});
