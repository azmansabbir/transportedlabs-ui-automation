import LoginPage from "@pages/Login.page";
import MobileDesign from "@pages/mobileDesign.page";
import languagePage from "@pages/language.page";
import { test as baseTest } from "@playwright/test";
import menuPage from "@pages/menu.page";
import singupPage from "@pages/signup.page";




const test = baseTest.extend<{
    loginPage: LoginPage;
    MainMenu: MobileDesign;
    languagePage: languagePage;
    menuPage: menuPage;
    singupPage: singupPage;

}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    MainMenu: async ({ page }, use) => {
        await use(new MobileDesign(page));
    },

    languagePage: async ({ page }, use) => {
        await use(new languagePage(page));
    },

    menuPage: async ({ page }, use) => {
        await use(new menuPage(page));
    },

    singupPage: async ({ page }, use) => {
        await use(new singupPage(page));
    }


    
    
})
export default test;
export const expect = test.expect;

// var a;
// var b: string;

// type pages=  {
//     loginPage: LoginPage;
//     headerPage: HeaderPage;
//     commonPage: CommonFunctions;
// }
