import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'






test("Verify Prize Drop Game Section", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {


        await test.step("Login Admin And land To Home Screen", async () => {

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

        await test.step("008TOFW-001 | Add New Configuration", async () => {


                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                const screenshot = await page.screenshot();
                await testInfo.attach("click Prize Drop Section", {
                        contentType: "image/png",
                        body: screenshot
                })

                await page.waitForTimeout(5000)

                //verify Configurations Text
                await prizeDropPage.verifyConfigurationsText()

                //click Add New Config Plus Btn
                await prizeDropPage.clickAddNewConfigPlusBtn()

                //input Configuration Name
                await prizeDropPage.inputConfigurationName()

                await page.waitForTimeout(2000)


                //click Add Btn
                await prizeDropPage.clickAddBtn()

                //click Game Design
                await prizeDropPage.clickGameDesign()

                await page.waitForTimeout(4000)

        })

        await test.step("008TOFW-001 | Verify Game Desgin Functionality", async () => {


                //click Game Design
                await prizeDropPage.clickGameDesign()

                await page.waitForTimeout(4000)

                //UploadFont
                await functions.fontUploadFunction()
                await prizeDropPage.clickToUploadFont()


                //click Clear All Btn
                await prizeDropPage.clickClearAllBtn()


                //verify Main Color Text
                await prizeDropPage.verifyMainColorText()


                //click Main Color Picker
                await prizeDropPage.clickMainColorPicker()


                //input Main RGR First Color
                await prizeDropPage.inputMainRGRFirstColor()


                //input Main RGR Second Color
                await prizeDropPage.inputMainRGRSecondColor()


                //input Main RGR Third Color
                await prizeDropPage.inputMainRGRThirdColor()


                //input Main RGR Four Color
                await prizeDropPage.inputMainRGRFourColor()


                //input Main RGR Five Color
                await prizeDropPage.inputMainRGRFiveColor()


                //click Color Picker SaveBtn
                await prizeDropPage.clickColorPickerSaveBtn()


                //verify Accent Color Text
                await prizeDropPage.verifyAccentColorText()


                //click Accent Color Picker
                await prizeDropPage.clickAccentColorPicker()


                //input Accent RGR First Color
                await prizeDropPage.inputAccentRGRFirstColor()


                //input Accent RGR Second Color
                await prizeDropPage.inputAccentRGRSecondColor()


                //input Accent RGR Third Color
                await prizeDropPage.inputAccentRGRThirdColor()


                //input Accent RGR Four Color
                await prizeDropPage.inputAccentRGRFourColor()


                //input Accent RGR Five Color
                await prizeDropPage.inputAccentRGRFiveColor()

                //click Color Picker SaveBtn
                await prizeDropPage.clickColorPickerSaveBtn()






                //verify Text Color Text
                await prizeDropPage.verifyTextColorText()


                //click Text Color Picker
                await prizeDropPage.clickTextColorPicker()


                //input Text RGR First Color
                await prizeDropPage.inputTextRGRFirstColor()


                //input Text RGR Second Color
                await prizeDropPage.inputTextRGRSecondColor()


                //input Text RGR Third Color
                await prizeDropPage.inputTextRGRThirdColor()


                //input Text RGR Four Color
                await prizeDropPage.inputTextRGRFourColor()


                //input Text RGR Five Color
                await prizeDropPage.inputTextRGRFiveColor()



                //click Color Picker SaveBtn
                await prizeDropPage.clickColorPickerSaveBtn()






                //click Game Design
                await prizeDropPage.verifyButtonColorText()


                //click Game Design
                await prizeDropPage.clickButtonColorPicker()


                //input Button RGR First Color
                await prizeDropPage.inputButtonRGRFirstColor()



                //input Button RGR Second Color
                await prizeDropPage.inputButtonRGRSecondColor()

                //input Button RGR Third Color
                await prizeDropPage.inputButtonRGRThirdColor()



                //input Button RGR Four Color
                await prizeDropPage.inputButtonRGRFourColor()



                //input Button RGR Five Color
                await prizeDropPage.inputButtonRGRFiveColor()

                    //click Color Picker SaveBtn
                    await prizeDropPage.clickColorPickerSaveBtn()



                await page.waitForTimeout(4000)

        })


        await test.step("008TOFW-001 | Verify Game Desgin Functionality", async () => {


                //click Game Delete Btn
                await prizeDropPage.clickGameDeleteBtn()

                await page.waitForTimeout(1000)

                              //confirm Delete Btn
                              await prizeDropPage.confirmDeleteBtn()
                await page.waitForTimeout(4000)

        })

})


