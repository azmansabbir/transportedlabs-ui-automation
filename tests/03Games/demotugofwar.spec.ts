import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'































test.skip("Verify Selection Stage Section", async ({ loginPage, tugOfWarPage, page, }, testInfo) => {


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

                //click Tug Of War Page
                await tugOfWarPage.clickTugOfWarPage()


        })

        await test.step("008TOFW-003 | Varify Title Stage Selection Settings", async () => {


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

test.skip("Verify Countdown Stage Section", async ({ loginPage, tugOfWarPage, page, }, testInfo) => {


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

                //click Tug Of War Page
                await tugOfWarPage.clickTugOfWarPage()


        })

        await test.step("008TOFW-003 | Varify Title Stage Selection Settings", async () => {


                //click Countdown StagePage
                await tugOfWarPage.clickCountdownStagePage()

                await page.waitForTimeout(3000)


                //enable CountDown Stage Skip And Jump
                await tugOfWarPage.enableCountDownStageSkipAndJump()


                //click Countdown Image Text
                await tugOfWarPage.clickCountdownImageText()

                //delete Uploaded CountdownBG
                await tugOfWarPage.deleteUploadedCountdownBG()


                //upload Countdown BG
                await tugOfWarPage.uploadCountdownBG()

                //input Adjustable Countdown Length Timer
                await tugOfWarPage.inputAdjustableCountdownLengthTimer()

                //click Custom Countdown Message Checkbox
                await tugOfWarPage.clickCustomCountdownMessageCheckbox()

                //input Custom CountDown Massage
                await tugOfWarPage.inputCustomCountDownMassage()



                await page.waitForTimeout(6000)





        })



})

test.skip("Verify Gameplay Stage Section", async ({ loginPage, tugOfWarPage, page, }, testInfo) => {


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

                //click Tug Of War Page
                await tugOfWarPage.clickTugOfWarPage()


        })

        await test.step("008TOFW-003 | Varify Title Stage Selection Settings", async () => {


                //click Gameplay StagePage
                await tugOfWarPage.clickGameplayStagePage()

                await page.waitForTimeout(3000)


                //click Gameplay Image Text
                await tugOfWarPage.clickGameplayImageText()


                //delete Uploaded Gameplay BG
                await tugOfWarPage.deleteUploadedGameplayBG()

                //upload Gameplay BG
                await tugOfWarPage.uploadGameplayBG()


                //enable Display Power Meter
                await tugOfWarPage.enableDisplayPowerMeter()

                //verify Power Methods Text
                await tugOfWarPage.verifyPowerMethodsText()

                //click Tap To Power Checkbox
                await tugOfWarPage.clickTapToPowerCheckbox()

                //click Shout To Power Check box
                await tugOfWarPage.clickShoutToPowerCheckbox()


                //click Shake To Power Checkbox
                await tugOfWarPage.clickShakeToPowerCheckbox()

                //click Swipe To Power Checkbox
                await tugOfWarPage.clickSwipeToPowerCheckbox()

                //enable Custom Power Message Checkbox
                await tugOfWarPage.enableCustomPowerMessageCheckbox()


                //input Custom Power Massage
                await tugOfWarPage.inputCustomPowerMassage()

                //enable Mainboard Message Checkbox
                await tugOfWarPage.enableMainboardMessageCheckbox()

                //input Mainboard Massage
                await tugOfWarPage.inputMainboardMassage()


                //enable Mobile Message Checkbox
                await tugOfWarPage.enableMobileMessageCheckbox()


                //input Mobile Massage
                await tugOfWarPage.inputMobileMassage()

                await page.waitForTimeout(6000)




        })



})

test.skip("Verify Endgame Stage Section", async ({ loginPage, tugOfWarPage, page, }, testInfo) => {


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

                //click Tug Of War Page
                await tugOfWarPage.clickTugOfWarPage()


        })

        await test.step("008TOFW-003 | Varify Title Stage Selection Settings", async () => {


                //click Endgame StagePage
                await tugOfWarPage.clickEndgameStagePage()

                await page.waitForTimeout(3000)


                //click Endgame Image Text
                await tugOfWarPage.clickEndgameImageText()


                //delete Uploaded Endgame BG
                await tugOfWarPage.deleteUploadedEndgameBG()

                //upload Endgame BG
                await tugOfWarPage.uploadEndgameBG()


                //input Custom Endgamer Massage
                await tugOfWarPage.inputCustomEndgamerMassage()

                //input Custom Winner Title
                await tugOfWarPage.inputCustomWinnerTitle()

                //input Winner Add URL
                await tugOfWarPage.inputWinnerAddURL()

                await page.waitForTimeout(3000)


                //input Custom Consolation Massage
                await tugOfWarPage.inputCustomConsolationMassage()



                //input Consolation AddURL
                await tugOfWarPage.inputConsolationAddURL()

                await page.waitForTimeout(3000)

                //enable Endgame AdsBtn
                await tugOfWarPage.enableEndgameAdsBtn()

                //input Endgame Timer
                await tugOfWarPage.inputEndgameTimer()



                await page.waitForTimeout(6000)




        })



})


test.skip("Verify Leaderboard Section", async ({ loginPage, tugOfWarPage, page, }, testInfo) => {


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

                //click Tug Of War Page
                await tugOfWarPage.clickTugOfWarPage()


        })

        await test.step("008TOFW-003 | Varify Leaderboard Selection Settings", async () => {


                //click Leaderboard Page
                await tugOfWarPage.clickLeaderboardPage()

                await page.waitForTimeout(3000)


                //enable Stage For Leaderboard
                await tugOfWarPage.enableStageForLeaderboard()


                //click Leaderboard Image Text
                await tugOfWarPage.clickLeaderboardImageText()

                //delete Uploaded Leaderboard BG
                await tugOfWarPage.deleteUploadedLeaderboardBG()


                //upload Leaderboard BG
                await tugOfWarPage.uploadLeaderboardBG()

                await page.waitForTimeout(3000)


                //delete Leaderboard Header Uploaded Image
                await tugOfWarPage.deleteLeaderboardHeaderUploadedImage()

                //upload Leaderboard Header Image
                await tugOfWarPage.uploadLeaderboardHeaderImage()

                await page.waitForTimeout(3000)


                //input Leaderboard Timer
                await tugOfWarPage.inputLeaderboardTimer()




                await page.waitForTimeout(6000)




        })



})

