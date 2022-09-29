import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'






        test("Varify Global Prizing Section", async ({ loginPage, MainMenu, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {


                await test.step("Login Admin And Land To Home Screen", async () => {

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
                await test.step("006GP-001 | Verify Admin Successfully Add New Prize", async () => {
                        const screenshot = await page.screenshot();

                        //click Global Prizing Page
                        await globalPrizingPage.clickGlobalPrizingPage()
                        await testInfo.attach("click Global Prizing Page", {
                                contentType: "image/png",
                                body: screenshot
                        })

                        //click AddNewPrize Btn
                        await globalPrizingPage.clickAddNewPrizeBtn()

                        //input Prize Name
                        await globalPrizingPage.inputPrizeName()

                        //select Prize Category
                        await globalPrizingPage.selectPrizeCategory()

                        // //select airdrop catagory
                        // await globalPrizingPage.selectPrizeCategoryAirDrop()

                        // //select Prize Category
                        // await globalPrizingPage.selectPrizeCategory()

                        //select airdrop catagory
                        await globalPrizingPage.selectPrizeCategoryGeneral()

                        //upload Prize Image
                        await globalPrizingPage.uploadPrizeImage()

                        //input Prize Discription
                        await globalPrizingPage.inputPrizeDiscription()

                        //click Prize Expiration None
                        await globalPrizingPage.clickPrizeExpirationNone()

                        //click Load CSV Check Box
                        await globalPrizingPage.clickLoadCSVCheckBox()
                        await page.waitForTimeout(2000)

                        //Upload CSV file
                        await globalPrizingPage.uploadCSVFile()
                        await page.waitForTimeout(4000)

                        // Issue here..

                        //click Generate Text code Check Box
                        await globalPrizingPage.clickGenerateTextcodeCheckBox()

                        //click Auto generate Check Box
                        await globalPrizingPage.clickAutogenerateCheckBox()



                        //click Auto generate Check Box
                        await globalPrizingPage.inputAutoGeneratePrifix()

                        //click SMS Sharing Check Box
                        await globalPrizingPage.clickSMSSharingCheckBox()


                        //click Email Sharing Check Box
                        await globalPrizingPage.clickEmailSharingCheckBox()


                        //click Wallet Sharing Check Box
                        await globalPrizingPage.clickWalletSharingCheckBox()


                        //click Limit PerUser Check Box
                        await globalPrizingPage.clickLimitPerUserCheckBox()

                        //input Limit Per User
                        await globalPrizingPage.inputLimitPerUser()

                        //click per Event Check Box
                        await globalPrizingPage.clickperEventCheckBox()

                        //click Save Btn
                        await globalPrizingPage.clickSaveBtn()


                        await page.waitForTimeout(7000)

                })

                await test.step("006GP-002 | Verify Admin Successfully Delete Add New Prize", async () => {
                        
                        //search Prize
                        await globalPrizingPage.searchPrize()

                        //delete Prize
                        await globalPrizingPage.deletePrize()

                        await page.waitForTimeout(3000)


                        //click Ok Btn
                        await globalPrizingPage.clickOkBtn()

                        await page.waitForTimeout(6000)

                })


        })
