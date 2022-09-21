import test, { expect } from "@fixtures/basePages"
import * as data from "@testData/login.cred.json";


declare const reporter: any;

// test.beforeEach(async ({ page }) => {
//         await page.goto('/admin/#/sign-in')
//     })            


   test.describe("Login Page Test", async () => {

 
        
        test("E2E test", async ({  loginPage, page, browser }) => {

                

        await test.step("TLL001-01 | Verify login with valid credentials", async () => {
                
                // const context = await browser.newContext();
                // // start tracing
                // await context.tracing.start(
                //     {
                //         screenshots: true, snapshots: true
                //     }
                // );
                // const page = await context.newPage();

                
                await page.goto('/admin/#/sign-in')
                
                await page.waitForTimeout(5000)
                //wait for login button
                await page.waitForSelector("button[type='button']");

                //verify the full login page screen
                // expect(await page.screenshot({
                //         fullPage: true
                //     })).toMatchSnapshot("login-page-UI.png")
                
                //Login with valid credentials 
                await loginPage.login(data.username, data.password)

                      

                // await context.tracing.stop({ path: 'trace0.zip' });

                        
                        // const title = await page.title();
                        // expect(title).toBe('DXP Admin')
                })

        // await test.step("TLL001-02 | Verify login with valid credentials", async () => {
                


        //         await page.goto('/admin/#/sign-in')

        //         //Login with invalid credentials 
        //         await loginPage.loginNegative(data.invalidusername, data.invalidpassword);

                      

                       

                        
        //                 // const title = await page.title();
        //                 // expect(title).toBe('DXP Admin')
        //         })


        })



})