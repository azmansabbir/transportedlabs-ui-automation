import test, { expect } from "@fixtures/basePages";
import { BrowserContext, webkit, devices, Page, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// const clipboard = require("clipboardy");


let url: any;

let page: Page;

// test.describe("Suite demo", () => {
//         let page: Page;
//         let context: BrowserContext;
//         test.beforeAll(async ({ browser }) => {
//             context = await browser.newContext();            
//             await page.goto("/admin/#/sign-in");
//         })



test("009LW-001 | Validate Font Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)

        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {


        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()

        //click Game Stop Btn
        await liveWallPage.clickGameStopBtn()


        //click Design Page
        await liveWallPage.clickDesignPage()

        //verify Fonts Title Text
        await liveWallPage.verifyFontsTitleText()

        //delete Uploaded Feed Right Image
        await liveWallPage.deleteUploadedFeedRightImage()

        //delete Uploaded Font
        await liveWallPage.deleteUploadedFont()


        //verify Upload Font Text
        await liveWallPage.verifyUploadFontText()

        await functions.fontUploadFunction()

        //verify Upload Font Text
        await liveWallPage.clickToUploadFont()

        await page.waitForTimeout(6000)


        // })

})
test("009LW-002 | Validate Color Input Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()


        //click Design Page
        await liveWallPage.clickDesignPage()        

        //click Clear Btn
        await liveWallPage.clickClearBtn()

        await page.waitForTimeout(2000)

        //verify Fonts Title Text
        await liveWallPage.verifyFontsTitleText()


        //click Background Color Picker Input Field
        await liveWallPage.clickBackgroundColorPickerInputField()


        //input Background First RGB Color
        await liveWallPage.inputBackgroundFirstRGBColor()


        //input Background Box Color RGB Second
        await liveWallPage.inputBackgroundBoxColorRGBSecond()



        //input Background Box Color RGB Third
        await liveWallPage.inputBackgroundBoxColorRGBThird()



        //input Background Box Color Opacity
        await liveWallPage.inputBackgroundBoxColorOpacity()



        //input Background Box Color HEX Color
        await liveWallPage.inputBackgroundBoxColorHEXColor()



        //click Save Btn
        await liveWallPage.clickSaveBtn()

        await page.waitForTimeout(2000)



        //click Font Color Picker Input Field
        await liveWallPage.clickFontColorPickerInputField()



        //input Font First RGB Color
        await liveWallPage.inputFontFirstRGBColor()



        //input Font Box Color RGB Second
        await liveWallPage.inputFontBoxColorRGBSecond()

        //input Font Box Color RGB Third
        await liveWallPage.inputFontBoxColorRGBThird()

        //input Font Box Color Opacity
        await liveWallPage.inputFontBoxColorOpacity()

        //input Font Box Color HEX Color
        await liveWallPage.inputFontBoxColorHEXColor()

        //click Save Btn
        await liveWallPage.clickSaveBtn()


        await page.waitForTimeout(6000)


        // })

})

test("009LW-003 | Validate Upload Image Delete Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()


        //click Design Page
        await liveWallPage.clickDesignPage()



        //delete Uploaded Feed Left Image
        await liveWallPage.deleteUploadedFeedLeftImage()

        //delete Uploaded Feed Image
        await liveWallPage.deleteUploadedFeedImage()
        //delete Uploaded Output Background
        await liveWallPage.deleteUploadedOutputBackground()
        //delete Uploaded Output Frame
        await liveWallPage.deleteUploadedOutputFrame()
        //delete Uploaded FullScreen Logo
        await liveWallPage.deleteUploadedFullScreenLogo()
        //delete Uploaded Mobile Frame
        await liveWallPage.deleteUploadedMobileFrame()
        //delete Uploaded Background
        await liveWallPage.deleteUploadedBackground()

        await page.waitForTimeout(2000)

        await functions.frameUploadFunction()
        //click To Upload Mobile Frame
        await liveWallPage.clickToUploadMobileFrame()

        await page.waitForTimeout(8000)

        // })

})

