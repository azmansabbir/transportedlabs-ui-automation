import { chromium } from "playwright";
import Env from "../utils/environment";

declare const reporter:any;

describe("Validate transported labs login",  () =>{

        // reporter
        // .description("Validated Login Functionality")
        // .story("Task-001");

        test('Login a user', async() => {

        const Page = await context.newPage();

        await reporter.startStep("Nevigate URL")
        await Page.goto(Env.test);
        await reporter.endStep();

        await reporter.startStep("Input UserName")
        await Page.fill("id=mui-1", 'garrett');
        await reporter.endStep();

   
        await reporter.startStep("Input Password")
        await Page.fill("input[type='password']", 'LFQIISIc');
        await reporter.endStep();

        
        await reporter.startStep("Click on the login button")
        await Page.click("button[type='button']"); 
        await reporter.endStep();

      

        

})






})
