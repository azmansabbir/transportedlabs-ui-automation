import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://qa-1.testingdxp.com//admin/#/home/live-wall
  await page.goto('https://qa-1.testingdxp.com//admin/#/home/live-wall');

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
  await expect(page).toHaveURL('https://qa-1.testingdxp.com//admin/#/home/live-wall');

  // Click button >> nth=1
  await page.locator('button').nth(1).click();

  // Click text=Live Wall
  await page.locator('text=Live Wall').click();
  await expect(page).toHaveURL('https://qa-1.testingdxp.com//admin/#/home/live-wall');

  // Click text=STOP
  await page.frameLocator('iframe').locator('text=STOP').click();

  // Click text=START
  await page.frameLocator('iframe').locator('text=START').click();

  // Click .MuiButtonBase-root >> nth=0
  await page.frameLocator('iframe').locator('.MuiButtonBase-root').first().click();

  // Click text=Open Link
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('text=Open Link').click()
  ]);

  // Click #app
  await page1.locator('#app').click({
    button: 'right'
  });
  await expect(page1).toHaveURL('https://qa-1.testingdxp.com/?gameId=live-wall#/username');

  // Fill input[type="text"]
  await page1.locator('input[type="text"]').fill('jon doe');
  await expect(page1).toHaveURL('https://qa-1.testingdxp.com/?gameId=live-wall#/game');

  // Click [aria-label="Close"]
  await page.frameLocator('iframe').locator('[aria-label="Close"]').click();

  // Click text=Refresh
  await page.frameLocator('iframe').locator('text=Refresh').click();

  // Click text=Refresh
  await page.frameLocator('iframe').locator('text=Refresh').click();

  // Click text=Noise Meter
  await page.locator('text=Noise Meter').click();
  await expect(page).toHaveURL('https://qa-1.testingdxp.com//admin/#/home/noise-meter');

  // Click text=Live Wall
  await page.locator('text=Live Wall').click();
  await expect(page).toHaveURL('https://qa-1.testingdxp.com//admin/#/home/live-wall');

  // Click text=Refresh
  await page.frameLocator('iframe').locator('text=Refresh').click();

  // Click text=CueLiveDelete >> button >> nth=0
  await page.frameLocator('iframe').locator('text=CueLiveDelete >> button').first().click();

  // Click button:has-text("Cue")
  await page.frameLocator('iframe').locator('button:has-text("Cue")').click();

  // Click text=Open Link
  const [page2] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('text=Open Link').click()
  ]);

  // Go to https://qa-1.testingdxp.com/games/live-wall/cue/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzQwNDBlNTUyM2NmMWNlZDE3MzcyZjciLCJyb2xlIjoyLCJjbGllbnRJZCI6InFhLTEiLCJpYXQiOjE2NjU0ODc3MzcsImV4cCI6MTY2ODA3OTczN30.t_Q9fz-ibxDCa25xXNykyQNxtPe3mkvHh6fuYdizkGY#/main
  await page2.goto('https://qa-1.testingdxp.com/games/live-wall/cue/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzQwNDBlNTUyM2NmMWNlZDE3MzcyZjciLCJyb2xlIjoyLCJjbGllbnRJZCI6InFhLTEiLCJpYXQiOjE2NjU0ODc3MzcsImV4cCI6MTY2ODA3OTczN30.t_Q9fz-ibxDCa25xXNykyQNxtPe3mkvHh6fuYdizkGY#/main');

  // Click text=LiveAlertUncue >> button >> nth=0
  await page2.locator('text=LiveAlertUncue >> button').first().click();

  // Click text=Next
  await page2.locator('text=Next').click();

  // Click [aria-label="Close"]
  await page.frameLocator('iframe').locator('[aria-label="Close"]').click();

  // Click text=Output
  await page.frameLocator('iframe').locator('text=Output').click();

  // Click text=Open Link
  const [page3] = await Promise.all([
    page.waitForEvent('popup'),
    page.frameLocator('iframe').locator('text=Open Link').click()
  ]);

  // Go to https://qa-1.testingdxp.com/games/live-wall/mainboard/#/home
  await page3.goto('https://qa-1.testingdxp.com/games/live-wall/mainboard/#/home');

  // Click [aria-label="Close"]
  await page.frameLocator('iframe').locator('[aria-label="Close"]').click();

  // Click text=CueLiveDelete >> button >> nth=1
  await page.frameLocator('iframe').locator('text=CueLiveDelete >> button').nth(1).click();

});