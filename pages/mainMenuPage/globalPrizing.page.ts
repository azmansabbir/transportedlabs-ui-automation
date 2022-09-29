import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class globalPrizingPage {
        [x: string]: any;

        private page: Page;
        static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }

        //click GlobalPrizing Page
        async clickGlobalPrizingPage() {
                const locator = this.page.locator("//p[text()='Global Prizing']")
                expect(locator).toContainText('Global Prizing')
                await locator.click()
        }

        //click AddNew Prize Btn
        async clickAddNewPrizeBtn() {
                const locator = this.page.locator("//button[text()='Add New Prize']")
                expect(locator).toContainText('Add New Prize')
                await locator.click()
        }

        //input Prize Name
        async inputPrizeName() {
                const locator = this.page.locator("//input[@placeholder='Enter prize name...']")
                expect(locator).toBeVisible()
                await locator.fill("Auto Test")
        }

        //select Prize Category
        async selectPrizeCategory() {
                const locator = this.page.locator("div[role='button']")
                await locator.dblclick()
                // // expect(locator).toBeVisible()
                // await locator.selectOption({ label: 'Option 2' })
        }

        //select Prize Category
        async selectPrizeCategoryAirDrop() {
                const locator = this.page.locator("text=AR Drop")
                await locator.click()
                // // expect(locator).toBeVisible()
                // await locator.selectOption({ label: 'Option 2' })
        }

        async selectPrizeCategoryGeneral() {
                const locator = this.page.locator("//li[@data-value='general']")
                await locator.click({force:true})
                // // expect(locator).toBeVisible()
                // await locator.selectOption({ label: 'Option 2' })
        }


        //p[text()='Drag your image here, or browse']
        async uploadPrizeImage() {
                const buffer = readFileSync('./videos/a.png');
                // Create the DataTransfer and File
                const dataTransfer = await this.page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
                await this.page.dispatchEvent("//p[text()='Drag your image here, or browse']", 'drop', { dataTransfer });

        }
        
        //Checked Social Media Logins
        async inputPrizeDiscription() {


                const ele = await this.page.locator("textarea[rows='3']")
                expect(ele).toHaveAttribute("placeholder", 'Give some description here...')
                await ele.fill("lorim upsum dorlo")
        
        }


        //Checked Social Media Logins
        async clickPrizeExpirationNone() {


                let ele = await this.page.locator("(//input[@type='checkbox'])[1]").isVisible()

                if ((ele == false)) {
                        // console.log("Prize Expiration Select None")
                        await this.page.locator("(//input[@type='checkbox'])[1]").click()

                }
        }
        //Checked Social Media Logins
        async clickLoadCSVCheckBox() {

                let ele = await this.page.locator("input[value='csv']").isVisible()

                if ((ele == true)) {
                        // console.log("click Load CSV Check Box")
                        await this.page.locator("input[value='csv']").click()

                }



                // if (await this.page.isChecked("input[value='csv']")) {
                //         await this.page.click("input[value='csv']");
                // }

        }    

        async uploadCSVFile() {
                const filePath0 = "testData/csv/csv.csv"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.locator("//button[text()='Upload']").click()
        }
        async clickGenerateTextcodeCheckBox() {


                let ele = await this.page.locator("input[value = 'textcode']").isVisible()

                if ((ele == true)) {
                        // console.log("click Generate Text code Check Box")
                        await this.page.locator("input[value='barcode']").click()

                }
                else{

                        await this.page.locator("input[value = 'textcode']").click()

                }
        }

        async clickAutogenerateCheckBox() {


                let ele = await this.page.locator("input[value='auto']").isVisible()

                if ((ele == true)) {
                        // console.log("click Auto generate Check Box")
                        await this.page.locator("input[value='auto']").click()

                }
               
        }
        async inputAutoGeneratePrifix() {
                await this.page.locator("(//span[text()='Autogenerate']/following::input)[1]").fill("AutoPrifix")

        }

        
        async clickSMSSharingCheckBox() {
                let ele = await this.page.locator("(//span[text()='Prefix']/following::input)[1]").isVisible()

                if ((ele == true)) {
                        // console.log("click SMS Sharing Check Box")
                        await this.page.locator("(//span[text()='Prefix']/following::input)[1]").click()

                }

        }
        async clickEmailSharingCheckBox() {
                let ele = await this.page.locator("(//span[text()='SMS sharing']/following::input)[1]").isVisible()

                if ((ele == true)) {
                        // console.log("click Email Sharing Check Box")
                        await this.page.locator("(//span[text()='SMS sharing']/following::input)[1]").click()

                }

        }
        async clickWalletSharingCheckBox() {
                let ele = await this.page.locator("(//span[text()='Email sharing']/following::input)[1]").isVisible()

                if ((ele == true)) {
                        // console.log("click Wallet Sharing Check Box")
                        await this.page.locator("(//span[text()='Email sharing']/following::input)[1]").click()

                }

        }
        async clickLimitPerUserCheckBox() {
                let ele = await this.page.locator("(//span[text()='Wallet sharing']/following::input)[1]").isVisible()

                if ((ele == true)) {
                        // console.log("click Limit Per User Check Box")
                        await this.page.locator("(//span[text()='Wallet sharing']/following::input)[1]").click()

                }

        } 
        
        async inputLimitPerUser() {
                let ele = await this.page.locator("input[type='number']")
                await ele.fill("15")


        }  
        
        async clickperEventCheckBox() {
                let ele = await this.page.locator("//span[text()='per event']")

                await ele.check()
                // if ((ele == true)) {
                //         console.log("click per event Check Box")
                //         await this.page.locator("(//input[@value='false'])[2]").click()

                // }

        } 

        async clickSaveBtn() {
                const ele = await this.page.locator("//button[text()='Save']")
                expect(ele).toContainText("Save")
                await ele.click({force:true})

                

        } 


//Deleted Prize Element

async searchPrize() {
        let ele = await this.page.locator("//input[@placeholder='Search...']").isVisible()

        if ((ele == true)) {
                // console.log("click Limit Per User Check Box")
                await this.page.locator("//input[@placeholder='Search...']").fill("Auto Test")

        }
        // const ele = await this.page.locator("//input[@placeholder='Search...']")
        // expect(ele).toBeVisible()
        // await ele.fill("Auto Test")

        

} 

async deletePrize() {

        let ele = await this.page.locator("//button[text()='Delete']").isVisible()

                if ((ele == true)) {
                        // console.log("click Limit Per User Check Box")
                        await this.page.locator("//button[text()='Delete']").click()

                }


        

} 

async clickOkBtn() {

        let ele = await this.page.locator("//button[text()='Ok']").isVisible()

                if ((ele == true)) {
                        // console.log("click Limit Per User Check Box")
                        await this.page.locator("//button[text()='Ok']").click()

                }


        

} 




        

}