import { test as base } from "@playwright/test";
import HomePage from "../pages/HomePage";
import MMOPage from "../pages/MMOPage";

export const test = base.extend<{ homePage: HomePage; mmoPage: MMOPage }>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  mmoPage: async ({ page }, use) => {
    await use(new MMOPage(page));
  },
});
