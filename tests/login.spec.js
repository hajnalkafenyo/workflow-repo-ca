import { test, expect } from "@playwright/test";

test("User can log in", async ({ page }) => {
  // Start at the English homepage
  await page.goto("http://127.0.0.1:5500/index.html");

  // Wait for the new page to load and check its content
  await expect(page.getByRole("link", { name: "Login" })).toBeVisible();

  await page.getByText("Login").click();
  //await page.waitForURL('**/login/');
  await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
  await page
    .locator('input[name="password"]')
    .fill(process.env.TEST_USER_PASSWORD);
  await page.locator("button[data-testid='login-button']").click();
  await expect(page.getByTestId("user-welcome")).toBeVisible();
  await expect(page.getByTestId("user-welcome")).toHaveText("Hi Workflow");
});

test("User cannot log in with invalid credential", async ({ page }) => {
  // Start at the English homepage
  await page.goto("http://127.0.0.1:5500/index.html");

  // Wait for the new page to load and check its content
  await expect(page.getByRole("link", { name: "Login" })).toBeVisible();

  await page.getByText("Login").click();
  //await page.waitForURL('**/login/');
  await page.locator('input[name="email"]').fill("random@stud.noroff.no");
  await page.locator('input[name="password"]').fill("wrongpassword");
  await page.locator("button[data-testid='login-button']").click();
  await expect(page.getByRole("alert")).toContainText(
    "Invalid email or password",
  );
});
