import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class prizeDropPage {
        [x: string]: any;

        private page: Page;
        static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }



        //=======================================================
        //▶▶Start Title Stage Section Element       


        async clickPrizeDropSection() {
                const locator = this.page.locator('text=Prize Drop')
                expect(locator).toContainText('Prize Drop')
                await locator.click()
                // console.log("Successfully Click To Tug of War Page ")
        }

        async verifyConfigurationsText() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                const ele = await this.page.frameLocator('iframe').locator('text=Configurations')
                expect(ele).toContainText("Configurations") 
                        

        }

        async clickAddNewConfigPlusBtn() {
                const ele = await this.page.frameLocator('iframe').locator("(//h5[text()='Configurations']/following-sibling::button)[1]")
                await ele.click()

        }
        async verifyAddNewConfigPlusWindowText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='New Configuration']")
                expect(ele).toContainText("New Configuration")

        }

        
        async inputConfigurationName() {
                const ele = await this.page.frameLocator('iframe').locator('input[type="text"]')
                await ele.fill("Auto")

        }

        async clickAddBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='ADD']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        
//🔚 Closed Add New Config Section Element 
//=======================================================
//▶▶Start Game Design Section Element  
        async clickGameDesign() {
        await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsDelete >> p').nth(0).click()

        }

        async clickToUploadFont() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[1]")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async clickClearAllBtn() {
                const ele = await this.page.frameLocator('iframe').locator('text=Clear All')
                expect(ele).toBeVisible()
                await ele.click();

        }


  
//start main color section element
        async verifyMainColorText() {
                const ele =   await this.page.frameLocator('iframe').locator('text=Main Color')
                expect(ele).toContainText("Main Color")

        }


        async clickMainColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Main Color']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputMainRGRFirstColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }
        async inputMainRGRSecondColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }


        async inputMainRGRThirdColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("9")

        }

        async inputMainRGRFourColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("90")

        }

        async inputMainRGRFiveColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("F1d40FFF")

        }


        async clickColorPickerSaveBtn() {
                const ele = await this.page.frameLocator('iframe').locator('text=Save')
                expect(ele).toBeVisible()
                await ele.click()

        }

//start accent color section element

async verifyAccentColorText() {
        const ele =   await this.page.frameLocator('iframe').locator('text=Accent Color')
        expect(ele).toContainText("Accent Color")

}


async clickAccentColorPicker() {
        const ele = await this.page.frameLocator('iframe').locator("//p[text()='Accent Color']/following-sibling::button").first()
        expect(ele).toBeVisible()
        await ele.click()

}

async inputAccentRGRFirstColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
        expect(ele).toBeVisible()
        await ele.fill("189")

}
async inputAccentRGRSecondColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
        expect(ele).toBeVisible()
        await ele.fill("189")

}


async inputAccentRGRThirdColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
        expect(ele).toBeVisible()
        await ele.fill("9")

}

async inputAccentRGRFourColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
        expect(ele).toBeVisible()
        await ele.fill("90")

}

async inputAccentRGRFiveColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
        expect(ele).toBeVisible()
        await ele.fill("005782FF")

}

//start Text color section element

async verifyTextColorText() {
        const ele =   await this.page.frameLocator('iframe').locator('text=Text Color')
        expect(ele).toContainText("Text Color")

}


async clickTextColorPicker() {
        const ele = await this.page.frameLocator('iframe').locator("//p[text()='Text Color']/following-sibling::button").first()
        expect(ele).toBeVisible()
        await ele.click()

}

async inputTextRGRFirstColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
        expect(ele).toBeVisible()
        await ele.fill("189")

}
async inputTextRGRSecondColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
        expect(ele).toBeVisible()
        await ele.fill("179")

}


async inputTextRGRThirdColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
        expect(ele).toBeVisible()
        await ele.fill("229")

}

async inputTextRGRFourColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
        expect(ele).toBeVisible()
        await ele.fill("190")

}

async inputTextRGRFiveColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
        expect(ele).toBeVisible()
        await ele.fill("FFdFFFFF")

}


//start Text color section element

async verifyButtonColorText() {
        const ele =   await this.page.frameLocator('iframe').locator('text=Button Color')
        expect(ele).toContainText("Button Color")

}


async clickButtonColorPicker() {
        const ele = await this.page.frameLocator('iframe').locator("//p[text()='Button Color']/following-sibling::button").first()
        expect(ele).toBeVisible()
        await ele.click()

}

async inputButtonRGRFirstColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
        expect(ele).toBeVisible()
        await ele.fill("189")

}
async inputButtonRGRSecondColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
        expect(ele).toBeVisible()
        await ele.fill("179")

}


async inputButtonRGRThirdColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
        expect(ele).toBeVisible()
        await ele.fill("229")

}

async inputButtonRGRFourColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
        expect(ele).toBeVisible()
        await ele.fill("190")

}

async inputButtonRGRFiveColor() {
        const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
        expect(ele).toBeVisible()
        await ele.fill("577C98FF")

}

async clickToUploadFullScreenLogo() {
        const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]")
        expect(ele).toBeVisible()
        await ele.click()

}

async clickToUploadGameTitleImage() {
        const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]")
        expect(ele).toBeVisible()
        await ele.click()

}





























































async clickGameDeleteBtn() {
        await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsDelete >> p').nth(5).click()


}
async confirmDeleteBtn() {
        await this.page.frameLocator('iframe').locator("//button[text()='Delete']").click();

}




















//🔚 Closed Add New Config Section Element 
//=======================================================
//▶▶Start Game Design Section Element  











        async enableStage() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]")
                
                await ele.click()
                // if ((ele == false)) {
                //         // console.log("Enable Stage to be skip and jump to next one")
                //         await this.page.frameLocator('iframe')
                //                 .locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]")
                //                 .click()
                // }


        }
   

 

}

