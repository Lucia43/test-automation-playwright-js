import { expect, test } from "@playwright/test";
import {password, username } from  "../../fixtures/fixtures.js";

test.describe ("registrace", () => {
    
    test.beforeEach (async ({page}) => {

    await page.goto ( "https://team8-2022brno.herokuapp.com/registrace");

});
// test platnej registrácie používateľa 
test ('Platná registrácia používateľa', async ({page})=> 
    {
    await page.fill('input[ name ="email"]', 'username@example.com' );
    await page.fill ('input [name = "password"]', 'ADMIN PASSWORD' );
    await page.fill (input [ name ="password - confirmation"], "ADMIN PASSWORD");
    await page.click('button' [type="submit"]); 


//asertace na kontrolu úspešnej registrácie 

await expect (page.locator ('.success_message')).toBeVisible();

//test  registrace s už existujúcim emailom 
test ('registrácia s existujúcim emailom', async ({page})=> {
        await page.fill ('input [name="email"] ', 'username@example.com ');
        await page.fill ('input '[name = "password"], "ADMIN PASSWORD");
        await page.fill ('input [name = "password-confirmation"]', "ADMIN PASSWORD");
        await page.click ('button' [type = "submit"]);
          


//asertácia na kontrolu chyby
await expect (page.locator(.'error_message')).toContainText('Email je už zaregistrován');


// test registrace s neplatným heslom (iba čísla)
test ("resgistrace s neplatným heslom , async ({page}) = > {
    await page.fill ('input [name = "email"]', 'username@example.com' );
    await page.fill ('input '[name = "password"], "123456");
    await page.fill ('input '[name = "password-confirmation"], "123456");
    await page.click ('button' [type = "submit"]);

    //asertácia na kontrolu chyby 
    await expect (page.locator(.'error_message')).toContainText('Heslo musi obsahovat písmeno a speciální znaky');

