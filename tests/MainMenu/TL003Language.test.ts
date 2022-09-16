import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'



test.describe('Mobile Design Functionality', async () =>{   
        
        const filePath0 = './videos/a.png';
        
           
        test("E2E test", async ({  loginPage, MainMenu, page }) => {
        
await test.step("Verify that admin saccessfully go to the mobiledesign page", async () => {
        
                        
                
                                
         await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
                
        await MainMenu.clickHomeAvater();
                
        await page.waitForTimeout(3000);
                
        await MainMenu.mainMenuBtn();
                
        await page.waitForTimeout(3000);
        
        await MainMenu.clickMobileDesign();
        
        await page.waitForTimeout(3000)
                
                                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
                

        })  
await test.step("Verify that admin saccessfully go to the mobiledesign page", async () => {
 
                
             


})     

})




})