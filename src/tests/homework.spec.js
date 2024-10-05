import { test } from "@playwright/test";

test("registrace", async ({ page }) => {
    await page.goto("https://team8-2022brno.herokuapp.com/registrace");
    await page.title()
    console.log(await page.title());
    await page.screenshot()
    await page.screenshot({ path: "screenshot.png" });
  
  });