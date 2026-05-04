import { Locator, Page } from "@playwright/test";
import { privateDecrypt } from "crypto";

class HomePage {

    private page : Page
    private cartIcon : Locator

    constructor (page : Page){
        this.page = page;
        this.cartIcon = this.page.locator('[data-test="shopping-cart-link"]');
    } 

    

}