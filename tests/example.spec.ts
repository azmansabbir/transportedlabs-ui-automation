// import { test, expect } from '@playwright/test';

// test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.locator('text=Get Started');

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://garrett.testingdxp.com//admin/#/sign-in
  await page.goto('https://garrett.testingdxp.com//admin/#/sign-in');

  // Go to https://garrett.testingdxp.com//admin/#/splash
  await page.goto('https://garrett.testingdxp.com//admin/#/splash');

  // Go to https://garrett.testingdxp.com//admin/#/sign-in
  await page.goto('https://garrett.testingdxp.com//admin/#/sign-in');

  // Click input[type="text"]
  await page.locator('input[type="text"]').click();

  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('garrett');

  // Press Tab
  await page.locator('input[type="text"]').press('Tab');

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('LFQIISIc');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://garrett.testingdxp.com//admin/#/home/air-drop');

  // Click button >> nth=2
  await page.locator('button').nth(2).click();

  // Click text=Main Menu
  await page.locator('text=Main Menu').click();
  await expect(page).toHaveURL('https://garrett.testingdxp.com//admin/#/home/settings/mobile-design');

  // Click text=Upload Font
  await page.locator('text=Upload Font').click();

  // Click text=Fonts
  await page.locator('text=Fonts').click();

  // Click div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > .MuiBox-root >> nth=0
  await page.locator('div:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > .MuiBox-root').first().click();

  // Click text=Colors
  await page.locator('text=Colors').click();

  // Click text=Clear All
  await page.locator('text=Clear All').click();

  // Click .MuiBox-root > div:nth-child(3) > div >> nth=0
  await page.locator('.MuiBox-root > div:nth-child(3) > div').first().click();

  // Click div:nth-child(3) > div > .MuiButton-root >> nth=0
  await page.locator('div:nth-child(3) > div > .MuiButton-root').first().click();

  // Click #mui-20
  await page.locator('#mui-20').click();

  // Fill #mui-20
  await page.locator('#mui-20').fill('146');

  // Press Tab
  await page.locator('#mui-20').press('Tab');

  // Fill #mui-21
  await page.locator('#mui-21').fill('123');

  // Press Tab
  await page.locator('#mui-21').press('Tab');

  // Fill #mui-22
  await page.locator('#mui-22').fill('43');

  // Press Tab
  await page.locator('#mui-22').press('Tab');

  // Fill text=%​ >> input[type="text"]
  await page.locator('text=%​ >> input[type="text"]').fill('70');

  // Click text=Save
  await page.locator('text=Save').click();

});
// test.describe('MainMenu functionality validation', () =>{ 
   
//         test("E2E test", async ({ LoginPage, MainMenu, page }) => {

//                 await LoginPage.login(data.username, data.password)

//                 await MainMenu.clickHomeAvater();

//                 await page.waitForTimeout(5000);

//                 await MainMenu.mainMenuBtn();

//                 await page.waitForTimeout(5000);

//                 await MainMenu.clickMobileDesign();

       

        


//         })


// })\\

 // await loginPage.login(data.username, data.password)

                        
                        // const title = await page.title();
                        // expect(title).toBe('DXP Admin')                        
                  
                        await MainMenu.clickHomeAvater();

                        await page.waitForTimeout(5000);
        
                        await MainMenu.mainMenuBtn();
        
                        await page.waitForTimeout(5000);
        
                        await MainMenu.clickMobileDesign();

                        // const locator = page.locator('.title');
                        // await expect(locator).toContainText('substring');



                        // let ele = MainMenu.clickMobileDesign()
                        // expect(await ele.getAtribute("placeholder")).toBe("Mobile Deseign")
                        // console.log(await MainMenu.mobileDesign())

                        // await MainMenu.clickUploadFontAndUploadFiles();

                        
                        // page.on("filechooser", async (filechooser) => {
                        //  await filechooser.setFiles([filePath0])
                        // })
                        // await MainMenu.clickUploadFontInputFiled()

                        // await page.waitForTimeout(5000);

                        // await MainMenu.clickClearAllBtn();
                        // await page.waitForTimeout(5000);

                        // await MainMenu.checkPrimaryColortxt()

                        // await MainMenu.clickPrimaryColorField()
                        // await page.waitForTimeout(5000);

                        // // await MainMenu.primaryColorPickerWindowClose()

                        // // await MainMenu.clickPrimaryColorField()
                        // // await page.waitForTimeout(5000);

                        // await MainMenu.primaryColorFirstInputField()
                        
                        // await MainMenu.primaryColorSecondInputField()

                        // await MainMenu.primaryColorThirdInputField()

                        // await MainMenu.primaryColorOpacityInputField()
                      
                        // await MainMenu.primaryColorHexInputField()

                        // await MainMenu.clickSaveBtn()
                        // await page.waitForTimeout(5000);

                        // await MainMenu.checkSecondaryText();
                                       
                        // await MainMenu.clickSecondaryColorBtn();
                        // await page.waitForTimeout(5000);

                        // await MainMenu.SecondaryColorFirstInputField()
                        
                        // await MainMenu.SecondaryColorSecondInputField()

                        // await MainMenu.SecondaryColorThirdInputField()

                        // await MainMenu.SecondaryColorOpacityInputField()
                      
                        // await MainMenu.SecondaryColorHexInputField()

                        // await MainMenu.clickSaveBtn()
                        // await page.waitForTimeout(5000);