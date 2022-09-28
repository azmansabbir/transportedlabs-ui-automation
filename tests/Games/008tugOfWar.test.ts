import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'



test.describe('ValidateTugOfWaPage Functionality', async () => {



        test("E2E test", async ({ loginPage, tugOfWarPage, page, }, testInfo) => {


                await test.step("Varify that admin successfully login in dashboard", async () => {

                        await page.goto('/admin/#/sign-in')
                        await loginPage.login(data.username, data.password)
                        const title = await page.title();
                        expect(title).toBe('DXP Admin')

                        const screenshot = await page.screenshot();
                        await testInfo.attach("login screenshot", {
                                contentType: "image/png",
                                body: screenshot
                        })



                })

                await test.step("008TOFW-001 | Varify Delete All The Uploaded Images For Title Stage", async () => {

                        //click Tug Of War Page
                        await tugOfWarPage.clickTugOfWarPage()
                        const screenshot = await page.screenshot();
                        await testInfo.attach("click Tug Of War Page", {
                                contentType: "image/png",
                                body: screenshot
                        })
                        await page.waitForTimeout(6000)
                        //click Title Stage Tab
                        await tugOfWarPage.clickTitleStageTab()
                        //verify Enable Stage Text
                        // await tugOfWarPage.verifyEnableStageText()
                        //enable Stage
                        await tugOfWarPage.enableStage()
                        //click Image Radio Btn
                        await tugOfWarPage.clickImageRadioBtn()

                        //deleted Uploaded Title ImageBG
                        await tugOfWarPage.deletedUploadedTitleImageBG()
                        await page.waitForTimeout(3000)
                        //delete Uploaded Game Title Image BG
                        await tugOfWarPage.deleteUploadedGameTitleImageBG()
                        await page.waitForTimeout(3000)


                        //delete Uploaded Team Logo
                        await tugOfWarPage.deleteUploadedTeamLogo()
                        await page.waitForTimeout(3000)


                        //delete Uploaded Sponsor Logo
                        await tugOfWarPage.deleteUploadedSponsorLogo()
                        await page.waitForTimeout(3000)


                })

                await test.step("008TOFW-001 | Varify Upload All The Images For Title Stage", async () => {


                        //upload Title Background
                        await tugOfWarPage.uploadTitleBackgroundImage()
                        await page.waitForTimeout(6000)




                        // await tugOfWarPage.uploadTitleBackgroundVideo()



                        //upload Game Title Image
                        await tugOfWarPage.uploadGameTitleImage()
                        await page.waitForTimeout(6000)

                        //upload Team Logo
                        await tugOfWarPage.uploadTeamLogo()
                        await page.waitForTimeout(6000)


                        //upload Sponsor Logo
                        await tugOfWarPage.uploadSponsorLogo()

                        await page.waitForTimeout(6000)




                })

                await test.step("008TOFW-003 | Varify Upload All The Images For Title Stage", async () => {


                        //click Selection StagePage
                        await tugOfWarPage.clickSelectionStagePage()

                        //click Selection Image Text
                        await tugOfWarPage.clickSelectionImageText()


                        //delete Uploaded Selaction BG
                        await tugOfWarPage.deleteUploadedSelactionBG()

                        //upload Selaction BG
                        await tugOfWarPage.uploadSelactionBG()

                        // //upload Selaction Stage Team Logo
                        // await tugOfWarPage.uploadSelactionStageTeamLogo()
                        //Issue01- team logo does not uploaded properly

                        //input Selection Stage Team Name
                        await tugOfWarPage.inputSelectionStageTeamName()

                        //input Number Of Teams
                        await tugOfWarPage.inputNumberOfTeams()

                        //input Selection Timer
                        await tugOfWarPage.inputSelectionTimer()

                        //click Allow Selection Change Check box
                        await tugOfWarPage.clickAllowSelectionChangeCheckbox()



                        //click Custom Selection Massage Check Box
                        await tugOfWarPage.clickCustomSelectionMassageCheckBox()


                        //input Custom Selection Massge Text
                        await tugOfWarPage.inputCustomSelectionMassgeText()


                        //click Custom Team Selection Massage Check Box
                        await tugOfWarPage.clickCustomTeamSelectionMassageCheckBox()

                        //input Custome Team Section Massage
                        await tugOfWarPage.inputCustomeTeamSectionMassage()


                        //click TeamName Box Color Input
                        await tugOfWarPage.clickTeamNameBoxColorInput()

                        await page.waitForTimeout(3000)

                        //input TeamName Box Color RGB First
                        await tugOfWarPage.inputTeamNameBoxColorRGBFirst()


     //input Team Name Box Color RGB Third
     await tugOfWarPage.inputTeamNameBoxColorRGBThird()


     //input TeamName BoxColor Opacity
     await tugOfWarPage.inputTeamNameBoxColorOpacity()


     //input TeamName BoxColor HEXColor
     await tugOfWarPage.inputTeamNameBoxColorHEXColor()


     //click Save Btn
     await tugOfWarPage.clickSaveBtn()


     //click Team Selected Massage Box Color Input
     await tugOfWarPage.clickTeamSelectedMassageBoxColorInput()


     //input Team Selected Massage Box Color RGBF irst
     await tugOfWarPage.inputTeamSelectedMassageBoxColorRGBFirst()

  //input Team Selected Massage Box Color RGB Second
  await tugOfWarPage.inputTeamSelectedMassageBoxColorRGBSecond()

  //input Team Selected Massage Box Color RGB Third
  await tugOfWarPage.inputTeamSelectedMassageBoxColorRGBThird()

  //input Team Selected Massage Box Color Opacity
  await tugOfWarPage.inputTeamSelectedMassageBoxColorOpacity()

  //input Team Selected Massage Box Color HEX Color
  await tugOfWarPage.inputTeamSelectedMassageBoxColorHEXColor()

     //click Save Btn
     await tugOfWarPage.clickSaveBtn()



                        // await page.waitForTimeout(6000)





                })
        })
})