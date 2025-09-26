import { test as base } from "@playwright/test";
import HomePage from "../pages/HomePage";
import ApparelPage from "../pages/ApparelPage";
import BooksPage from "../pages/BooksPage";
import FragrancePage from "../pages/FragrancePage";
import HairCarePage from "../pages/HairCarePage";
import MakeupPage from "../pages/MakeupPage";
import MenPage from "../pages/MenPage";
import SkincarePage from "../pages/SkincarePage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

export const test = base.extend<{
  homePage: HomePage;
  apparelPage: ApparelPage;
  booksPage: BooksPage;
  fragrancePage: FragrancePage;
  hairCarePage: HairCarePage;
  makeupPage: MakeupPage;
  menPage: MenPage;
  skincarePage: SkincarePage;
  loginPage: LoginPage;
  productPage: (productName: string) => ProductPage;
  cartPage: CartPage;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  apparelPage: async ({ page }, use) => {
    await use(new ApparelPage(page));
  },
  booksPage: async ({ page }, use) => {
    await use(new BooksPage(page));
  },
  fragrancePage: async ({ page }, use) => {
    await use(new FragrancePage(page));
  },
  hairCarePage: async ({ page }, use) => {
    await use(new HairCarePage(page));
  },
  makeupPage: async ({ page }, use) => {
    await use(new MakeupPage(page));
  },
  menPage: async ({ page }, use) => {
    await use(new MenPage(page));
  },
  skincarePage: async ({ page }, use) => {
    await use(new SkincarePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productPage: async ({ page }, use) => {
    await use((productName: string) => new ProductPage(page, productName));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});