test("009LW-004 | Validate Image Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()


        //click Design Page
        await liveWallPage.clickDesignPage()

        //click ToUpload Feed Right Image
        await functions.logoImageUploadFunction()
        await liveWallPage.clickToUploadFeedRightImage()
        //click ToUpload FeedImage
        await liveWallPage.clickToUploadFeedLeftImage()

        //click To Upload Feed Image
        await liveWallPage.clickToUploadFeedImage()
        //click ToUpload Output Background
        await liveWallPage.clickToUploadOutputBackground()

        //click To Upload Output Frame
        await liveWallPage.clickToUploadOutputFrame()

        //click To Upload FullScreen Logo
        await liveWallPage.clickToUploadFullScreenLogo()


        //click To Upload Background
        await liveWallPage.clickToUploadBackground()

        await page.waitForTimeout(8000)

        // })

})


test("009LW-005 | Validate Display Messages Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()


        //click Design Page
        await liveWallPage.clickDesignPage()

        //input Pre Live Text
        await liveWallPage.inputPreLiveText()


        //input Post Live Text
        await liveWallPage.inputPostLiveText()

        //click Stand By Massage Type
        await liveWallPage.clickStandByMassageType()

        //select H1 Text
        await liveWallPage.selectNormalText()

        //input StandBy Message
        await liveWallPage.inputStandByMessage()


        //click Bold Option For PreLive Text
        await liveWallPage.clickBoldOptionForPreLiveText()

        await page.waitForTimeout(8000)

        // })



})

test("009LW-006 | Validate Live Selfie Cam Link Open Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()

        await page.waitForTimeout(2000)


        //click Game Start Btn
        await liveWallPage.clickGameStartBtn()

        await page.waitForTimeout(2000)


        //click Live Selfie Cam Out Put Link
        await liveWallPage.clickLiveSelfieCamOutPutLink()

        //click Live Selfie Cam Out Put Link Copy Btn
        await liveWallPage.clickLiveSelfieCamOutPutLinkCopyBtn()


        await page.waitForTimeout(2000)




})

test("009LW-007 | Validate Live Selfie Cam OutPut Link open in Mobile", async ({ loginPage, liveWallPage, functions }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {


        // const browser = await webkit.launch({ headless: false });
        // const context = await browser.newContext({ ...devices['iPhone 12 Pro'] });
        // const page = await context.newPage();

        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext({ ...devices["Pixel 5"], permissions: ["camera"] });
        const page = await context.newPage();


        await page.goto('https://qa-1.testingdxp.com/?gameId=live-wall')
        const title = await page.title();
        expect(title).toBe('DXP Mobile')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })


        let ele = await page.locator('input[type="text"]').isVisible()
        if ((ele == true)) {
                // console.log("Enable Stage to be skip and jump to next one")
                await page
                        .locator('input[type="text"]')
                        .fill('Jon Doe');
        }


        // await page.locator('input[type="text"]').fill('Jon Doe');

        // await page.click("//button[text()='Enter']");

        // await page.waitForTimeout(6000)


        // await page.locator("//button[contains(@class,'MuiButtonBase-root MuiButton-root')]").click()

        // // const ele = await page.locator("//button[text()='Join for a chance to go Live!']").isVisible()
        // if (await page.locator("text=Join for a chance to go Live!")) {
        //         // console.log("Enable Stage to be skip and jump to next one")
        //         await page.click("text=Join for a chance to go Live!")
                        
        // }
        // await page.locator("//button[text()='Join for a chance to go Live!']").click()


        await page.click("//p[text()='USER PROFILE']");

        await page.waitForTimeout(5000)

        
        await page.click("//p[text()='RULES']");
        await page.waitForTimeout(6000)

        
        await page.click("//p[text()='HOW TO PLAY']");
        await page.waitForTimeout(6000)


        
        await page.click("//button[@value='prize']");

        await page.waitForTimeout(5000)

        await page.click("//p[text()='HOME']");
        await page.waitForTimeout(20000)


        // await context.close()

        // })



})


