import LoginPage from "../../page/login.page";
import Env from "../../utils/environment";
import * as data from "../../data/login.cred.json";

describe("TC001", () => {
        // my pages
      
        let login: LoginPage;
  
    
        beforeAll(async () => {
            await page.goto(Env.test);            
            login = new LoginPage(page);

        })
    
        test("Login positive _ JIRA101", async () => {

                expect(page.url()).toBe("https://letcode.in/");

                await login.enterUserName(data.username);

                await login.enterUserPassword(data.password);

                await login.clickLoginBtn()
                


        })

})