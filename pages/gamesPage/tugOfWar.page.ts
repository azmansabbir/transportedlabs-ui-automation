import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class tugOfWarPage {
        [x: string]: any;

        private page: Page;
        static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }



//=======================================================
//▶▶Start Title Stage Section Element       

        //click Tug Of War Page
        async clickTugOfWarPage() {
                const locator = this.page.locator('text=Tug of War')
                expect(locator).toContainText('Tug of War')
                await locator.click()
                console.log("Successfully Click To Tug of War Page ")
        }

        async clickTitleStageTab(){    
        //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
        //         await this.page.waitForSelector(ele)        
        
                await this.page.frameLocator('iframe')
                        .locator('text=Title Stage')
                                .click({force:true})
                
        }

        async verifyEnableStageText(){               
        //      const ele = await this.page.frameLocator('iframe').locator('text=Enable Stage to be skip and jump to next one')
             await this.page.waitForSelector('text=Enable Stage to be skip and jump to next one')
                // expect(ele).toContainText("Enable Stage to be skip and jump to next one")          
        
                
        }

        async enableStage(){               
                const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
                   if ((ele == false)) {
                        console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[1]")
                                        .click()
                   }        
           
                   
           }
           async clickImageRadioBtn(){               
                const ele = await this.page.frameLocator('iframe').locator("input[value='image']").isVisible()
                   if ((ele == true)) {
                        console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("input[value='image']")
                                        .click()
                   }        
           
                   
           }
           async deletedUploadedTitleImageBG(){               
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]").isVisible()
                   if ((ele == true)) {
                        console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]")
                                        .click()
                   }        
           
                   
           }

           async uploadTitleBackgroundImage(){  
                
                
                let filePath0 = "testData/images/CountDownStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator('text=Title BackgroundImageVideo >> div').nth(3).click();
                   
           }
          
           async uploadTitleBackgroundVideo(){  
                
                
                let filePath0 = "testData/videos/video.mp4"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator('text=Title BackgroundImageVideo >> div').nth(3).click();
                   
           }

           async deleteUploadedGameTitleImageBG(){               
                let ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]").isVisible()
                   if ((ele == true)) {
                        console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]")
                                        .click()
                   }        
           
                   
           }


           async uploadGameTitleImage(){  
                
                
                let filePath0 = "testData/images/SelectionStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]").first().click();

                   
           }
           async deleteUploadedTeamLogo(){               
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]").isVisible()
                   if ((ele == true)) {
                        console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]")
                                        .click()
                   }        
           
                   
           }

           async uploadTeamLogo(){  
                
                
                let filePath0 = "testData/logos/gameTeamLogo.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").first().click();

                   
           }

           async deleteUploadedSponsorLogo(){               
                let ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1v2p79w']").isVisible()
                   if ((ele == true)) {
                        console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("//div[@class='MuiBox-root css-1v2p79w']")
                                        .click()
                   }        
           
                   
           }

           async uploadSponsorLogo(){  
                
                
                let filePath0 = "testData/logos/gameLogo.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").first().click();

                   
           }


//🔚 Closed Title Stage Section Element 
//=======================================================
//▶▶Start Selection Stage Section Element     



async clickSelectionStagePage() {
        const locator = this.page.frameLocator('iframe').locator("//p[text()='Selection Stage']")
        await locator.click()
        console.log("Successfully Click To Selection Stage Page ")
}

async clickSelectionImageText() {
        const locator = this.page.frameLocator('iframe').locator('text= Selection Images')
        expect(locator).toContainText('Selection Images')

}

async deleteUploadedSelactionBG(){               
        let ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1v2p79w']").isVisible()
           if ((ele == true)) {
                console.log("Enable Stage to be skip and jump to next one")
                await this.page.frameLocator('iframe')
                        .locator("//div[@class='MuiBox-root css-1v2p79w']")
                                .click()
           }        
   
           
   }

async uploadSelactionBG(){  
                
                
        let filePath1 = "testData/images/SelectionStageBanner.jpg"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath1])
        })
        await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1bfcot9']//div)[1]").first().click();

           
   }
   async uploadSelactionStageTeamLogo(){  
                
                
        let filePath1 = "testData/images/SelectionStageBanner.jpg"
        this.page.on("filechooser", async (filechooser) => {
                await filechooser.setFiles([filePath1])
        })
        await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1bfcot9']//div)[2]").first().click();

           
   }

