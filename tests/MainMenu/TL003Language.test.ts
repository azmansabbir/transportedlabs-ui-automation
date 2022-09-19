import test, { expect } from "@fixtures/basePages";
import languagePage from "@pages/language.page";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'



test.describe('Mobile Design Functionality', async () =>{   
        
        const filePath0 = './videos/a.png';
        
           
        test("E2E test", async ({  loginPage, MainMenu,languagePage, page }) => {
        
await test.step("Verify that admin saccessfully go to the mobiledesign page", async () => {
        
                        
                
                                
         await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
                
        await MainMenu.clickHomeAvater();
                

                
        await MainMenu.mainMenuBtn();
                

        
        await MainMenu.clickMobileDesign();
        

                        // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
    

        })  
await test.step("Verify that admin saccessfully go to the mobiledesign page", async () => {

//click on the language page
await languagePage.clickLanguagePage()

//check the language page header text
await languagePage.checkLanguageHeaderText()

//check language page controls button title text
await languagePage.checkLanguageControlsText()

//there is function if the button is disable then click on the disabled button
await languagePage.checkLanguageControlsDisabledBtn()

//Verify user selectable text
await languagePage.checkUserSelectableText()

await page.waitForTimeout(6000)


//Verify that the User Selectable Language checkbox is clicked or not
await languagePage.clickUserSelectableRadioBtn()


//Verify click on the user registration selectable input field
await languagePage.clickUserRegistrationSelectableInputField()

//Verify click on the user profile selectable input field
await languagePage.clickUserProfileSelectableInputField()

//Verify user forced language text
await languagePage.checkUserForcedLanguageText()

//Click on the user force language field
await languagePage.clickUserForceLanguage()

await languagePage.clickUserForceLanguageinputfield()


await page.waitForTimeout(6000)

                
             


})     

})




})