test.skip("Verify Thanks You Section", async ({ loginPage, tugOfWarPage, page, }, testInfo) => {


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

                //click Tug Of War Page
                await tugOfWarPage.clickTugOfWarPage()


        })

        await test.step("008TOFW-003 | Varify Thank You Selection Settings", async () => {


                //click ThankYou Stage 
                await tugOfWarPage.clickThankYouStage()

                await page.waitForTimeout(3000)


                //enable Stage For ThankYou
                await tugOfWarPage.enableStageForThankyouStage()


                //click ThankYou Image Text
                await tugOfWarPage.clickThankYouImagesText()

                //delete Uploaded ThankYou BG
                await tugOfWarPage.deleteUploadedThankYouImagesBG()


                //upload ThankYou BG
                await tugOfWarPage.uploadThankYouStageImagesBG()

                //input Url Redirect Massage
                await tugOfWarPage.inputUrlRedirectMassage()

                //input AutoReset Timer
                await tugOfWarPage.inputAutoResetTimer()

                await page.waitForTimeout(3000)




        })



})

test.skip("Verify Add New Config", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {


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

                //click Tug Of War Page
                await tugOfWarPage.clickTugOfWarPage()


        })

        await test.step("008TOFW-003 | Varify Thank You Selection Settings", async () => {


                //click AddNew Config Plus Btn 
                await tugOfWarPage.clickAddNewConfigPlusBtn()

                await page.waitForTimeout(3000)


                //verify AddNew ConfigPlus Window Text
                await tugOfWarPage.verifyAddNewConfigPlusWindowText()


                //input Configuration Name
                await tugOfWarPage.inputConfigurationName()

                //click Add Btn
                await tugOfWarPage.clickAddBtn()

                await tugOfWarPage.clickStagesBtn()

                await page.waitForTimeout(6000)


                await tugOfWarPage.clickGameDesignBtn()

                await page.waitForTimeout(6000)

                await functions.fontUploadFunction()
                await tugOfWarPage.clickUploadFontBtn()

                await page.waitForTimeout(6000)


                

                //click Primary Color Picker Btn
                await tugOfWarPage.clickPrimaryColorPickerBtn()

                //input Primary RGB First Color
                await tugOfWarPage.inputPrimaryRGBFirstColor()

                //input Primary RGB Second Color
                await tugOfWarPage.inputPrimaryRGBSecondColor()

                //input Primary RGB Third Color
                await tugOfWarPage.inputPrimaryRGBThirdColor()

                //input Primary Color Opacity
                await tugOfWarPage.inputPrimaryColorOpacity()

                //input Primary Color HEX
                await tugOfWarPage.inputPrimaryColorHEX()

                //clic Save Btn
                await tugOfWarPage.clicSaveBtn()

                //click Secondary Color Picker Btn
                await tugOfWarPage.clickSecondaryColorPickerBtn()

                await page.waitForTimeout(3000)


                //input Secondary RGB First Color
                await tugOfWarPage.inputSecondaryRGBFirstColor()

                //input Secondary RGB Second Color
                await tugOfWarPage.inputSecondaryRGBSecondColor()

                //input Secondary RGB Third Color
                await tugOfWarPage.inputSecondaryRGBThirdColor()

                //input Secondary Color Opacity
                await tugOfWarPage.inputSecondaryColorOpacity()

                //input Secondary Color HEX
                await tugOfWarPage.inputSecondaryColorHEX()
                //clic Save Btn
                await tugOfWarPage.clicSaveBtn()

                //click Text Color Picker Btn
                await tugOfWarPage.clickTextColorPickerBtn()

                await page.waitForTimeout(3000)


                //input Text RGB First Color
                await tugOfWarPage.inputTextRGBFirstColor()


                //input Text RGB SecondColor
                await tugOfWarPage.inputTextRGBSecondColor()


                //input Text RGB Third Color
                await tugOfWarPage.inputTextRGBThirdColor()


                //input Text Color Opacity
                await tugOfWarPage.inputTextColorOpacity()

                //input Text Color HEX
                await tugOfWarPage.inputTextColorHEX()

                //clic Save Btn
                await tugOfWarPage.clicSaveBtn()


                //function for banner upload
                await functions.bannerImageUploadFunction()
                //click For Upload Mainboard BG
                await tugOfWarPage.clickForUploadMainboardBG()
                await page.waitForTimeout(6000)

                //function for banner upload
                await functions.bannerImageUploadFunction()
                //click For Upload Mobile BG
                await tugOfWarPage.clickForUploadMobileBG()


                await page.waitForTimeout(6000)

       //click Start Game Btn
       await tugOfWarPage.clickStartGameBtn()
                

       
       //click Mobile Link Btn
       await tugOfWarPage.clickMobileLinkBtn()


       await page.waitForTimeout(6000)

       
        //click Mobile Link Open Btn
        await tugOfWarPage.clickMobileLinkOpenBtn()
       
       
                await tugOfWarPage.clickGameDeleteBtn()

                await page.waitForTimeout(6000)

                await tugOfWarPage.deleteGame()

                await page.waitForTimeout(6000)




        })



})

