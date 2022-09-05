import LoginPage from "../../page/Login.page";
import Env from "../../utils/environment";
import * as data from "../../data/login.cred.json";
import { Page } from "playwright";
import ReportUtils from "../../utils/reportUtils";


declare const page: Page;
declare const reporter: any;

describe("TL001", () => {
    // my pages
    let login: LoginPage;

    beforeAll(async () => {
        await page.goto(Env.test);
        login = new LoginPage(page);

    })


    test("Try to login with invalid Credentials", async () => {        

        await reporter
        .description("Login into TransportedLabs with valid credentials")
        .story("Task001");

        await reporter.startStep("Navigate to the url");
        await page.goto(Env.test, {
            waitUntil: "domcontentloaded"
        });      
        await ReportUtils.screenshot("Navigate to the url")
        await reporter.endStep();


        await reporter.startStep("Enter username");
        await page.locator('input[type="text"]').click(); // Click to input id
        await page.locator('input[type="text"]').fill(data.invalidusername); // Fill id
        await ReportUtils.screenshot("username")
        await reporter.endStep();

        await reporter.startStep("Enter Password");    
        await page.locator('input[type="password"]').click(); // Click to input password
        await page.locator('input[type="password"]').fill(data.invalidpassword); // Fill incorrect password
        await ReportUtils.screenshot("Enter Password")
        await reporter.endStep();

        await reporter.startStep("Click on the login button");  
        await page.locator('button:has-text("Login")').click(); // Click "Login"
        await ReportUtils.screenshot("Click on the login button")
        await reporter.endStep();


        await reporter.startStep("Invalid credentials");    
        expect(page.locator('p:has-text("Invalid credentials")'))
        await ReportUtils.screenshot("Invalid credentials")
        await reporter.endStep();

        await reporter.startStep("Click on the ok button");  
        await page.locator('button:has-text("Ok")').click(); // Click Ok
        await ReportUtils.screenshot("Click on the ok button")
        await reporter.endStep();

        await reporter.startStep("Should be show login page"); 
        expect(page.url()).toContain(Env.test); 
        await ReportUtils.screenshot("Should be show login page")
        await reporter.endStep();       

      
    })

    test("Try to login with valid Credentials", async () => {        

        await reporter
        .description("Login into TransportedLabs with valid credentials")
        .story("Task002");

        await reporter.startStep("Navigate to the url");
        await page.goto(Env.test, {
            waitUntil: "domcontentloaded"
        });      
        await ReportUtils.screenshot("Navigate to the url")
        await reporter.endStep();



        await reporter.startStep("Enter username");
        await page.locator('input[type="text"]').click(); // Click to input id
        await page.locator('input[type="text"]').fill(data.username); // Fill id
        await ReportUtils.screenshot("username")
        await reporter.endStep();

        await reporter.startStep("Enter Password");    
        await page.locator('input[type="password"]').click(); // Click to input password
        await page.locator('input[type="password"]').fill(data.password); // Fill incorrect password
        await ReportUtils.screenshot("Enter Password")
        await reporter.endStep();

        await reporter.startStep("Click on the login button");  
        await page.locator('button:has-text("Login")').click(); // Click "Login"
        await ReportUtils.screenshot("Click on the login button")
        await reporter.endStep();

        await reporter.startStep("Should be show home page"); 
        expect(page.url()).toContain(Env.test); 
        await ReportUtils.screenshot("Should be show home page")
        await reporter.endStep();       

      
    })

    xtest("Login New", async () => {
        await page.goto(Env.test, {
            waitUntil: "domcontentloaded"
        });



        await login.enterUserName(data.username);

        await login.enterUserPassword(data.password);

        await login.clickLoginBtn()
        
      
    })
})