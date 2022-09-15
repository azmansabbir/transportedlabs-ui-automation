import LoginPage from "../../page/Login.page";
import Env from "../../utils/environment";
import * as data from "../../data/login.cred.json";
import { Page } from "playwright";
import ReportUtils from "../../utils/reportUtils";
import MainMeun from "../../page/mainmenu.page";


declare const page: Page;
declare const reporter: any;

    // my pages
    let login: LoginPage;
    let MainMenu: MainMeun;

    beforeAll(async () => {
        await page.goto(Env.test);
        login = new LoginPage(page);
        MainMenu = new MainMeun(page);
        await login.login(data.username, data.password);
    })
    
   

    test("Validate MainMenu Mobile Design Page", async () => {  
        await reporter
        .description("Validate MainMenu Mobile Design Page all element")
        .story("Task001");

        await reporter.startStep("Click on the home aveter"); 
        await MainMenu.clickHomeAvater();
        await ReportUtils.screenshot("Click on the home aveter")
        await reporter.endStep();

        await reporter.startStep("Click on the clcik on the main menu"); 
        await MainMenu.mainMenuBtn();
        await ReportUtils.screenshot("Click on the clcik on the main menu")
        await reporter.endStep();


       await reporter.startStep("wait for 5 sec");      
       await page.waitForTimeout(5000);

       await reporter.startStep("Click on the clcik on the Mobile Design Page"); 
       await MainMenu.clickMobileDesign();
       await ReportUtils.screenshot("Click on the clcik on the Mobile Design Page")
       await reporter.endStep(); 

 
    



       

        
        
    })

