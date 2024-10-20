import {test, expect } from "@playwright/test";
//Otvor stránku pro registraci 
test ("should open for registration"), async ({ page })=> {
    await page.goto ("/registrace");
    // Vyplní jméno a příjmení
    const nameField= page.getByLabel("Jméno a příjmení");
    await nameField.fill (username);
    // Vyplní email
    const emailField = page.getByLabel ("email");
    await emailField.fill (email);
    // Vyplní a potvrdí heslo
    const passwordField = page.getByLabel ("Heslo");
    await passwordField.fill (password);
    console.log ("passwordField isVisible: " + await passwordField.isVisible());
    console.log( "passwordField isEnabled" + await passwordField.isEnabled());
    // Klikne na tlačítko pro odeslání registračního formuláře
    const registrationButton = page.getByRole ("Zaregistrovat");
    await registrationButton.click();
}