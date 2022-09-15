import test, { expect } from "./basePages"
import * as data from "../data/login.cred.json";
import ReportUtils from "../utils/ReportUtils";

declare const reporter: any;

test.beforeEach(async ({ page }) => {
        await page.goto('/admin/#/sign-in')
    })            

test.describe('Login functionality validation', async () =>{      
   
        
        test("E2E test", async ({  loginPage, page }) => {

        // await reporter
        // .description("Validate MainMenu Mobile Design Page all element")
        // .story("Task001");


        await test.step("Verify the valid page title", async () => {
                // await reporter.startStep("Click on the home aveter"); 
                await loginPage.login(data.username, data.password)
                // await ReportUtils.screenshot("Click on the home aveter")
                // await reporter.endStep();
                        

                        
                        const title = await page.title();
                        expect(title).toBe('DXP Admin')
                })

        // test ("Verify the invalid page title", async () => {
        //         const title = await page.title();
        //         expect(title).toBe('DXP Admin')

        //         const ele = await page.$('div.MuiAvatar-root.MuiAvatar-circular')
        //         if (ele) {
        //                 await ele.click()
        //         } else throw new Error('Element not found')
                
        // })



        })


})

