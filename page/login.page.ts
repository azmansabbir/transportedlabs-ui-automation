import { Page } from "playwright";

export default class LoginPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    eleEmailTextField = async () => await this.page.$('input[type="text"]');
    

    // public get eleEmailTextField() {
    //     return this.page.$("input[name='email']")
    //     // return elename;
    // }

    elePassTextField = async () => await this.page.$('input[type="password"]');

    public get eleLoginBtn() {
        return this.page.$('button:has-text("Login")')
        // return elename;
    }

    public async enterUserName(name: string) {
        // await page.click(this.eleEmailTextField)
        const ele = await this.eleEmailTextField();
        if (ele != null)
            await ele.click();
        // else throw new Error("No element, hence failed")

        if (ele != null)
            await ele.fill(name);
        // else throw new Error("No element, hence failed")
    }
    public async enterUserPassword(pass: string) {
        const ele = await this.elePassTextField();
        await ele?.click()
        await ele?.fill(pass);
    }
    public async clickLoginBtn() {
        const ele = await this.eleLoginBtn;
        await ele?.click();
    }

    public async login(username: string, pass: string) {
        await this.enterUserName(username);
        await this.enterUserPassword(pass);
        await this.clickLoginBtn();
    }
}