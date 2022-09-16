import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json";
import Env from "@utils/environment";




test.use({ storageState: 'storageState.json' });

const filePath0 = "files/Midnight.ttf"

// test.beforeEach(async ({ page }) => {
//         await page.goto('/admin/#/sign-in')
        
// })




        test("Verify that admin saccessfully go to the mainmenu", async ({ loginPage, MainMenu, page, browser }) => {
                // const context = await browser.newContext({
                //         storageState: "./auth.json"
                // })

               

                // const ctxt = page.context();
                // ctxt.storageState()

                

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();

                await page.waitForTimeout(5000);

                await MainMenu.mainMenuBtn();

                await page.waitForTimeout(5000);

                await page.context().storageState({ path: 'storageState.json' })

               




        })

        test.only("Validate The mobile Design Page", async ({ loginPage, MainMenu, page }) => {

                // test.use({ storageState: 'storageState.json' });
                // await context().storageState({ path: 'adminStorageState.json' });
                
                await page.goto('/admin/#/sign-in')

                await MainMenu.clickHomeAvater();

                await page.waitForTimeout(5000);

                await MainMenu.mainMenuBtn();

                await page.waitForTimeout(5000);


                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(5000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)













        })

        test("Verify that admin saccessfully upload a font into", async ({ loginPage, MainMenu, page }) => {








                // let ele = MainMenu.clickMobileDesign()
                // expect(await ele.getAtribute("placeholder")).toBe("Mobile Deseign")
                // console.log(await MainMenu.mobileDesign())

                // await MainMenu.clickUploadFontAndUploadFiles();


                page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await MainMenu.clickUploadFontInputFiled()

                await page.waitForTimeout(5000);




















        })

        test("Verify that admin saccessfully input parimary color", async ({ loginPage, MainMenu, page }) => {











                await MainMenu.clickClearAllBtn();
                await page.waitForTimeout(5000);

                await MainMenu.checkPrimaryColortxt()

                await MainMenu.clickPrimaryColorField()
                await page.waitForTimeout(5000);

                // await MainMenu.primaryColorPickerWindowClose()

                // await MainMenu.clickPrimaryColorField()
                // await page.waitForTimeout(5000);

                await MainMenu.primaryColorFirstInputField()

                await MainMenu.primaryColorSecondInputField()

                await MainMenu.primaryColorThirdInputField()

                await MainMenu.primaryColorOpacityInputField()

                await MainMenu.primaryColorHexInputField()

                await MainMenu.clickSaveBtn()
                await page.waitForTimeout(5000);






























        })

        test("Verify that admin saccessfully input secondary color", async ({ loginPage, MainMenu, page }) => {







                await MainMenu.checkSecondaryText();

                await MainMenu.clickSecondaryColorBtn();
                await page.waitForTimeout(5000);

                await MainMenu.SecondaryColorFirstInputField()

                await MainMenu.SecondaryColorSecondInputField()

                await MainMenu.SecondaryColorThirdInputField()

                await MainMenu.SecondaryColorOpacityInputField()

                await MainMenu.SecondaryColorHexInputField()

                await page.waitForTimeout(5000);

                await MainMenu.clickSaveBtn()






        })

        test("Verify that admin saccessfully input Tertiary color", async ({ loginPage, MainMenu, page }) => {


                await MainMenu.checkTertiaryText();

                await MainMenu.clickTertiaryColorBtn();
                await page.waitForTimeout(5000);

                await MainMenu.TertiaryColorFirstInputField()

                await MainMenu.TertiaryColorSecondInputField()

                await MainMenu.TertiaryColorThirdInputField()

                await MainMenu.TertiaryColorOpacityInputField()

                await MainMenu.TertiaryColorHexInputField()

                await MainMenu.clickSaveBtn()






        })





function context() {
        throw new Error("Function not implemented.");
}

