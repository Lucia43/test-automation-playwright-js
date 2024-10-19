import { test } from "@playwright/test";

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

        