import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class menuPage {

        private page: Page;
        static login: any;
        static buffer: void;

        constructor(page: Page) {
                this.page = page;
        }

        //Menu Page Button Element
        async clickMenuPage() {
                const locator = this.page.locator("//p[text()='Menu']")
                expect(locator).toContainText('Menu')
                await locator.click()
        }

        //Fonts Header Text Elemant
        async checkFontsText() {
                const ele = this.page.locator("(//h4[text()='Fonts'])[1]")
                expect(ele).toContainText('Fonts')
        }

        //Upload Fonts Header Text Elemant
        async checkUploadFontText() {
                const ele = this.page.locator("(//p[text()='Upload Font'])[1]")
                expect(ele).toContainText('Upload Font')
        }



        //Upload Fonts
        async uploadFont() {

                const buffer = readFileSync('testData/fonts/Midnight.ttf');
                // Create the DataTransfer and File
                const dataTransfer = await this.page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'Midnight.ttf', { type: 'application/ttf' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
                await this.page.dispatchEvent("//div[@class='MuiBox-root css-1bfcot9']//div[1]", 'drop', { dataTransfer });
        }

        //Fonts Header Text Elemant
        async checkMenuBarTitleText() {
                const ele = this.page.locator("//h4[text()='Menu Bar']")
                expect(ele).toContainText('Menu Bar')
        }

        //Language Controls Text Element
        async clickFirstMenuBarColorInputField() {
                const ele = this.page.locator("(//div[@class='MuiBox-root css-njrrwe'])[1]")
                expect(ele).toBeVisible()
                await ele.click();
        }





}

