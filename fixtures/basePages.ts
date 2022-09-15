import LoginPage from "@pages/Login.page"
import MainMeun from "@pages/mainmenu.page";
import { test as baseTest } from "@playwright/test";




const test = baseTest.extend<{
    loginPage: LoginPage;
    MainMenu: MainMeun;

}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    MainMenu: async ({ page }, use) => {
        await use(new MainMeun(page));
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
