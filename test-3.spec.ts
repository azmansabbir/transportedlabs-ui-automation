import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://garrett.testingdxp.com//admin/#/home
  await page.goto('https://garrett.testingdxp.com//admin/#/home');

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

  // Click text=Prizing >> nth=2
  await page.frameLocator('iframe').locator('text=Prizing').nth(2).click();

  // Click text=Add New Prize
  await page.frameLocator('iframe').locator('text=Add New Prize').click();

  // Click text=Coupon Prize Select *Select a coupon >> div >> nth=2
  await page.frameLocator('iframe').locator('text=Coupon Prize Select *Select a coupon >> div').nth(2).click();

  // Click text=Coca ColaNoneNoneair-dropSelect >> button
  await page.frameLocator('iframe').locator('text=Coca ColaNoneNoneair-dropSelect >> button').click();

  // Click text=Clear
  await page.frameLocator('iframe').locator('text=Clear').click();

  // Click text=Coupon Prize Select *Select a coupon >> div >> nth=2
  await page.frameLocator('iframe').locator('text=Coupon Prize Select *Select a coupon >> div').nth(2).click();

  // Click text=Burgur NoneNoneair-dropSelect >> button
  await page.frameLocator('iframe').locator('text=Burgur NoneNoneair-dropSelect >> button').click();

  // Click text=Analytics >> nth=2
  await page.frameLocator('iframe').locator('text=Analytics').nth(2).click();

  // Click text=Analytics >> nth=1
  await page.frameLocator('iframe').locator('text=Analytics').nth(1).click();

  // Click text=Export
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.frameLocator('iframe').locator('text=Export').click()
  ]);

  // Click text=Export
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.frameLocator('iframe').locator('text=Export').click()
  ]);

});