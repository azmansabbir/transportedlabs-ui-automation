import { Page } from "@playwright/test";
export default class languagePage {        

    private page: Page;
        static login: any;        
    constructor(page: Page) {
        this.page = page;
    }


    async enterEmail(emailaddress: string) {
        await this.page.locator("input[type='text']")
            .type(emailaddress);
    }

   
}