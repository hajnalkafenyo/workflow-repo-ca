import { test, expect } from "@playwright/test";

test("User can navigate to the first venue", async ({ page }) => {
  // Start at the English homepage
  await page.goto("http://127.0.0.1:5500/index.html");
  await expect(page.locator("#venue-container > a:first-child")).toBeVisible();
  await page.locator("#venue-container > a:first-child").click();
  await expect(page.locator("main > h1")).toContainText("Venue details:");
});