async inputSelectionStageTeamName() {
        await this.page.frameLocator('iframe').locator("(//span[text()='Video']/following::input)[1]").fill("Jone Doe")
        
        
}

async inputNumberOfTeams() {
       const ele= await this.page.frameLocator('iframe').locator("(//input[@type='number'])[1]")
        await ele.fill('3')

}

async inputSelectionTimer() {
        const ele= await this.page.frameLocator('iframe').locator("//input[@max='59']")
         await ele.fill('20')
 
 }
 

 async clickAllowSelectionChangeCheckbox(){               
        let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
           if ((ele == true)) {
                console.log("click Allow Selection Change Check box")
                await this.page.frameLocator('iframe')
                        .locator("(//input[@type='checkbox'])[1]")
                                .click()
           }        
   
           
   }
   async clickCustomSelectionMassageCheckBox(){               
        let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
           if ((ele == true)) {
                console.log("click Custom Selection Massage CheckBox")
                await this.page.frameLocator('iframe')
                        .locator("(//input[@type='checkbox'])[1]")
                                .click()
           }        
   
           
   }
   async inputCustomSelectionMassgeText(){               
        let ele = await this.page.frameLocator('iframe').locator("mui-69").isVisible()
           if ((ele == true)) {
                console.log("input Custom Selection Massge Text")
                await this.page.frameLocator('iframe')
                        .locator("mui-69")
                                .click()
           }        
   
           
   }

   async clickCustomTeamSelectionMassageCheckBox(){               
        let ele = await this.page.frameLocator('iframe').locator("mui-69").isVisible()
           if ((ele == true)) {
                console.log("click Custom Team Selection Massage Check Box")
                await this.page.frameLocator('iframe')
                        .locator("mui-69")
                                .fill("lorim upsum dorlo")
           }        
   
           
   }

   async inputCustomeTeamSectionMassage(){               
        let ele = await this.page.frameLocator('iframe').locator("mui-68").isVisible()
           if ((ele == true)) {
                console.log("click Custom Team Selection Massage Check Box")
                await this.page.frameLocator('iframe')
                        .locator("mui-68")
                                .fill("lorim upsum dorlo")
           }        
   
           
   }

   async clickTeamNameBoxColorInput() {
        const ele= await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-h9vkmt'])[1]")
         await ele.click()
 
 }

 async inputTeamNameBoxColorRGBFirst() {
        const ele= await this.page.frameLocator('iframe').locator("//input[@id='mui-32']")
         await ele.fill("54")
 
 }

 async inputTeamNameBoxColorRGBSecond() {
        const ele= await this.page.frameLocator('iframe').locator("//input[@id='mui-33']")
         await ele.fill("115")
 
 } 
 async inputTeamNameBoxColorRGBThird() {
        const ele= await this.page.frameLocator('iframe').locator("//input[@id='mui-34']")
         await ele.fill("224")
 
 }

 async inputTeamNameBoxColorOpacity() {
        const ele= await this.page.frameLocator('iframe').locator("//input[@id='mui-35']")
         await ele.fill("224")
 
 }

 async inputTeamNameBoxColorHEXColor() {
        const ele= await this.page.frameLocator('iframe').locator("//input[@id='mui-36']")
         await ele.fill("224")
 
 }

 async clickSaveBtn() {
        const ele= await this.page.frameLocator('iframe').locator("//button[text()='Save']")
         await ele.click()
 
 }


 async clickTeamSelectedMassageBoxColorInput() {
        const ele= await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-h9vkmt'])[2]")
         await ele.click()
 
 }

 async inputTeamSelectedMassageBoxColorRGBFirst() {
        const ele= await this.page.frameLocator('iframe').locator("//input[@id='mui-37']")
         await ele.fill("154")
 
 }

 async inputTeamSelectedMassageBoxColorRGBSecond() {
        const ele= await this.page.frameLocator('iframe').locator("//input[@id='mui-38']")
         await ele.fill("115")
 
 } 
 async inputTeamSelectedMassageBoxColorRGBThird() {
        const ele= await this.page.frameLocator('iframe').locator("//input[@id='mui-39']")
         await ele.fill("224")
 
 }

 async inputTeamSelectedMassageBoxColorOpacity() {
        const ele= await this.page.frameLocator('iframe').locator("//input[@id='mui-40']")
         await ele.fill("224")
 
 }

 async inputTeamSelectedMassageBoxColorHEXColor() {
        const ele= await this.page.frameLocator('iframe').locator("//input[@id='mui-41']")
         await ele.fill("224")
 
 }














}

