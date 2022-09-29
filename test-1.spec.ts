import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://garrett.testingdxp.com//admin/#/home/air-drop
  await page.goto('https://garrett.testingdxp.com//admin/#/home/air-drop');

  // Go to https://garrett.testingdxp.com//admin/#/splash
  await page.goto('https://garrett.testingdxp.com//admin/#/splash');

  // Go to https://garrett.testingdxp.com//admin/#/sign-in
  await page.goto('https://garrett.testingdxp.com//admin/#/sign-in');

  // Click input[type="text"]
  await page.locator('input[type="text"]').click();

  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('garrett');

  // Click input[type="password"]
  await page.locator('input[type="password"]').click();

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('LFQIISIc');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://garrett.testingdxp.com//admin/#/home/air-drop');

  // Click text=Prize Drop
  await page.locator('text=Prize Drop').click();
  await expect(page).toHaveURL('https://garrett.testingdxp.com//admin/#/home/air-drop');

  // Click text=Configurations
  await page.frameLocator('iframe').locator('text=Configurations').click();

  // Click button >> nth=0
  await page.frameLocator('iframe').locator('button').first().click();

  // Click input[type="text"]
  await page.frameLocator('iframe').locator('input[type="text"]').click();

  // Fill input[type="text"]
  await page.frameLocator('iframe').locator('input[type="text"]').fill('Auto');

  // Click button:has-text("ADD")
  await page.frameLocator('iframe').locator('button:has-text("ADD")').click();

  // Click text=Auto
  await page.frameLocator('iframe').locator('text=Auto').click();

  // Click text=Game Design >> nth=1
  await page.frameLocator('iframe').locator('text=Game Design').nth(1).click();

  // Click text=Upload Font
  await page.frameLocator('iframe').locator('text=Upload Font').click();

  // Click text=Colors
  await page.frameLocator('iframe').locator('text=Colors').click();

  // Click text=Clear All
  await page.frameLocator('iframe').locator('text=Clear All').click();

  // Click text=Main Color
  await page.frameLocator('iframe').locator('text=Main Color').click();

  // Click text=Main ColorAccent ColorText ColorButton Color >> button >> nth=0
  await page.frameLocator('iframe').locator('text=Main ColorAccent ColorText ColorButton Color >> button').first().click();

  // Click #mui-39
  await page.frameLocator('iframe').locator('#mui-39').click();

  // Click #mui-40
  await page.frameLocator('iframe').locator('#mui-40').click();

  // Click #mui-41
  await page.frameLocator('iframe').locator('#mui-41').click();

  // Click text=%​ >> input[type="text"]
  await page.frameLocator('iframe').locator('text=%​ >> input[type="text"]').click();

  // Click text=#​ >> input[type="text"]
  await page.frameLocator('iframe').locator('text=#​ >> input[type="text"]').click();

  // Click text=Save
  await page.frameLocator('iframe').locator('text=Save').click();

  // Click h4:has-text("Game Design")
  await page.frameLocator('iframe').locator('h4:has-text("Game Design")').click();

  // Click text=Full Screen Logo
  await page.frameLocator('iframe').locator('text=Full Screen Logo').click();

  // Click text=Ratio: 9:16 Resolution: 1080:1920 type: PNG, SVG, JPEG, JPG
  await page.frameLocator('iframe').locator('text=Ratio: 9:16 Resolution: 1080:1920 type: PNG, SVG, JPEG, JPG').click();

  // Click div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > .MuiBox-root >> nth=0
  await page.frameLocator('iframe').locator('div:nth-child(3) > div > div > div > div:nth-child(2) > div > div > .MuiBox-root').first().click();

  // Click text=About Game
  await page.frameLocator('iframe').locator('text=About Game').click();

  // Check input[name="mui-32"] >> nth=1
  await page.frameLocator('iframe').locator('input[name="mui-32"]').nth(1).check();

  // Click text=Game Settings >> nth=1
  await page.frameLocator('iframe').locator('text=Game Settings').nth(1).click();

  // Click text=Total Rewards​ >> input[type="number"]
  await page.frameLocator('iframe').locator('text=Total Rewards​ >> input[type="number"]').click();

  // Fill text=Total Rewards​ >> input[type="number"]
  await page.frameLocator('iframe').locator('text=Total Rewards​ >> input[type="number"]').fill('11');

  // Click text=Total Rewards Per Day​ >> input[type="number"]
  await page.frameLocator('iframe').locator('text=Total Rewards Per Day​ >> input[type="number"]').click();

  // Click text=Total Rewards Per Day​ >> input[type="number"]
  await page.frameLocator('iframe').locator('text=Total Rewards Per Day​ >> input[type="number"]').click();

  // Fill text=Total Rewards Per Day​ >> input[type="number"]
  await page.frameLocator('iframe').locator('text=Total Rewards Per Day​ >> input[type="number"]').fill('1022');

  // Click text=Hours​ >> input[type="number"]
  await page.frameLocator('iframe').locator('text=Hours​ >> input[type="number"]').click();

  // Fill text=Hours​ >> input[type="number"]
  await page.frameLocator('iframe').locator('text=Hours​ >> input[type="number"]').fill('23');

  // Click text=Minutes​ >> input[type="number"]
  await page.frameLocator('iframe').locator('text=Minutes​ >> input[type="number"]').click();

  // Fill text=Minutes​ >> input[type="number"]
  await page.frameLocator('iframe').locator('text=Minutes​ >> input[type="number"]').fill('33');

  // Click text=Seconds​ >> input[type="number"]
  await page.frameLocator('iframe').locator('text=Seconds​ >> input[type="number"]').click();

  // Fill text=Seconds​ >> input[type="number"]
  await page.frameLocator('iframe').locator('text=Seconds​ >> input[type="number"]').fill('3');

  // Click .rdw-editor-main >> nth=0
  await page.frameLocator('iframe').locator('.rdw-editor-main').first().click();

  // Click text=Ending Game Message
  await page.frameLocator('iframe').locator('text=Ending Game Message').click();

  // Click text=Ending Game Message16FontNormal0/120 Characters >> [aria-label="rdw-editor"] div >> nth=2
  await page.frameLocator('iframe').locator('text=Ending Game Message16FontNormal0/120 Characters >> [aria-label="rdw-editor"] div').nth(2).click();

  // Click text=Selection Message
  await page.frameLocator('iframe').locator('text=Selection Message').click();

  // Click #rdw-wrapper-7838 > .rdw-editor-main
  await page.frameLocator('iframe').locator('#rdw-wrapper-7838 > .rdw-editor-main').click();

  // Click text=Entry Screen
  await page.frameLocator('iframe').locator('text=Entry Screen').click();

  // Click div[role="button"]:has-text("Choose the screen")
  await page.frameLocator('iframe').locator('div[role="button"]:has-text("Choose the screen")').click();

  // Click text=How to Screen
  await page.frameLocator('iframe').locator('text=How to Screen').click();

  // Click text=Add Banner >> nth=1
  await page.frameLocator('iframe').locator('text=Add Banner').nth(1).click();

  // Click text=Marketing Message
  await page.frameLocator('iframe').locator('text=Marketing Message').click();

  // Click text=Marketing MessageDrag your image here, or browse >> div >> nth=4
  await page.frameLocator('iframe').locator('text=Marketing MessageDrag your image here, or browse >> div').nth(4).click();

  // Click text=Prizing >> nth=1
  await page.frameLocator('iframe').locator('text=Prizing').nth(1).click();

  // Click text=Add New Prize
  await page.frameLocator('iframe').locator('text=Add New Prize').click();

  // Click [placeholder="Coupon name"]
  await page.frameLocator('iframe').locator('[placeholder="Coupon name"]').click();

  // Click [placeholder="Amount Of Awarding"]
  await page.frameLocator('iframe').locator('[placeholder="Amount Of Awarding"]').click();

  // Click [placeholder="Percentage Value"]
  await page.frameLocator('iframe').locator('[placeholder="Percentage Value"]').click();

  // Click text=Select a coupon
  await page.frameLocator('iframe').locator('text=Select a coupon').click();

  // Click text=Coca ColaNoneNoneair-dropSelect >> button
  await page.frameLocator('iframe').locator('text=Coca ColaNoneNoneair-dropSelect >> button').click();

  // Click text=Save
  await page.frameLocator('iframe').locator('text=Save').click();

  // Click text=Ok
  await page.frameLocator('iframe').locator('text=Ok').click();

  // Click text=Analytics >> nth=1
  await page.frameLocator('iframe').locator('text=Analytics').nth(1).click();

  // Click text=Date
  await page.frameLocator('iframe').locator('text=Date').click();

  // Click text=Time >> nth=0
  await page.frameLocator('iframe').locator('text=Time').first().click();

  // Click text=Total Players
  await page.frameLocator('iframe').locator('text=Total Players').click();

  // Click text=Total Time Played
  await page.frameLocator('iframe').locator('text=Total Time Played').click();

  // Click text=5
  await page.frameLocator('iframe').locator('text=5').click();

  // Click div[role="presentation"] div >> nth=0
  await page.frameLocator('iframe').locator('div[role="presentation"] div').first().click();

  // Click text=Delete
  await page.frameLocator('iframe').locator('text=Delete').click();

  // Click button:has-text("Delete")
  await page.frameLocator('iframe').locator('button:has-text("Delete")').click();

});