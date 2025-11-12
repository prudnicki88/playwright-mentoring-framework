import { test } from "../fixtures/fixtures";
import "dotenv/config";

test("login and save local storage for further authentication", async ({ loginPage, page }) => {
  await loginPage.goTo();
  await loginPage.login(process.env.USER_NAME, process.env.PASS_WORD, process.env.USER_FIRST_NAME);
  await page.context().storageState({ path: "playwright/.auth/user.json" });
});
