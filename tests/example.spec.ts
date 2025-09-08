import { test } from "../fixtures/fixtures";
import ProductCardComponent from "../pages/components/ProductCard";

test.beforeEach("navigate to homepage", async ({ homePage }) => {
  await homePage.goTo();
});

test("navigation tests", async ({
  homePage,
  apparelPage,
  makeupPage,
  skincarePage,
  fragrancePage,
  hairCarePage,
  menPage,
  booksPage,
}) => {
  await test.step("navigation - apparel", async () => {
    await homePage.nav.navigateTo("Apparel & accessories");
    await apparelPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Apparel & accessories", "Shoes");
    await apparelPage.verifyBreadcrumb("Shoes");
    await homePage.nav.navigateTo("Apparel & accessories", "T-shirts");
    await apparelPage.verifyBreadcrumb("T-shirts");
  });
  await test.step("navigation - makeup", async () => {
    await homePage.nav.navigateTo("Makeup");
    await makeupPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Makeup", "Cheeks");
    await makeupPage.verifyBreadcrumb("Cheeks");
    await homePage.nav.navigateTo("Makeup", "Eyes");
    await makeupPage.verifyBreadcrumb("Eyes");
    await homePage.nav.navigateTo("Makeup", "Face");
    await makeupPage.verifyBreadcrumb("Face");
    await homePage.nav.navigateTo("Makeup", "Lips");
    await makeupPage.verifyBreadcrumb("Lips");
    await homePage.nav.navigateTo("Makeup", "Nails");
    await makeupPage.verifyBreadcrumb("Nails");
    await homePage.nav.navigateTo("Makeup", "Value Sets");
    await makeupPage.verifyBreadcrumb("Value Sets");
  });

  await test.step("navigation - skincare", async () => {
    await homePage.nav.navigateTo("Skincare");
    await skincarePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Skincare", "Eyes");
    await skincarePage.verifyBreadcrumb("Eyes");
    await homePage.nav.navigateTo("Skincare", "Face");
    await skincarePage.verifyBreadcrumb("Face");
    await homePage.nav.navigateTo("Skincare", "Gift Ideas & Sets");
    await skincarePage.verifyBreadcrumb("Gift Ideas & Sets");
    await homePage.nav.navigateTo("Skincare", "Hands & Nails");
    await skincarePage.verifyBreadcrumb("Hands & Nails");
    await homePage.nav.navigateTo("Skincare", "Sun");
    await skincarePage.verifyBreadcrumb("Sun");
  });

  await test.step("navigation - fragrance", async () => {
    await homePage.nav.navigateTo("Fragrance");
    await fragrancePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Fragrance", "Men");
    await fragrancePage.verifyBreadcrumb("Men");
    await homePage.nav.navigateTo("Fragrance", "Women");
    await fragrancePage.verifyBreadcrumb("Women");
  });

  await test.step("navigation - men", async () => {
    await homePage.nav.navigateTo("Men");
    await menPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Men", "Body & Shower");
    await menPage.verifyBreadcrumb("Body & Shower");
    await homePage.nav.navigateTo("Men", "Fragrance Sets");
    await menPage.verifyBreadcrumb("Fragrance Sets");
    await homePage.nav.navigateTo("Men", "Pre-Shave & Shaving");
    await menPage.verifyBreadcrumb("Pre-Shave & Shaving");
    await homePage.nav.navigateTo("Men", "Skincare");
    await menPage.verifyBreadcrumb("Skincare");
  });

  await test.step("navigation - hair care", async () => {
    await homePage.nav.navigateTo("Hair Care");
    await hairCarePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Hair Care", "Conditioner");
    await hairCarePage.verifyBreadcrumb("Conditioner");
    await homePage.nav.navigateTo("Hair Care", "Shampoo");
    await hairCarePage.verifyBreadcrumb("Shampoo");
  });

  await test.step("navigation - books", async () => {
    await homePage.nav.navigateTo("Books");
    await booksPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Books", "Audio CD");
    await booksPage.verifyBreadcrumb("Audio CD");
    await homePage.nav.navigateTo("Books", "Paperback");
    await booksPage.verifyBreadcrumb("Paperback");
  });
});

test.only("product card tests", async ({ homePage }) => {
  await homePage.getProductCard("Skinsheen Bronzer Stick", "featured").thumbnail().click();
  
});
