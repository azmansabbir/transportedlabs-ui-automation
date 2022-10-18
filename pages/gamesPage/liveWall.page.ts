import { expect, Page } from "@playwright/test";
import { readFileSync } from "fs";
export default class liveWallPage {
  [x: string]: any;

  private page: Page;
  static buffer: void;
  constructor(page: Page) {
    this.page = page;
  }

  //=======================================================
  //▶▶Start Element

  async clickLiveWallSection() {
    const locator = this.page.locator("//p[text()='Live Wall']");
    expect.soft(locator).toContainText("Live Wall");
    await locator.click();
    // console.log("Successfully Click To Tug of War Page ")
  }

  async clickDesignPage() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Design']");
    await ele.click();
  }


  async clickClearBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = await this.page
      .frameLocator("iframe")
        .locator("text='Clear All'");
    await ele.click({force:true});
  }

  async verifyFontsTitleText() {
    const ele = await this.page.frameLocator("iframe").locator("text=Fonts");
    expect(ele).toContainText("Fonts");
  }

  async verifyUploadFontText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("text=Upload Font");
    expect(ele).toContainText("Upload Font");
  }

  async clickToUploadFont() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[1]");
    expect(ele).toBeVisible();
    await ele.click();
  }



  async deleteUploadedFont() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-718jsx'])[1]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-718jsx'])[1]")
        .click();
    }
  }

  //Start Upload Color Section Element
  async clickBackgroundColorPickerInputField() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1e91icv'])[1]");
    // expect(ele).toBeVisible()
    await ele.click();
  }

  async inputBackgroundFirstRGBColor() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[1]');
    expect(ele).toBeVisible();
    await ele.fill("34");
  }

  async inputBackgroundBoxColorRGBSecond() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[2]');
    await ele.fill("115");
  }
  async inputBackgroundBoxColorRGBThird() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[3]');
    await ele.fill("224");
  }

  async inputBackgroundBoxColorOpacity() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[4]');
    await ele.fill("94");
  }

  async inputBackgroundBoxColorHEXColor() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[5]');
    await ele.fill("F1C42FFF");
  }
  async clickSaveBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Save']");
    await ele.click();
  }

  async clickFontColorPickerInputField() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//p[text()='Font Color']/following-sibling::button"); 
    await ele.click({force:true});
  }

  async inputFontFirstRGBColor() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[1]');
    expect(ele).toBeVisible();
    await ele.fill("34");
  }

  async inputFontBoxColorRGBSecond() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[2]');
    await ele.fill("115");
  }
  async inputFontBoxColorRGBThird() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[3]');
    await ele.fill("224");
  }

  async inputFontBoxColorOpacity() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[4]');
    await ele.fill("90");
  }

  async inputFontBoxColorHEXColor() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[5]');
    await ele.fill("F1C41FFF");
  }

  async deleteUploadedFeedRightImage() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[8]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[8]")
        .click();
    }
  }
  async deleteUploadedFeedLeftImage() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[7]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[7]")
        .click();
    }
  }

  async deleteUploadedFeedImage() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[6]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[6]")
        .click();
    }
  }

  async deleteUploadedOutputBackground() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[5]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[5]")
        .click();
    }
  }

  async deleteUploadedOutputFrame() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[4]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[4]")
        .click();
    }
  }
  async deleteUploadedFullScreenLogo() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[3]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[3]")
        .click();
    }
  }

  async deleteUploadedMobileFrame() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[2]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[2]")
        .click();
    }
  }

  async deleteUploadedBackground() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[1]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[1]")
        .click();
    }
  }

  //Upload Image For Live Wall Game
  async clickToUploadFeedRightImage() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[8]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadFeedLeftImage() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[7]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadFeedImage() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[6]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadOutputBackground() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[5]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadOutputFrame() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[4]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadFullScreenLogo() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[3]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadMobileFrame() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[4]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadBackground() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[2]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  //Dispaly Massage Section Element From Here

  async inputPreLiveText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator(
        "(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]"
      );
    expect(ele).toBeVisible();
    await ele.dblclick();
    await ele.fill(
      "In publishing and graphic design, Lorem ipsum is a placeholder"
    );
  }

  async inputPostLiveText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator(
        "(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]"
      );
    expect(ele).toBeVisible();
    await ele.fill(
      "In publishing and graphic design, Lorem ipsum is a placeholder"
    );
  }

  async clickStandByMassageType() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//a[@title='Block Type'])[3]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async selectNormalText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//li[text()='Normal']");
    expect(ele).toBeVisible();
    await ele.click();
  }

  
  async inputStandByMessage() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[3]");
    expect(ele).toBeVisible();
    await ele.fill(
      "In publishing"
    );
  }

  async clickBoldOptionForPreLiveText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@title='Bold']//img)[1]");
    expect(ele).toBeVisible();
    await ele.click();
  }

    //Live Wall Home page 
    async clickGameStartBtn() {

      //const ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]").isVisible()
      if (await this.page.frameLocator('iframe').locator("//button[text()='START']")) {
              // console.log("Enable Stage to be skip and jump to next one")
              await this.page.frameLocator('iframe')
                      .locator("//button[text()='START']")
                      .click({force:true})
      }
      
    }

        //Live Wall Home page 
        async clickGameStopBtn() {

          //const ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]").isVisible()
          if (await this.page.frameLocator('iframe').locator("//button[text()='STOP']")) {
                  // console.log("Enable Stage to be skip and jump to next one")
                  await this.page.frameLocator('iframe')
                          .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
                          .click({force:true})
          }
          
        }
  

  //Live Wall Home page 
  async clickLiveSelfieCamOutPutLink() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//img)[1]");
    await ele.click();
  }


  
  //Live Wall Home page 
  async clickLiveSelfieCamOutPutLinkCopyBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Copy Link']");
    expect(ele).toBeVisible();
    await ele.click();
  }

  //Live Wall Home page 
  async clickMobileQRCode() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//img)[2]");
    await ele.click();
  }

  //Live Wall Home page 
  async clickCopyQRCodeBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Copy QR Code']");
    await ele.click();
  }

  //Live Wall Home page 
  async clickSaveQRCodeBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Save QR Code']");
    await ele.click();
  }

  //Live Wall Home page 
  async clickQRCodeWindowCloseBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[@aria-label='Close']");
    await ele.click();
  }

  async clickRefreshBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Refresh']");
    await ele.click({force:true});
  }

  async clickToAddLiveSelfieCamInCue() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('text=CueLiveDelete >> button').first()
    await ele.click();
  }

  async clickCueBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Cue']");
    await ele.click();
  }

  async clickCueOpenNewTabBtn() {
      // Click text=Open Link
  const [page1] = await Promise.all([
    this.page.waitForEvent('popup'),
    this.page.frameLocator('iframe').locator('text=Open Link').click()
  ]);

  }

  async clickToAddCueToLiveSection() {  

    
  // Click text=LiveAlertUncue >> button >> nth=0
  await this.page1.locator('text=LiveAlertUncue >> button').first().click()


}


  async clickAutoRotationCheckBox() {
    const ele = await this.page
      .locator("(//input[@type='checkbox'])[1]");
    await ele.click();
  }

  async clickAnalyticsBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Analytics']");    
    await ele.click({force:true});
  }


  async downloadAnlytics() {
    // Click text=Export 
    const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.page.frameLocator('iframe').locator("(//button[text()='Export'])[1]").click()
    ]);
}

async clickAnalyticsPageBackBtn() {
  const ele = await this.page
    .frameLocator("iframe")
    .locator("//button[text()='← Back']");
  expect(ele).toBeVisible()
  await ele.click();
}

async clickOutPutBtn() {
  const ele = await this.page
    .frameLocator("iframe")
    .locator("//button[text()='Output']");
  expect(ele).toBeVisible()
  await ele.click();
}

async clickOutPutLinkInNewTab() {
  const ele = await this.page
    .frameLocator("iframe")
    .locator("//a[contains(@class,'MuiButtonBase-root MuiButton-root')]");
  expect(ele).toBeVisible()
  await ele.click();
}

async clickVIPLiveSelfieCamBtn() {
  const ele = await this.page
    .frameLocator("iframe")
    .locator("(//h2[text()='Live Selfie Cam']/following-sibling::button)[3]");
  expect(ele).toBeVisible()
  await ele.click();
}














}