test("009LW-008 | Validate Cue Section", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {
                // const browser = await chromium.launch({ headless: false });
                // const context = await browser.newContext({permissions: ["camera"] });
                // const page = await context.newPage();

        

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()



        //click Refresh Btn
        await liveWallPage.clickRefreshBtn()

        //click To Add Live Selfie Cam In Cue
        await liveWallPage.clickToAddLiveSelfieCamInCue()

        //click Cue Btn
        await liveWallPage.clickCueBtn()

        const [page1] = await Promise.all([
                page.waitForEvent('popup'),
                page.frameLocator('iframe').locator('text=Open Link').click()
              ]);


                // Click text=LiveAlertUncue >> button >> nth=0
  await page1.locator('text=LiveAlertUncue >> button').first().click();

  // Click text=Next
  await page1.locator('text=Next').click();

  // Click text=No streamsNext >> div
  await page1.locator('text=No streamsNext >> div').click();

        // //click Cue Open New Tab Btn
        // await liveWallPage.clickCueOpenNewTabBtn()

        // //click To Add Live Selfie Cam In Cue
        // await liveWallPage.clickToAddCueToLiveSection()

        await page.waitForTimeout(2000)




})

test("009LW-009 | Validate OutPut Section", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {
                // const browser = await chromium.launch({ headless: false });
                // const context = await browser.newContext({permissions: ["camera"] });
                // const page = await context.newPage();

        

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()



        //click Refresh Btn
        await liveWallPage.clickRefreshBtn()

        //   // Click text=LiveAlertUncue >> button >> nth=0
        // await page.locator('text=LiveAlertUncue >> button').first().click();

          // Click text=CueLiveDelete >> button >> nth=1
  await page.frameLocator('iframe').locator('text=CueLiveDelete >> button').nth(1).click();



        //click Cue Btn
        await liveWallPage.clickOutPutBtn()

        const [page1] = await Promise.all([
                page.waitForEvent('popup'),
                page.frameLocator('iframe').locator('text=Open Link').click()
              ]);


//                 // Click text=LiveAlertUncue >> button >> nth=0
//   await page1.locator('text=LiveAlertUncue >> button').first().click();

//   // Click text=Next
//   await page1.locator('text=Next').click();

//   // Click text=No streamsNext >> div
//   await page1.locator('text=No streamsNext >> div').click();

        // //click Cue Open New Tab Btn
        // await liveWallPage.clickCueOpenNewTabBtn()

        // //click To Add Live Selfie Cam In Cue
        // await liveWallPage.clickToAddCueToLiveSection()

        await page.waitForTimeout(6000)




})

test("009LW-0010 | Validate QR Code Section", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()

        //click Mobile QR Code
        await liveWallPage.clickMobileQRCode()


        //click Copy QR Code Btn
        await liveWallPage.clickCopyQRCodeBtn()


        //click Save QR Code Btn
        await liveWallPage.clickSaveQRCodeBtn()



        //click QR Code Window Close Btn
        await liveWallPage.clickQRCodeWindowCloseBtn()



        //click Refresh Btn
        // await liveWallPage.clickRefreshBtn()



        // //click Cue Btn
        // await liveWallPage.clickCueBtn()



        //click Cue OpenNew Tab Btn
        // await liveWallPage.clickCueOpenNewTabBtn()



        //  //click Auto Rotation Check Box
        //  await liveWallPage.clickAutoRotationCheckBox()

        await page.waitForTimeout(2000)




})

test("009LW-0010 | Validate Live Selfie Cam", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()

        //click VIP Live Selfie Cam Btn
        await liveWallPage.clickVIPLiveSelfieCamBtn()

        
        // //click Mobile QR Code
        // await liveWallPage.()

 
        // //click Mobile QR Code
        // await liveWallPage.()

 
        // //click Mobile QR Code
        // await liveWallPage.()

 
        // //click Mobile QR Code
        // await liveWallPage.()

 
        await page.waitForTimeout(3000)




})

test("009LW-0011 | Validate Analytics Section", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()

        //click Analytics Btn
        await liveWallPage.clickAnalyticsBtn()

        await page.waitForTimeout(3000)
        // //download Anlytics
        // await liveWallPage.downloadAnlytics()
        //click Analytics Page Back Btn
        await liveWallPage.clickAnalyticsPageBackBtn()
        //click Game Stop Btn
        await liveWallPage.clickGameStopBtn()

        await page.waitForTimeout(2000)




})



// })