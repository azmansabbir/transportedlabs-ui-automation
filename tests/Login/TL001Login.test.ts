import test, { expect } from "@fixtures/basePages"
import * as data from "../../data/login.cred.json";

declare const reporter: any;

// test.beforeEach(async ({ page }) => {
//         await page.goto('/admin/#/sign-in')
//     })            

test.describe('Login functionality validation', async () =>{      
   
        
        test("E2E test", async ({  loginPage, page }) => {

        await test.step("Verify the valid page title", async () => {
                


                await page.goto('/admin/#/sign-in')


                await page.waitForTimeout(6000)

                expect(await page.screenshot({
                        fullPage: true
                    })).toMatchSnapshot("login-page-UI.png")

                await loginPage.login(data.username, data.password)

                      

                       

                        
                        // const title = await page.title();
                        // expect(title).toBe('DXP Admin')
                })

        


        })


})
