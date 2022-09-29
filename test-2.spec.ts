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

  // Click .MuiButtonBase-root >> nth=0
  await page.frameLocator('iframe').locator('.MuiButtonBase-root').first().click();

  // Click input[type="text"]
  await page.frameLocator('iframe').locator('input[type="text"]').click();

  // Fill input[type="text"]
  await page.frameLocator('iframe').locator('input[type="text"]').fill('Auto');

  // Click button:has-text("ADD")
  await page.frameLocator('iframe').locator('button:has-text("ADD")').click();

  // Click text=Auto
  await page.frameLocator('iframe').locator('text=Auto').click();

  // Click text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsDelete >> ul
  await page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsDelete >> ul').click();

  // Click text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsDelete >> ul
  await page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsDelete >> ul').click();

  // Click text=Game Design >> nth=2
  await page.frameLocator('iframe').locator('text=Game Design').nth(2).click();

  // Click text=Game Settings >> nth=2
  await page.frameLocator('iframe').locator('text=Game Settings').nth(2).click();

  // Click text=Add Banner >> nth=2
  await page.frameLocator('iframe').locator('text=Add Banner').nth(2).click();

  // Click text=Prizing >> nth=2
  await page.frameLocator('iframe').locator('text=Prizing').nth(2).click();

  // Click text=Analytics >> nth=2
  await page.frameLocator('iframe').locator('text=Analytics').nth(2).click();

  // Click text=Delete >> nth=1
  await page.frameLocator('iframe').locator('text=Delete').nth(1).click();

  // Click button:has-text("Delete")
  await page.frameLocator('iframe').locator('button:has-text("Delete")').click();

});