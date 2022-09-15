import { expect } from "@fixtures/basePages";
import { Page } from "@playwright/test";
export default class MainMeun {
    [x: string]: any;

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    
   

    async clickHomeAvater() {
        await this.page.locator('button').nth(2).click()
    }

    async HomeAvater() {
        await this.page.locator('button').nth(2)
    }

    async mainMenuBtn() {
        await this.page.locator('text=Main Menu').click()
    }

    async clickMobileDesign() {
        await this.page.locator('text=Mobile Design').click()
    }
    
    async mobileDesign() {
        await this.page.locator('text=Mobile Design')
    }

    async uploadFont() {
        await this.page.locator('text=Upload Font')
    }

    async titleFont() {
        await this.page.locator('text=Fonts')
    }

    async clickUploadFontInputFiled() {
        await this.page.locator("(//div[@class='MuiBox-root css-1bfcot9']//div)[1]").first().click()
    }



    

    async clickClearAllBtn() {
        await this.page.locator("//button[text()='Clear All']").click()
    }

    async checkPrimaryColortxt() {
        await this.page.locator("//p[text()='Primary']").isVisible()
    }

    // async clickPrimaryColorField() {
    //     await this.page.locator("[type='button']:near(:text('Primary'))").click()
    // }

    async clickPrimaryColorField() {
        await this.page.locator("(//button[@backgroundcolor='#f1c40f']//div)[1]").click({force:true})
    }

    

    async primaryColorFirstInputField() {
        await this.page.locator("#mui-20").fill("231")
    }

    
    async primaryColorSecondInputField() {
        await this.page.locator("#mui-21").fill("195")
    }

    async primaryColorThirdInputField() {
        await this.page.locator("#mui-22").fill("14")
    }

    async primaryColorOpacityInputField() {
        await this.page.locator("#mui-23").fill("50")
    }

    async primaryColorHexInputField() {
        await this.page.locator("#mui-24").fill("ff2b6aff")
    }

    async clickSaveBtn() {
        await this.page.locator("//button[text()='Save']").click()
    }

    async primaryColorPickerWindowClose() {
        await this.page.locator("div.MuiBox-root.css-1x8a1gr").click()
    }

    async checkSecondaryText() {
        const locator = this.page.locator("//p[text()='Secondary']");
        await expect(locator).toContainText('Secondary');        
    }

    async clickSecondaryColorBtn() {
        await this.page.locator("//button[@backgroundcolor='#212936']//div[1]").click()                
        
    }

    
    async SecondaryColorFirstInputField() {
        await this.page.locator("#mui-25").fill("20")
    }

    
    async SecondaryColorSecondInputField() {
        await this.page.locator("#mui-26").fill("10")
    }

    async SecondaryColorThirdInputField() {
        await this.page.locator("#mui-27").fill("13")
    }

    async SecondaryColorOpacityInputField() {
        await this.page.locator("#mui-28").fill("55")
    }

    async SecondaryColorHexInputField() {
        await this.page.locator("#mui-29").fill("fd2b6aff")
    }

    async checkTertiaryText() {
        const locator = this.page.locator("//p[text()='Tertiary']");
        await expect(locator).toContainText('Tertiary');        
    }

    async clickTertiaryColorBtn() {
        await this.page.locator("//button[@backgroundcolor='#2b3648']").click()                
        
    }

    async TertiaryColorFirstInputField() {
        await this.page.locator("#mui-30").fill("20")
    }

    
    async TertiaryColorSecondInputField() {
        await this.page.locator("#mui-31").fill("10")
    }

    async TertiaryColorThirdInputField() {
        await this.page.locator("#mui-32").fill("13")
    }

    async TertiaryColorOpacityInputField() {
        await this.page.locator("#mui-33").fill("55")
    }

    async TertiaryColorHexInputField() {
        await this.page.locator("#mui-34").fill("fd2b6aff")
    }

    async checkButtonText() {
        const locator = this.page.locator("//p[text()='Button']");
        await expect(locator).toContainText('Button');        
    }

