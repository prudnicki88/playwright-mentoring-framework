import { test as base } from "@playwright/test";
import HomePage from "../pages/HomePage";
import MMOPage from "../pages/MMOPage";
import StrategyPage from "../pages/StrategyPage";

export const test = base.extend<{ homePage: HomePage; mmoPage: MMOPage; strategyPage: StrategyPage }>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  mmoPage: async ({ page }, use) => {
    await use(new MMOPage(page));
  },
  strategyPage: async ({ page }, use) => {
    await use(new StrategyPage(page));
  },
});
