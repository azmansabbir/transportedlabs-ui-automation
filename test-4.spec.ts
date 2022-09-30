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

  // Click text=AutoStart
  await page.frameLocator('iframe').locator('text=AutoStart').click();

  // Click text=Cancel
  await page.frameLocator('iframe').locator('text=Cancel').click();

  // Click text=AutoStart
  await page.frameLocator('iframe').locator('text=AutoStart').click();

  // Click text=Ok
  await page.frameLocator('iframe').locator('text=Ok').click();

  // Click text=Ok
  await page.frameLocator('iframe').locator('text=Ok').click();

  // Click text=Prizing >> nth=2
  await page.frameLocator('iframe').locator('text=Prizing').nth(2).click();

  // Click text=AutoStart >> button >> nth=1
  await page.frameLocator('iframe').locator('text=AutoStart >> button').nth(1).click();

  // Click text=Open Link
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('text=Open Link').click()
  ]);

  // Go to https://garrett.testingdxp.com/?gameId=air-drop&configurationId=6336bc6b07a91bfbcbecf518#/loading
  await page1.goto('https://garrett.testingdxp.com/?gameId=air-drop&configurationId=6336bc6b07a91bfbcbecf518#/loading');

  // Click div:nth-child(2) >> nth=0
  await page1.locator('div:nth-child(2)').first().click({
    button: 'right'
  });
  await expect(page1).toHaveURL('https://garrett.testingdxp.com/?gameId=air-drop&configurationId=6336bc6b07a91bfbcbecf518#/game');

  // Click text=Mobile Link​Open LinkCopy Link >> button >> nth=0
  await page.frameLocator('iframe').locator('text=Mobile Link​Open LinkCopy Link >> button').first().click();

  // Click text=AutoStart >> button >> nth=2
  await page.frameLocator('iframe').locator('text=AutoStart >> button').nth(2).click();

  // Click text=Save QR Code
  await page.frameLocator('iframe').locator('text=Save QR Code').click();

  // 0× click
  await page.frameLocator('iframe').locator('text=Save QR Code').click();

  // 0× click
  await page.frameLocator('iframe').locator('text=Save QR Code').click();

  // 0× click
  await page.frameLocator('iframe').locator('text=Save QR Code').click();

  // 0× click
  await page.frameLocator('iframe').locator('text=Save QR Code').click();

  // 0× click
  await page.frameLocator('iframe').locator('text=Save QR Code').click();

  // 0× click
  await page.frameLocator('iframe').locator('text=Save QR Code').click();

  // 0× click
  await page.frameLocator('iframe').locator('text=Save QR Code').click();

  // 0× click
  await page.frameLocator('iframe').locator('text=Copy QR Code').click();

  // Click [aria-label="Close"]
  await page.frameLocator('iframe').locator('[aria-label="Close"]').click();

});