    async clickButtonColorBtn() {
        await this.page.locator("//button[@backgroundcolor='#577c98']//div[1]").click()                
        
    }

    async ButtonColorFirstInputField() {
        await this.page.locator("#mui-35").fill("50")
    }

    
    async ButtonColorSecondInputField() {
        await this.page.locator("#mui-36").fill("303")
    }

    async ButtonColorThirdInputField() {
        await this.page.locator("#mui-37").fill("432")
    }

    async ButtonColorOpacityInputField() {
        await this.page.locator("#mui-38").fill("53")
    }

    async ButtonColorHexInputField() {
        await this.page.locator("#mui-39").fill("573c98ff")
    }

    //Element of the Button Glow Field
    async checkButtonGlowText() {
        const locator = this.page.locator("//p[text()='Button Glow']");
        await expect(locator).toContainText('Button');        
    }

    async clickButtonGlowColorBtn() {
        await this.page.locator("//button[@backgroundcolor='#5FBCD2']//div[1]").click() 
                       
        
    }

    async ButtonGlowColorFirstInputField() {
        await this.page.locator("#mui-40").fill("110")
    }

    
    async ButtonGlowColorSecondInputField() {
        await this.page.locator("#mui-41").fill("302")
    }

    async ButtonGlowColorThirdInputField() {
        await this.page.locator("#mui-42").fill("431")
    }

    async ButtonGlowColorOpacityInputField() {
        await this.page.locator("#mui-43").fill("51")
    }

    async ButtonGlowColorHexInputField() {
        await this.page.locator("#mui-44").fill("573c98ff")
    }


    //Text Filed Eelement
    async checkTextText() {
        const locator = this.page.locator("//p[text()='Text']");
        await expect(locator).toContainText('Text');        
    }

    async clickTextColorBtn() {
        await this.page.locator("(//div[@class='MuiBox-root css-1meaen1'])[1]").click() 
                       
        
    }

    async TextColorFirstInputField() {
        await this.page.locator('(//input[@type="text"])[1]').fill("123")
    }

    
    async TextColorSecondInputField() {
        await this.page.locator('(//input[@type="text"])[2]').fill("313")
    }

    async TextColorThirdInputField() {
        await this.page.locator('(//input[@type="text"])[3]').fill("402")
    }

    async TextColorOpacityInputField() {
        await this.page.locator('(//input[@type="text"])[4]').fill("53")
    }

    async TextColorHexInputField() {
        await this.page.locator('(//input[@type="text"])[5]').fill("573e98ff")
    }


     //Text Dialog Box Filed Eelement
     async checkTextDialogBoxText() {
        const locator = this.page.locator("//p[text()='Text Dialog Box']");
        await expect(locator).toContainText('Text Dialog Box');        
    }

    async clickTextDialogBoxColorBtn() {
        await this.page.locator("//p[text()='Text Dialog Box']/following-sibling::button").click()
        
    }

    async TextDialogBoxColorFirstInputField() {
        await this.page.locator('(//input[@type="text"])[1]').fill("123")
    }

    
    async TextDialogBoxColorSecondInputField() {
        await this.page.locator('(//input[@type="text"])[2]').fill("313")
    }

    async TextDialogBoxColorThirdInputField() {
        await this.page.locator('(//input[@type="text"])[3]').fill("402")
    }

    async TextDialogBoxColorOpacityInputField() {
        await this.page.locator('(//input[@type="text"])[4]').fill("53")
    }

    async TextDialogBoxColorHexInputField() {
        await this.page.locator('(//input[@type="text"])[5]').fill("573e98ff")
    }


     //Text Header Filed Eelement
     async checkHeaderFieldText() {
        const locator = this.page.locator("//p[text()='Header']");
        await expect(locator).toContainText('Header');        
    }

    async clickHeaderFieldColorBtn() {
        await this.page.locator("//p[text()='Header']/following-sibling::button").click()
        
    }

