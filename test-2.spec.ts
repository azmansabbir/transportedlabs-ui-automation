import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://garrett.testingdxp.com//admin/#/home/settings/sign-up
  await page.goto('https://garrett.testingdxp.com//admin/#/home/settings/sign-up');

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

  // Click button >> nth=2
  await page.locator('button').nth(2).click();

  // Click text=Main Menu
  await page.locator('text=Main Menu').click();
  await expect(page).toHaveURL('https://garrett.testingdxp.com//admin/#/home/settings/mobile-design');

  // Click text=Sign Up
  await page.locator('text=Sign Up').click();
  await expect(page).toHaveURL('https://garrett.testingdxp.com//admin/#/home/settings/sign-up');

  // Click text=Social Media Logins
  await page.locator('text=Social Media Logins').click();

  // Uncheck input[name="socialMediaLogins"]
  await page.locator('input[name="socialMediaLogins"]').uncheck();

  // Click text=Phone Number Validation
  await page.locator('text=Phone Number Validation').click();

  // Check input[name="P13327183867"] >> nth=0
  await page.locator('input[name="P13327183867"]').first().check();

  // Check input[name="P13327183867"] >> nth=0
  await page.locator('input[name="P13327183867"]').first().check();

  // Click text=Email Validation
  await page.locator('text=Email Validation').click();

  // Check input[name="P13327183867"] >> nth=1
  await page.locator('input[name="P13327183867"]').nth(1).check();

  // Click text=Anonymous Login
  await page.locator('text=Anonymous Login').click();

  // Check input[name="P13327183867"] >> nth=2
  await page.locator('input[name="P13327183867"]').nth(2).check();

  // Click text=Age Information:
  await page.locator('text=Age Information:').click();

  // Click text=Users age must be 13 years or older
  await page.locator('text=Users age must be 13 years or older').click();

  // Check input[name="P4617196327"] >> nth=1
  await page.locator('input[name="P4617196327"]').nth(1).check();

  // Check input[name="P4617196327"] >> nth=1
  await page.locator('input[name="P4617196327"]').nth(1).check();

  // Click #P4387192352
  await page.locator('#P4387192352').click();

  // Fill #P4387192352
  await page.locator('#P4387192352').fill('10');

  // Click text=Options for user defined age
  await page.locator('text=Options for user defined age').click();

  // Click text=I am ​ of age or older to register >> nth=1
  await page.locator('text=I am ​ of age or older to register').nth(1).click();

  // Click text=I am ​ of age or older to win a prize
  await page.locator('text=I am ​ of age or older to win a prize').click();

  // Click text=User Profile::
  await page.locator('text=User Profile::').click();

  // Click text=Automatically assign username
  await page.locator('text=Automatically assign username').click();

  // Uncheck text=User Profile::Automatically assign usernameAuto Username Prefix​4/8 Characters >> input[type="checkbox"]
  await page.locator('text=User Profile::Automatically assign usernameAuto Username Prefix​4/8 Characters >> input[type="checkbox"]').uncheck();

  // Click text=Auto Username Prefix
  await page.locator('text=Auto Username Prefix').click();

  // Click text=​4/8 Characters >> input[type="text"]
  await page.locator('text=​4/8 Characters >> input[type="text"]').click();

  // Fill text=​4/8 Characters >> input[type="text"]
  await page.locator('text=​4/8 Characters >> input[type="text"]').fill('demo');

  // Click text=Profile Picture Set:
  await page.locator('text=Profile Picture Set:').click();

  // Click text=Add New Set
  await page.locator('text=Add New Set').click();

  // Click text=Set Title​Upload PicturesUpload Pictures >> input[type="text"]
  await page.locator('text=Set Title​Upload PicturesUpload Pictures >> input[type="text"]').click();

  // Fill text=Set Title​Upload PicturesUpload Pictures >> input[type="text"]
  await page.locator('text=Set Title​Upload PicturesUpload Pictures >> input[type="text"]').fill('demo profile');

  // Click h2:has-text("Upload Pictures")
  await page.locator('h2:has-text("Upload Pictures")').click();

  // Click text=Set Title​Upload PicturesUpload Pictures >> div >> nth=4
  await page.locator('text=Set Title​Upload PicturesUpload Pictures >> div').nth(4).click();

  // Click [aria-label="Close"]
  await page.locator('[aria-label="Close"]').click();

  // Click text=Additional Information:
  await page.locator('text=Additional Information:').click();

  // Click text=Phone Number >> nth=1
  await page.locator('text=Phone Number').nth(1).click();

  // Click text=Email Address
  await page.locator('text=Email Address').click();

  // Click div:nth-child(3) > div > .MuiFormControl-root > div > div > label:nth-child(3) > .MuiTypography-root
  await page.locator('div:nth-child(3) > div > .MuiFormControl-root > div > div > label:nth-child(3) > .MuiTypography-root').click();

  // Click text=Date of Birth
  await page.locator('text=Date of Birth').click();

  // Click text=Zip Code / Postal Code
  await page.locator('text=Zip Code / Postal Code').click();

  // Click text=Custom Question >> nth=0
  await page.locator('text=Custom Question').first().click();

  // Click text=Add question
  await page.locator('text=Add question').click();

  // Click text=Multiple Choice
  await page.locator('text=Multiple Choice').click();

  // Click #P19892275832
  await page.locator('#P19892275832').click();

  // Fill #P19892275832
  await page.locator('#P19892275832').fill('demo text');

  // Click text=Add Choice
  await page.locator('text=Add Choice').click();

  // Click text=1.​ >> input[type="text"]
  await page.locator('text=1.​ >> input[type="text"]').click();

  // Fill text=1.​ >> input[type="text"]
  await page.locator('text=1.​ >> input[type="text"]').fill('demo choice');

  // Click div:has-text("Mandatory") >> nth=4
  await page.locator('div:has-text("Mandatory")').nth(4).click();

  // Check text=Custom QuestionCustom Question Type:FreeformMultiple ChoiceCustom Question Promp >> input[type="checkbox"]
  await page.locator('text=Custom QuestionCustom Question Type:FreeformMultiple ChoiceCustom Question Promp >> input[type="checkbox"]').check();

  // Click text=Save
  await page.locator('text=Save').click();

  // Click text=Where Custom Opt-Ins appear within the mobile registration flow:
  await page.locator('text=Where Custom Opt-Ins appear within the mobile registration flow:').click();

  // Click text=Sign-Up Home Screen
  await page.locator('text=Sign-Up Home Screen').click();

  // Click text=Top of Custom Question's Screen
  await page.locator('text=Top of Custom Question\'s Screen').click();

  // Click span:has-text("Custom Opt-In")
  await page.locator('span:has-text("Custom Opt-In")').click();

  // Click text=Add Custom Opt-In
  await page.locator('text=Add Custom Opt-In').click();

  // Click text=SMS
  await page.locator('text=SMS').click();

  // Click div[role="dialog"] >> text=Email
  await page.locator('div[role="dialog"] >> text=Email').click();

  // Click div[role="dialog"] span:has-text("Custom")
  await page.locator('div[role="dialog"] span:has-text("Custom")').click();

  // Click text=Field nameField name >> #P14786934062
  await page.locator('text=Field nameField name >> #P14786934062').click();

  // Click text=Give some description here...Give some description here... >> #P14786934062
  await page.locator('text=Give some description here...Give some description here... >> #P14786934062').click();

  // Fill text=Give some description here...Give some description here... >> #P14786934062
  await page.locator('text=Give some description here...Give some description here... >> #P14786934062').fill('demo data');

  // Click text=Save
  await page.locator('text=Save').click();

  // Click div:nth-child(11) > div:nth-child(2) > button:nth-child(2)
  await page.locator('div:nth-child(11) > div:nth-child(2) > button:nth-child(2)').click();

});