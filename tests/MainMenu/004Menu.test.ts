import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'



test.describe('Validate Menu Page Functionality', async () => {

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

                await test.step("Varify Fonts Upload Functionality", async () => {
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





                })

                await test.step("Varify Color input for first menubar color picker", async () => {
                        const screenshot = await page.screenshot();

                        //clcik on the menubar first color input field
                        await menuPage.clickFirstMenuBarColorInputField()
                        await testInfo.attach("Click on the Color Input Field", {
                                contentType: "image/png",
                                body: screenshot
                        })

                        await page.waitForTimeout(3000)

                        //Input menubar RGB first field color 
                        await menuPage.inputMenuBarRgbFirstFieldColor()

                        //Input menubar RGB second field color 
                        await menuPage.inputMenuBarRgbSecondFieldColor()

                        //Input menubar RGB third field color 
                        await menuPage.inputMenuBarRgbThirdFieldColor()

                        //Input menubar field color  opacity
                        await menuPage.inputMenuBarColorFieldOpacity()

                        //Input menubar solid field color 
                        await menuPage.inputMenuBarSolidFieldColor()
                        await testInfo.attach("Input color for all the field", {
                                contentType: "image/png",
                                body: screenshot
                        })


                        //click on the save button
                        await menuPage.clickColorPickerWindowSaveBtn();


                })

                await test.step("Varify Color input for second menubar color picker", async () => {
                        const screenshot = await page.screenshot();

                        //clcik on the menubar first color input field
                        await menuPage.clickFirstMenuBarColorInputField()
                        await testInfo.attach("Click on the Color Input Field", {
                                contentType: "image/png",
                                body: screenshot
                        })

                        //Input menubar RGB first field color 
                        await menuPage.inputSecondMenuBarRgbFirstFieldColor()

                        //Input menubar RGB second field color 
                        await menuPage.inputMenuBarRgbSecondFieldColor()

                        //Input menubar RGB third field color 
                        await menuPage.inputSecondMenuBarRgbThirdFieldColor()

                        //Input menubar field color  opacity
                        await menuPage.inputSecondMenuBarColorFieldOpacity()

                        //Input menubar solid field color 
                        await menuPage.inputSecondMenuBarSolidFieldColor()
                        await testInfo.attach("Input color for all the field", {
                                contentType: "image/png",
                                body: screenshot
                        })

                        //click on the save button
                        await menuPage.clickColorPickerWindowSaveBtn();


                })

                await test.step("Varify Alignment button is clickable", async () => {
                        const screenshot = await page.screenshot();

                        //Check alignmenttext
                        await menuPage.checkAlignmentText()
                        await testInfo.attach("Check alignmenttext", {
                                contentType: "image/png",
                                body: screenshot
                        })

                        //click on the top alignment button
                        await menuPage.clickTopAlignmentBtn()

                        //click on the bottom alignment button 
                        await menuPage.clickBottomAlignmentBtn()

                        //click on the 3 line option alignment button
                        await menuPage.click3lineOptionAlignmentBtn()

                        await testInfo.attach("Successfully selected alignment option", {
                                contentType: "image/png",
                                body: screenshot
                        })



                })
                await test.step("Varify all the functionality for show all icon", async () => {
                        const screenshot = await page.screenshot();

                        //Check  Show All Icons text
                        await menuPage.checkAllIconText()
                        await testInfo.attach("Check  Show All Icons text", {
                                contentType: "image/png",
                                body: screenshot
                        })

                        //Enable show all icon button
                        await menuPage.enableShowAllIconBtn()

                        //If disable the home icon checkbox then enabled it 
                        await menuPage.enabledHomeIconCheckBox()

                        //If disable the prize icon checkbox then enabled it 
                        await menuPage.enabledPrizeIconCheckBox()

                        //If disable the how to play icon checkbox then enabled it 
                        await menuPage.enabledHowToPlayIconCheckBox()

                        //If disable the rules icon checkbox then enabled it 
                        await menuPage.enabledRulesIconCheckBox()

                        //If disable the user profile icon checkbox then enabled it 
                        await menuPage.enabledUserProfileIconCheckBox()


                })
                await test.step("Verify all the uploaded icons deleted successfully", async () => {
                        
                        await page.waitForTimeout(5000)
                        await menuPage.deleteHomeIcon()

                        await menuPage.deletePrizeIcon()

                        await menuPage.deleteHowToPlayIcon()

                        await menuPage.deleteRulesIcon()

                        await menuPage.deleteProfileIcon()


                })

                // await test.step("Verify Upload All The Menu Icon", async () => {
                //         await page.waitForTimeout(5000)
                //         const screenshot = await page.screenshot();

                //         //Check  Show All Icons text
                //         await menuPage.uplodHomeIcon()
                //         await testInfo.attach("Check  Show All Icons text", {
                //                 contentType: "image/png",
                //                 body: screenshot
                //         })
                //         await page.waitForTimeout(6000)

                        
                //         //Check  Show All Icons text
                //         await menuPage.uplodPrizeIcon()
                //         await testInfo.attach("Check  Show All Icons text", {
                //                 contentType: "image/png",
                //                 body: screenshot
                //         })
                //         await page.waitForTimeout(6000)

                                       
                //         //Check  Show All Icons text
                //         await menuPage.uplodHowToPlayIcon()
                //         await testInfo.attach("Check  Show All Icons text", {
                //                 contentType: "image/png",
                //                 body: screenshot
                //         })

                //         await page.waitForTimeout(6000)
                //         //Check  Show All Icons text
                //         await menuPage.uplodRulesIcon()
                //         await testInfo.attach("Check  Show All Icons text", {
                //                 contentType: "image/png",
                //                 body: screenshot
                //         })
                //         await page.waitForTimeout(6000)


                //         //Check  Show All Icons text
                //         await menuPage.uplodProfileIcon()
                //         await testInfo.attach("Check  Show All Icons text", {
                //                 contentType: "image/png",
                //                 body: screenshot
                //         })
                       
                // await page.waitForTimeout(10000)

                // })

        })
})