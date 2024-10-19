import { test } from "@playwright/test";

<<<<<<< HEAD
test("locators", async ({ page }) => {
    await page.goto ("https://team8-2022brno.herokuapp.com/registrace");
        //Meno a priezvisko: 
        await page.locator ("#name");
        await page.locator (".form - control");
        await page.locator ('[name="name"]');
        await page.getByText("Jméno a příjmení");

        //Políčko pre email
        await page.locator("#email");
        await page.locator ('.form - control');
        await page.locator ('[type = "email"]');
        await page.getByText('Email');

        //Políčko pre heslo
        await page.locator("#password");
        await page.locator ('[type="password"]');
        await page.getByText("Heslo");
        
        //kontrola hesla
        await page.locator("#password - confirm");
        await page.locator ('.form-control');
        await page.getByText("Kontrola hesla")

        //tlačítko pre registráciu
        await page.locator('.register-button');
        await page.locator('[type="submit"]');

});

        
=======
test("registrace", async ({ page }) => {
    await page.goto("https://team8-2022brno.herokuapp.com/registrace");
    await page.title()
    console.log(await page.title());
    await page.screenshot()
    await page.screenshot({ path: "screenshot.png" });
  
  });
>>>>>>> 3d162cfb12be3d45db789fe0726306d9db42ba61
