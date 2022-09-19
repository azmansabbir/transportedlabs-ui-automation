import { expect, Page } from "@playwright/test";
export default class languagePage {        

    private page: Page;
        static login: any;           
    constructor(page: Page) {
        this.page = page;
    }

    //Language Page Button Element
    async clickLanguagePage() {
        const locator = this.page.locator("//p[text()='Language']")
        expect(locator).toContainText('Language')
        await locator.click()
    }

    //Language Header Text Elemant
    async checkLanguageHeaderText() {
        const ele = this.page.locator("//h4[text()='Language Settings']")
        expect(ele).toContainText('Language Settings')        
    }

    //Language Controls Text Element
    async checkLanguageControlsText() {
        const ele = this.page.locator("//h4[text()='Language Controls']")
        expect(ele).toContainText('Language Controls')        
    }

    //Language Controls Elable disable btn Element
    async checkLanguageControlsDisabledBtn() {
        // const ele = this.page.locator("input[type='checkbox']");
        if (await this.page.isHidden("//h4[text()='Selection Menu']"))
        {
           await this.page.click("input[type='checkbox']");
        }
                   
    }




        //Language Controls Elable disable btn Element
    async checkUserSelectableText() {
        const ele = this.page.locator("//span[text()='User Selectable']");
        expect(ele).toContainText("User Selectable")

       
    }

    
    //Language Controls Elable disable btn Element
    async clickUserSelectableRadioBtn() {
        if (await this.page.isHidden("//h5[text()='Landing page of the user registration flow:']"))
        {
            await this.page.check("(//input[@type='radio'])[1]", {force:true});
        }         
        }

        //Language Controls Elable disable btn Element
    async clickUserRegistrationSelectableInputField() {
        
            const ele = this.page.locator("(//div[@role='button'])[1]");
            expect(ele).toBeVisible()
            await ele.click()
       
        }

        //Language Controls Elable disable btn Element
        async clickUserProfileSelectableInputField() {
            const ele = this.page.locator("(//div[@role='button'])[2]");
            expect(ele).toBeVisible()
            await ele.click({force:true})

       
        }        
        

        
        
        //Language Controls Elable disable btn Element
        async checkUserForcedLanguageText() {
            const ele = this.page.locator("//span[text()='Forced Language']");
            expect(ele).toContainText('Forced Language')

       
        }

        //Language Controls Elable disable btn Element
        async clickUserForceLanguage() {
         const ele = this.page.locator("input[value='forced']");
            expect(ele).toBeVisible()
            await ele.click()   
        }
        

    
        //Language Controls Elable disable btn Element
        async clickUserForceLanguageinputfield() {
            const ele = this.page.locator("xpath=//div[@role='button']");
            expect(ele).toBeVisible()
            await ele.click()

       
        }




   
}