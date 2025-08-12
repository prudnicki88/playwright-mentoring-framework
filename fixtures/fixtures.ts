import { test as base } from "@playwright/test";
import HomePage from "../pages/HomePage";
import MMOPage from "../pages/MMOPage";
import StrategyPage from "../pages/StrategyPage";
import ShootingPage from "../pages/ShootingPage";
import ActionPage from "../pages/ActionPage";
import AdventurePage from "../pages/AdventureGames";
import PuzzlePage from "../pages/PuzzleGames";
import TowerDefensePage from "../pages/TowerDefensePage";
import IdlePage from "../pages/IdlePage";
import LoginPage from "../pages/LoginPage";

export const test = base.extend<{
  homePage: HomePage;
  mmoPage: MMOPage;
  strategyPage: StrategyPage;
  shootingPage: ShootingPage;
  actionPage: ActionPage;
  adventurePage: AdventurePage;
  puzzlePage: PuzzlePage;
  towerDefensePage: TowerDefensePage;
  idlePage: IdlePage;
  loginPage: LoginPage;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  mmoPage: async ({ page }, use) => {
    await use(new MMOPage(page));
  },
  strategyPage: async ({ page }, use) => {
    await use(new StrategyPage(page));
  },
  shootingPage: async ({ page }, use) => {
    await use(new ShootingPage(page));
  },
  actionPage: async ({ page }, use) => {
    await use(new ActionPage(page));
  },
  adventurePage: async ({ page }, use) => {
    await use(new AdventurePage(page));
  },
  puzzlePage: async ({ page }, use) => {
    await use(new PuzzlePage(page));
  },
  towerDefensePage: async ({ page }, use) => {
    await use(new TowerDefensePage(page));
  },
  idlePage: async ({ page }, use) => {
    await use(new IdlePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
