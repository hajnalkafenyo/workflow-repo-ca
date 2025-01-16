import { test, expect } from "@playwright/test";

test("homepage should show the News link", async ({ page }) => {
  // Start at the English homepage
  await page.goto("http://127.0.0.1:5500/index.html");

  // Wait for the new page to load and check its content
  await expect(page.getByRole("link", { name: "Login" })).toBeVisible();

  await page.getByText("Login").click();
  //await page.waitForURL('**/login/');
  await page.locator('input[name="email"]').fill("success@stud.noroff.no");
  await page.locator('input[name="password"]').fill("password123");
  await page.getByRole("button", { name: "Login" }).click();
});