    async HeaderColorFirstInputField() {
        await this.page.locator('(//input[@type="text"])[1]').fill("123")
    }

    
    async HeaderColorSecondInputField() {
        await this.page.locator('(//input[@type="text"])[2]').fill("313")
    }

    async HeaderColorThirdInputField() {
        await this.page.locator('(//input[@type="text"])[3]').fill("402")
    }

    async HeaderColorOpacityInputField() {
        await this.page.locator('(//input[@type="text"])[4]').fill("53")
    }

    async HeaderColorHexInputField() {
        await this.page.locator('(//input[@type="text"])[5]').fill("573e98ff")
    }


    
     //Text Header Text Filed Eelement
     async checkHeaderTextFieldText() {
        const locator = this.page.locator("//p[text()='Header Text']");
        await expect(locator).toContainText('Header Text');        
    }

    async clickHeaderTextFieldColorBtn() {
        await this.page.locator("//p[text()='Header Text']/following-sibling::button").click()
        
    }

    async HeaderTextColorFirstInputField() {
        await this.page.locator('(//input[@type="text"])[1]').fill("123")
    }

    
    async HeaderTextColorSecondInputField() {
        await this.page.locator('(//input[@type="text"])[2]').fill("313")
    }

    async HeaderTextColorThirdInputField() {
        await this.page.locator('(//input[@type="text"])[3]').fill("402")
    }

    async HeaderTextColorOpacityInputField() {
        await this.page.locator('(//input[@type="text"])[4]').fill("53")
    }

    async HeaderTextColorHexInputField() {
        await this.page.locator('(//input[@type="text"])[5]').fill("573e98ff")
    }


       //Text Gamification Filed Eelement
     async checkGamificationFieldText() {
        const locator = this.page.locator("//p[text()='Gamification']");
        await expect(locator).toContainText('Gamification');        
    }

    async clickGamificationFieldColorBtn() {
        await this.page.locator("//p[text()='Gamification']/following-sibling::button").click()
        
    }

    async GamificationColorFirstInputField() {
        await this.page.locator('(//input[@type="text"])[1]').fill("123")
    }

    
    async GamificationColorSecondInputField() {
        await this.page.locator('(//input[@type="text"])[2]').fill("313")
    }

    async GamificationColorThirdInputField() {
        await this.page.locator('(//input[@type="text"])[3]').fill("402")
    }

    async GamificationColorOpacityInputField() {
        await this.page.locator('(//input[@type="text"])[4]').fill("53")
    }

    async GamificationColorHexInputField() {
        await this.page.locator('(//input[@type="text"])[5]').fill("573e98ff")
    }

      //Text Gamification Glow Line Filed Eelement
      async checkGamificationGlowLineFieldText() {
        const locator = this.page.locator("//p[text()='Gamification Glow Line']");
        await expect(locator).toContainText('Gamification Glow Line');        
    }

    async clickGamificationGlowLineFieldColorBtn() {
        await this.page.locator("//p[text()='Gamification Glow Line']/following-sibling::button").click()
        
    }

    async GamificationGlowLineColorFirstInputField() {
        await this.page.locator('(//input[@type="text"])[1]').fill("123")
    }

    
    async GamificationGlowLineColorSecondInputField() {
        await this.page.locator('(//input[@type="text"])[2]').fill("313")
    }

    async GamificationGlowLineColorThirdInputField() {
        await this.page.locator('(//input[@type="text"])[3]').fill("402")
    }

    async GamificationGlowLineColorOpacityInputField() {
        await this.page.locator('(//input[@type="text"])[4]').fill("53")
    }

    async GamificationGlowLineColorHexInputField() {
        await this.page.locator('(//input[@type="text"])[5]').fill("573e98ff")
    }

    async clickLandscapeBackgroundInputField() {
        await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[2]").click()
    }

    


    
    

    

    


    

   

    




    




    //Start function from here
    async clickUploadFontAndUploadFiles() {
        const filePath0 = "files/Thin.otf"
        this.page.on("filechooser", async (filechooser) => {
            await filechooser.setFiles([filePath0])
        })
        await this.clickUploadFontInputFiled();
    }


    

   
}

