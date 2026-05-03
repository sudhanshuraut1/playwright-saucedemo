import { test, expect } from "@playwright/test";

test("just login", async ({ page }) => {
  await page.goto("");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  await expect(page.locator('.inventory_list')).toBeVisible();
  await page.waitForTimeout(5000);
});
