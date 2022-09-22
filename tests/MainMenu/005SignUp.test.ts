import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'



test.describe('Mobile Design Functionality', async () => {

        const filePath0 = './videos/a.png';


        test("E2E test", async ({ loginPage, MainMenu, languagePage, menuPage, singupPage, page, }, testInfo) => {


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



                await test.step("Verify Admin successfully go to signup page", async () => {
                        const screenshot = await page.screenshot();
                        await singupPage.clickSignUpPage()
                        await testInfo.attach("click on the signup page", {
                                contentType: "image/png",
                                body: screenshot
                        })

                        // check registration options text
                        await singupPage.checkRegistrationOptionPage()





                })

                await test.step("Verify Registration Options", async () => {
                        const screenshot = await page.screenshot();



                        await singupPage.checkSocialMediaLogins()

                        await singupPage.checkEmailValidation()
                        await testInfo.attach("Click on the email validation radio button", {
                                contentType: "image/png",
                                body: screenshot
                        })

                        // check phone number validation text
                        await singupPage.checkPhoneNumberValidationText()

                        //click on the phone number validation radio button 
                        await singupPage.clickPhoneNumberValidation()

                        //check AnonymousLoginText
                        await singupPage.checkAnonymousLoginText()


                        //check AnonymousLoginText
                        await singupPage.clickAnonymousLogin()


                })

                await test.step("Verify Age Information", async () => {
                        const screenshot = await page.screenshot();


                        //check age information text
                        await singupPage.checkAgeInformationText()

                        //click on the thirteen or older aga radio button
                        await singupPage.clickthirteenOrOlder()
                        await testInfo.attach("click on the thirteen or older aga radio button", {
                                contentType: "image/png",
                                body: screenshot
                        })

                        // check thirteen years text
                        await singupPage.checkMustThirteenYearsText()

                        //click on the custom or older register radio button 
                        await singupPage.clickCustomOrOlderRegister()

                        //input age custom or older input field 
                        await singupPage.inputCustomOrOlderAge()


                        //click on the defined age radio button
                        await singupPage.clickuserDefinedAge()

                        //input data first defined input field 
                        await singupPage.inputFirstDefinedAge()

                        //input data second defined input field 
                        await singupPage.inputSecondDefinedAge()
                })

                await test.step("Verify User Releted Options", async () => {
                        const screenshot = await page.screenshot();


                        //check user profile automatically assaign username text
                        await singupPage.checkAutomatacllyAssignUsernameText()

                        //click user profile automatically assaign username btn
                        await singupPage.clickAutomatacllyAssignUsernameBtn()
                        await testInfo.attach("click user profile automatically assaign username btn", {
                                contentType: "image/png",
                                body: screenshot
                        })

                        // check Auto Username prifix  text
                        await singupPage.checkAutoUserNamePrifixText()

                        //input username prifix data 
                        await singupPage.inputAutoUserNamePrifixData()

                })

                await test.step("Verify User Profile Set Section", async () => {
                        const screenshot = await page.screenshot();


                        //check user profile Profile picture set text
                        await singupPage.checkProfilePictureSetText()

                        //click add new set button
                        await singupPage.clickAddNewSetBtn()
                        await testInfo.attach("click add new set button", {
                                contentType: "image/png",
                                body: screenshot
                        })

                        // check profile picture set text
                        await singupPage.checkProfilePictureSetDialogBoxText()

                        //check set text title 
                        await singupPage.checkSetTitleText()
                        
                        //input set title data  
                        await singupPage.inputSetTitleData()

//check upload picture text 
await singupPage.checkUploadPictureText()

//upload profile image 
await singupPage.uploadProfileSet()
                
await page.waitForTimeout(4000)

//click on the save button
await singupPage.clickSaveBtn()


                })

        })
})