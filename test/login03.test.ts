import { Page } from "playwright";
import Env from "../utils/environment";

declare const page: Page;

declare const reporter:any;

describe("Validate transported labs login",  async () =>{

        await reporter
        .description("Login into LetCode")
        .story("JIRA101");

        test('Login a user', async() => {
    

        await reporter.startStep("Nevigate URL")
        await page.goto(Env.test);
        await reporter.endStep();

        // await reporter.startStep("Input UserName")
        await page.fill("id=mui-1", 'garrett');
        // await reporter.endStep();

   
        // await reporter.startStep("Input Password")
        await page.fill("input[type='password']", 'LFQIISIc');
        // await reporter.endStep();

        
        // await reporter.startStep("Click on the login button")
        await page.click("button[type='button']"); 
        // await reporter.endStep();

      

        

})






})
