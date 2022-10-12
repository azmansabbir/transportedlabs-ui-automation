import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://qa-1.testingdxp.com//admin/#/home
  await page.goto('https://qa-1.testingdxp.com//admin/#/home');

  // Go to https://qa-1.testingdxp.com//admin/#/splash
  await page.goto('https://qa-1.testingdxp.com//admin/#/splash');

  // Go to https://qa-1.testingdxp.com//admin/#/sign-in
  await page.goto('https://qa-1.testingdxp.com//admin/#/sign-in');

  // Click input[type="text"]
  await page.locator('input[type="text"]').click();

  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('qa-1');

  // Click input[type="password"]
  await page.locator('input[type="password"]').click();

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('mFkTylCDNC');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://qa-1.testingdxp.com//admin/#/home/air-drop');

  // Click button >> nth=1
  await page.locator('button').nth(1).click();

  // Click text=Live Wall
  await page.locator('text=Live Wall').click();
  await expect(page).toHaveURL('https://qa-1.testingdxp.com//admin/#/home/live-wall');

  // Click text=CueLiveDelete >> button >> nth=0
  await page.frameLocator('iframe').locator('text=CueLiveDelete >> button').first().click();

  // Click text=CueLiveDelete >> button >> nth=1
  await page.frameLocator('iframe').locator('text=CueLiveDelete >> button').nth(1).click();

  // Click button:has-text("Cue")
  await page.frameLocator('iframe').locator('button:has-text("Cue")').click();

  // Click text=Open Link
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('text=Open Link').click()
  ]);

  // Click text=Next
  await page1.locator('text=Next').click();

  // Click text=Enable Auto Rotation
  await page1.locator('text=Enable Auto Rotation').click();

  // Click text=Fancue
  await page1.locator('text=Fancue').click();

  // Click text=→
  await page1.locator('text=→').click();

  // Click text=Next
  await page1.locator('text=Next').click();

  // Click [aria-label="Close"]
  await page.frameLocator('iframe').locator('[aria-label="Close"]').click();

  // Click text=Output
  await page.frameLocator('iframe').locator('text=Output').click();

  // Click text=Open Link
  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('text=Open Link').click()
  ]);

  // Click img
  await page2.locator('img').click();

  // Click [aria-label="Close"]
  await page.frameLocator('iframe').locator('[aria-label="Close"]').click();

  // Click text=CueLiveDelete >> button >> nth=0
  await page.frameLocator('iframe').locator('text=CueLiveDelete >> button').first().click();

  // Click button:has-text("Cue")
  await page.frameLocator('iframe').locator('button:has-text("Cue")').click();

  // Click text=Open Link
  const [page3] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('text=Open Link').click()
  ]);

  // Go to https://qa-1.testingdxp.com/games/live-wall/cue/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzQwNDBlNTUyM2NmMWNlZDE3MzcyZjciLCJyb2xlIjoyLCJjbGllbnRJZCI6InFhLTEiLCJpYXQiOjE2NjU0Mjk4MDIsImV4cCI6MTY2ODAyMTgwMn0.L4bdnD9EFgndOpmjJul63aas_GwmY-1bgbEqmaMpPp4#/main
  await page3.goto('https://qa-1.testingdxp.com/games/live-wall/cue/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzQwNDBlNTUyM2NmMWNlZDE3MzcyZjciLCJyb2xlIjoyLCJjbGllbnRJZCI6InFhLTEiLCJpYXQiOjE2NjU0Mjk4MDIsImV4cCI6MTY2ODAyMTgwMn0.L4bdnD9EFgndOpmjJul63aas_GwmY-1bgbEqmaMpPp4#/main');

  // Click text=LiveAlertUncue >> button >> nth=0
  await page3.locator('text=LiveAlertUncue >> button').first().click();

  // Click text=Next
  await page3.locator('text=Next').click();

  // Click text=No streamsNext >> div
  await page3.locator('text=No streamsNext >> div').click();

  // Click [aria-label="Close"]
  await page.frameLocator('iframe').locator('[aria-label="Close"]').click();

  // Click text=Output
  await page.frameLocator('iframe').locator('text=Output').click();

  // Click text=Open Link
  const [page4] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('text=Open Link').click()
  ]);

  // Click [aria-label="Close"]
  await page.frameLocator('iframe').locator('[aria-label="Close"]').click();

  // Click text=CueLiveDelete >> button >> nth=1
  await page.frameLocator('iframe').locator('text=CueLiveDelete >> button').nth(1).click();

});