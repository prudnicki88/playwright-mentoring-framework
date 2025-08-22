import { test as base } from "@playwright/test";
import HomePage from "../pages/HomePage";
import ApparelPage from "../pages/ApparelPage";
import BooksPage from "../pages/BooksPage";
import FragrancePage from "../pages/FragrancePage";
import HairCarePage from "../pages/HairCarePage";
import MakeupPage from "../pages/MakeupPage";
import MenPage from "../pages/MenPage";
import SkincarePage from "../pages/SkincarePage";

export const test = base.extend<{
  homePage: HomePage;
  apparelPage: ApparelPage;
  booksPage: BooksPage;
  fragrancePage: FragrancePage;
  hairCarePage: HairCarePage;
  makeupPage: MakeupPage;
  menPage: MenPage;
  skincarePage: SkincarePage;
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
});
