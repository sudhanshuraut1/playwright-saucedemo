import {Locator, Page} from '@playwright/test'

export class LoginPage {
   
    private page : Page ;

    private userNameInput : Locator
    private passwordInput : Locator
    private loginButton : Locator 
    private swagLabsLoginPageTitle : Locator

    constructor (page : Page){
        this.page = page ;
        this.userNameInput = this.page.locator('#user-name') ;
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
        this.swagLabsLoginPageTitle = this.page.locator('.login_logo'); 
    }

}