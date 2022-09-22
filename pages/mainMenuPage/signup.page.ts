import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class singupPage {
        [x: string]: any;

        private page: Page;
        static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }

        //Click SignUp Page Button Element
        async clickSignUpPage() {
                const locator = this.page.locator("//p[text()='Sign Up']")
                expect(locator).toContainText('Sign Up')
                await locator.click()
        }

        //Check Registration Options Text
        async checkRegistrationOptionPage() {
                const locator = this.page.locator("//h5[text()='Registration Options']")
                expect(locator).toContainText('Registration Options')
        }

        //Checked Social Media Logins
        async checkSocialMediaLogins() {

         

        
        // console.log(await this.page.locator("input[name = 'socialMediaLogins']").getAttribute("value"));
                //Assert checkbox2 is checked
        // expect(await this.page.isChecked("input[name = 'socialMediaLogins']")).toBeTruthy()
                      
                if ((await this.page.$("input[name = 'socialMediaLogins']")) !== null) {
                        await this.page.click("input[name = 'socialMediaLogins']")
                      }

                
        }

        //Checked Email Validation
        async checkEmailValidation() {
                if ((await this.page.$("input[name = 'socialMediaLogins']")) !== null) {
                        await this.page.click("input[value='emailValidation']")
                      }
                // const locator = this.page.locator("input[value='emailValidation']")
                // expect(locator).not.toBeChecked()
                // await locator.check();
        }
                        //Checked Phone Number Validation text
        async checkPhoneNumberValidationText() {
                const locator = this.page.locator("//span[text()='Phone Number Validation']")
                expect(locator).toContainText('Phone Number Validation')
        }

         //Checked Phone Number Validation
         async clickPhoneNumberValidation() {
                if ((await this.page.locator("input[value='phoneValidation']")) !== null) {
                        await this.page.click("input[value='phoneValidation']")
                      }
               
        }

                                //Checked Anonymous Login text
        async checkAnonymousLoginText() {
                const locator = this.page.locator("//span[text()='Anonymous Login']")
                expect(locator).toContainText('Anonymous Login')
        }

        async clickAnonymousLogin() { 
                if ((await this.page.locator("input[value='anonymousLogin']")) !== null) {
                await this.page.click("input[value='anonymousLogin']")
              }
        }

//Start Age Information Section Element 

async checkAgeInformationText() {
        const locator = this.page.locator("//h5[text()='Age Information']")
        expect.soft(locator).toContainText('Age Information')
}

async clickthirteenOrOlder() { 
                if ((await this.page.locator("input[value='thirteenOrOlder']")) !== null) {
                await this.page.click("input[value='anonymousLogin']")
              }
        }

        async checkMustThirteenYearsText() {
                const locator = this.page.locator("//span[text()='Users age must be 13 years or older']")
                expect.soft(locator).toContainText('Users age must be 13 years or older')
        }

        async clickCustomOrOlderRegister() { 
                if ((await this.page.locator("input[value='customOrOlder']")) !== null) {
                await this.page.click("input[value='customOrOlder']")
              }
        }

        async inputCustomOrOlderAge() {
                const locator = this.page.locator("#P4387192352")
                expect.soft(locator).toBeVisible()
                await locator.fill("20");
        }

        async clickuserDefinedAge() { 
                if ((await this.page.locator("input[value='userDefined']")) !== null) {
                await this.page.click("input[value='userDefined']")
              }
        }

        async inputFirstDefinedAge() {
                const locator = this.page.locator("#P4771670252")
                expect.soft(locator).toBeVisible()
                await locator.fill("15");
        }
        async inputSecondDefinedAge() {
                const locator = this.page.locator("#P-20363003362")
                expect.soft(locator).toBeVisible()
                await locator.fill("30");
        }

//🔚 Closed Age Information Section Element 
//=======================================================
//▶▶Start User Profile Section Element

async checkAutomatacllyAssignUsernameText() {
        const locator = this.page.locator("//span[text()='Automatically assign username']")
        expect.soft(locator).toContainText("Automatically assign username")        
}

async clickAutomatacllyAssignUsernameBtn() { 
        // const ele = this.page.locator("(//input[@type='checkbox'])[2]")
        // expect(ele).toBeVisible()
        // await ele.check()


        if ((await this.page.locator("(//input[@type='checkbox'])[2]"))) {
        await this.page.check("(//input[@type='checkbox'])[2]")
      }
}

async checkAutoUserNamePrifixText() {
        const locator = this.page.locator("//h5[text()='Auto Username Prefix']")
        expect.soft(locator).toContainText("Auto Username Prefix")        
}

async inputAutoUserNamePrifixData() {
        const locator = this.page.locator("//input[@id='P10604929752']")
        expect.soft(locator).toBeVisible()
        await locator.fill("user")       
}
//🔚End User Profile Section Element
//=======================================================
//▶▶Start User Profile Picture Set Section Element

async checkProfilePictureSetText() {
        const locator = this.page.locator("//h5[text()='Profile Picture Set']")
        expect.soft(locator).toContainText("Profile Picture Set")
              
}

async clickAddNewSetBtn() {
        if ((await this.page.locator("//button[text()='Add New Set']")) !== null) {
                await this.page.click("//button[text()='Add New Set']")
              }  
}

async checkProfilePictureSetDialogBoxText() {
        const locator = this.page.locator("//h2[text()='Profile Picture Set']")
        await this.page.waitForSelector("//h2[text()='Profile Picture Set']")
        expect.soft(locator).toContainText("Profile Picture Set")        
}

async checkSetTitleText() {
        const locator = this.page.locator("//h2[text()='Set Title']")
        expect.soft(locator).toContainText("Set Title")        
}


async inputSetTitleData() {
        const locator = this.page.locator("input#headlineField")
        expect.soft(locator).toBeVisible()
        await locator.fill('Jon Doe')       
}

async checkUploadPictureText() {
        const locator = this.page.locator("//h2[text()='Upload Pictures']")
        expect.soft(locator).toContainText("Upload Pictures")        
}

async uploadProfileSet() {        
        const profilepic = "testData/images/profile.png"
        this.page.on("filechooser", async (filechooser) => {
        await filechooser.setFiles([profilepic])
        })
        await this.page.click("div.MuiBox-root.css-v2612")  
}
async clickSaveBtn() {
        const locator = this.page.locator("//button[text()='Save']")        
        expect.soft(locator).toBeVisible()
        await locator.click()        
}

//🔚Closed User Profile Picture Set Section Element
//=======================================================
//▶▶Start User Profile Picture Set Section Element





} 

