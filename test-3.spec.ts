import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://qa-1.testingdxp.com//admin/#/home/air-drop
  await page.goto('https://qa-1.testingdxp.com//admin/#/home/air-drop');

  // Go to https://qa-1.testingdxp.com//admin/#/splash
  await page.goto('https://qa-1.testingdxp.com//admin/#/splash');

  // Go to https://qa-1.testingdxp.com//admin/#/sign-in
  await page.goto('https://qa-1.testingdxp.com//admin/#/sign-in');

  // Click #app div:has-text("LoginSign in and start managing your Games!IdIdSecretSecretLogin") >> nth=3
  await page.locator('#app div:has-text("LoginSign in and start managing your Games!IdIdSecretSecretLogin")').nth(3).click({
    button: 'right'
  });

  // Fill input[type="password"]
  await page.locator('input[type="password"]').fill('mFkTylCDNC');

  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('qa-1');

  // Click text=Rotate Your Phone
  await page1.locator('text=Rotate Your Phone').click();
  await expect(page1).toHaveURL('https://qa-1.testingdxp.com/?gameId=air-drop&configurationId=634d20bc0068db4dec41eb1d#/game');

  // Click text=Please rotate your device to portrait mode for using this game
  await page1.locator('text=Please rotate your device to portrait mode for using this game').click();

});