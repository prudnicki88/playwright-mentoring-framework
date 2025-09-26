import { test } from "../fixtures/fixtures";
import ProductPage from "../pages/ProductPage";

test.beforeEach("navigate to homepage", async ({ homePage }) => {
  await homePage.goTo();
});

test.describe("navigation tests", () => {
  test("navigation - apparel", async ({ homePage, apparelPage }) => {
    await homePage.nav.navigateTo("Apparel & accessories");
    await apparelPage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Apparel & accessories", "Shoes");
    await apparelPage.verifyBreadcrumb("Shoes");
    await homePage.nav.navigateTo("Apparel & accessories", "T-shirts");
    await apparelPage.verifyBreadcrumb("T-shirts");
  });

  test("navigation - makeup", async ({ homePage, makeupPage }) => {
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

  test("navigation - skincare", async ({ homePage, skincarePage }) => {
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

  test("navigation - fragrance", async ({ homePage, fragrancePage }) => {
    await homePage.nav.navigateTo("Fragrance");
    await fragrancePage.verifyBreadcrumb();
    await homePage.nav.navigateTo("Fragrance", "Men");
    await fragrancePage.verifyBreadcrumb("Men");
    await homePage.nav.navigateTo("Fragrance", "Women");
    await fragrancePage.verifyBreadcrumb("Women");
  });

  test("navigation - men", async ({ homePage, menPage }) => {
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

test.describe("product card tests", async () => {
  test("click thumbnail", async ({ homePage, productPage }) => {
    await homePage.getProductCard("Skinsheen Bronzer Stick", "featured").thumbnail().click();
    const product = productPage("Skinsheen Bronzer Stick");
    await product.verifyProductHeader();
  });

  test("click top link text", async ({ homePage, productPage }) => {
    await homePage.goTo();
    await homePage
      .getProductCard("Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15", "latest")
      .topLink()
      .click();
    const product = productPage("Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15");
    await product.verifyProductHeader();
  });
});

test.describe("product page tests", async () => {
  test("check product details", async ({ homePage, productPage }) => {
    await homePage.getProductCard("Skinsheen Bronzer Stick", "featured").thumbnail().click();
    const bronzer = productPage("Skinsheen Bronzer Stick");
    await bronzer.verifyProductHeader();
    await bronzer.verifyPrice("$29.50");
    await bronzer.setQuantity("2");
    await bronzer.verifyTotalPrice("$59.00");
  });
  test("add product to cart", async ({ homePage, productPage, cartPage }) => {
    await homePage.getProductCard("Skinsheen Bronzer Stick", "featured").thumbnail().click();
    const bronzer = productPage("Skinsheen Bronzer Stick");
    await bronzer.verifyProductHeader();
    const price = await bronzer.extractPrice();
    await bronzer.addToCart();
    await cartPage.verifyBreadcrumb();
  });
});
