import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'



test.describe('Mobile Design Functionality', async () => {

        const filePath0 = './videos/a.png';


        test("E2E test", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {


                await test.step("Verify that admin saccessfully go to the mobiledesign page", async () => {

                        await page.goto('/admin/#/sign-in')
                        await loginPage.login(data.username, data.password)
                        const title = await page.title();
                        expect(title).toBe('DXP Admin')

                        await MainMenu.clickHomeAvater();
                        await MainMenu.mainMenuBtn();
                        await MainMenu.clickMobileDesign();


                        const screenshot = await page.screenshot();
                        await testInfo.attach("login screenshot", {
                                contentType: "image/png",
                                body: screenshot
                        })



                })

                await test.step("Verify that admin saccessfully go to the mobiledesign page", async () => {
                const screenshot = await page.screenshot();

                //Click on the menu page
                await menuPage.clickMenuPage()                
                await testInfo.attach("Click on the login page", {
                        contentType: "image/png",
                        body: screenshot
                })

                //verify font text
                await menuPage.checkFontsText();

                //Verify upload font text
                await menuPage.checkUploadFontText();

                //upload font into menu page
                await menuPage.uploadFont();
                await testInfo.attach("Upload Font", {
                        contentType: "image/png",
                        body: screenshot
                })

                //clcik on the menubar first color input field
                await menuPage.clickFirstMenuBarColorInputField()

                await page.waitForTimeout(4000)
                    



                })


        })
})