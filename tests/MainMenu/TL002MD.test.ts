import test, { expect } from "@fixtures/basePages";
import * as data from "../../data/login.cred.json";
import Env from "@utils/environment";


test.describe('Mobile Design Functionality', async () =>{      
   
const filePath0 = "files/Midnight.ttf"  
test("E2E test", async ({  loginPage, MainMenu, page }) => {

await test.step("Verify that admin saccessfully go to the mobiledesign page", async () => {

                
        
                        
        
                        await page.goto('/admin/#/sign-in')
                        await loginPage.login(data.username, data.password)
                        const title = await page.title();
                        expect(title).toBe('DXP Admin')
        
                        await MainMenu.clickHomeAvater();
        
                        await page.waitForTimeout(3000);
        
                        await MainMenu.mainMenuBtn();
        
                        await page.waitForTimeout(3000);

                        await MainMenu.clickMobileDesign();

                        await page.waitForTimeout(3000)
        
                        // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        
        
                       
        
        
        
        
                


})        


await test.step("Verify that admin saccessfully upload a font into", async () => {








                // let ele = MainMenu.clickMobileDesign()
                // expect(await ele.getAtribute("placeholder")).toBe("Mobile Deseign")
                // console.log(await MainMenu.mobileDesign())

                // await MainMenu.clickUploadFontAndUploadFiles();


                page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await MainMenu.clickUploadFontInputFiled()

                await page.waitForTimeout(3000);




















})

await test.step("Verify that admin saccessfully input parimary color", async () => {











                await MainMenu.clickClearAllBtn();
                await page.waitForTimeout(3000);

                await MainMenu.checkPrimaryColortxt()

                await MainMenu.clickPrimaryColorField()
                await page.waitForTimeout(3000);

  

                await MainMenu.primaryColorFirstInputField()

                await MainMenu.primaryColorSecondInputField()

                await MainMenu.primaryColorThirdInputField()

                await MainMenu.primaryColorOpacityInputField()

                await MainMenu.primaryColorHexInputField()

                await MainMenu.clickSaveBtn()
                await page.waitForTimeout(3000);






























        })
await test.step("Verify that admin saccessfully input secondary color", async () => {







                await MainMenu.checkSecondaryText();

                await MainMenu.clickSecondaryColorBtn();
                await page.waitForTimeout(3000);

                await MainMenu.SecondaryColorFirstInputField()

                await MainMenu.SecondaryColorSecondInputField()

                await MainMenu.SecondaryColorThirdInputField()

                await MainMenu.SecondaryColorOpacityInputField()

                await MainMenu.SecondaryColorHexInputField()

                await page.waitForTimeout(3000);

                await MainMenu.clickSaveBtn()






})

await test.step("Verify that admin saccessfully input Tertiary color", async () => {


                await MainMenu.checkTertiaryText();

                await MainMenu.clickTertiaryColorBtn();
                await page.waitForTimeout(3000);

                
                await MainMenu.TertiaryColorFirstInputField()

                await MainMenu.TertiaryColorSecondInputField()

                await MainMenu.TertiaryColorThirdInputField()

                await MainMenu.TertiaryColorOpacityInputField()

                await MainMenu.TertiaryColorHexInputField()

                await MainMenu.clickSaveBtn()






})

await test.step("Verify that admin saccessfully input Button color", async () => {


                await MainMenu.checkButtonText();

                await MainMenu.clickButtonColorBtn();
                await page.waitForTimeout(3000);

                await MainMenu.ButtonColorFirstInputField()

                await MainMenu.ButtonColorSecondInputField()

                await MainMenu.ButtonColorThirdInputField()

                await MainMenu.ButtonColorOpacityInputField()

                await MainMenu.ButtonColorHexInputField()

                await MainMenu.clickSaveBtn()

                



})

await test.step("Verify that admin saccessfully input Button Glow color", async () => {


                await MainMenu.checkButtonGlowText();

                await MainMenu.clickButtonGlowColorBtn();
                await page.waitForTimeout(3000);

                await MainMenu.ButtonGlowColorFirstInputField()

                await MainMenu.ButtonGlowColorSecondInputField()

                await MainMenu.ButtonGlowColorThirdInputField()

                await MainMenu.ButtonGlowColorOpacityInputField()

                await MainMenu.ButtonGlowColorHexInputField()

                await MainMenu.clickSaveBtn()

                



})

await test.step("Verify that admin saccessfully input Text Field color", async () => {


                await MainMenu.checkTextText();

                await MainMenu.clickTextColorBtn();
                await page.waitForTimeout(3000);

                await MainMenu.TextColorFirstInputField()

                await MainMenu.TextColorSecondInputField()

                await MainMenu.TextColorThirdInputField()

                await MainMenu.TextColorOpacityInputField()

                await MainMenu.TextColorHexInputField()

                await MainMenu.clickSaveBtn()

                



})

await test.step("Verify that admin saccessfully input Text Field color", async () => {


                await MainMenu.checkTextDialogBoxText();

                await MainMenu.clickTextDialogBoxColorBtn();
                await page.waitForTimeout(3000);

                await MainMenu.TextDialogBoxColorFirstInputField()

                await MainMenu.TextDialogBoxColorSecondInputField()

                await MainMenu.TextDialogBoxColorThirdInputField()

                await MainMenu.TextDialogBoxColorOpacityInputField()

                await MainMenu.TextDialogBoxColorHexInputField()

                await MainMenu.clickSaveBtn()

                



})

await test.step("Verify that admin saccessfully input Header Field color", async () => {


                await MainMenu.checkHeaderFieldText();

                await MainMenu.clickHeaderFieldColorBtn();
                await page.waitForTimeout(3000);

                await MainMenu.HeaderColorFirstInputField()

                await MainMenu.HeaderColorSecondInputField()

                await MainMenu.HeaderColorThirdInputField()

                await MainMenu.HeaderColorOpacityInputField()

                await MainMenu.HeaderColorHexInputField()

                await MainMenu.clickSaveBtn()

                



})

await test.step("Verify that admin saccessfully input Header Field color", async () => {


                await MainMenu.checkHeaderTextFieldText();

                await MainMenu.clickHeaderTextFieldColorBtn();
                await page.waitForTimeout(3000);

                await MainMenu.HeaderTextColorFirstInputField()

                await MainMenu.HeaderTextColorSecondInputField()

                await MainMenu.HeaderTextColorThirdInputField()

                await MainMenu.HeaderTextColorOpacityInputField()

                await MainMenu.HeaderTextColorHexInputField()

                await MainMenu.clickSaveBtn()

                



})

await test.step("Verify that admin saccessfully input Gamification Field color", async () => {


                await MainMenu.checkGamificationFieldText();

                await MainMenu.clickGamificationFieldColorBtn();
                await page.waitForTimeout(3000);

                await MainMenu.GamificationColorFirstInputField()

                await MainMenu.GamificationColorSecondInputField()

                await MainMenu.GamificationColorThirdInputField()

                await MainMenu.GamificationColorOpacityInputField()

                await MainMenu.GamificationColorHexInputField()

                await MainMenu.clickSaveBtn()

                



})

await test.step("Verify that admin saccessfully input Gamification Glow Line Field color", async () => {


                await MainMenu.checkGamificationGlowLineFieldText();

                await MainMenu.clickGamificationGlowLineFieldColorBtn();
                await page.waitForTimeout(3000);

                await MainMenu.GamificationGlowLineColorFirstInputField()

                await MainMenu.GamificationGlowLineColorSecondInputField()

                await MainMenu.GamificationGlowLineColorThirdInputField()

                await MainMenu.GamificationGlowLineColorOpacityInputField()

                await MainMenu.GamificationGlowLineColorHexInputField()

                await MainMenu.clickSaveBtn()

                



})

// await test.step("Upload First Image", async () => {

// const filePath1 = "files/page.png"  

// await page
//         .on("filechooser", async (filechooser) => {
//                 await filechooser.setFiles([filePath1])
//     })
//     await MainMenu.clickLandscapeBackgroundInputField();
        
// await page.waitForTimeout(30000)


// })


        

})


})