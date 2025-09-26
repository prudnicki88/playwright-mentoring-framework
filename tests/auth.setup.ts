import { test } from "../fixtures/fixtures";

test("login and save local storage for further authentication", async ({ loginPage, page }) => {
  await loginPage.goTo();
  await loginPage.login("GreatLizardLive", "Testowanie1234!$", "Piotr");
  await page.context().storageState({ path: "playwright/.auth/user.json" });
});
