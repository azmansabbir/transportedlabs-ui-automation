import { devices, PlaywrightTestConfig } from "@playwright/test";
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const config: PlaywrightTestConfig = {

    


    // workers: 4,
    // fullyParallel: true,
    // projects: [
    //     {
    //         name: 'chromium',
    //         use: { ...devices['Desktop Chrome'] },
    //     },
    //     {
    //         name: 'Pixel',
    //         use: { ...devices['Pixel 5'] },
    //     },
    //     // {
    //     //     name: 'firefox',
    //     //     use: { ...devices['Desktop Firefox'] },
    //     // },
    //     // {
    //     //     name: 'webkit',
    //     //     use: { ...devices['Desktop Safari'] },
    //     // },
    // ],

    use: {
        viewport: null,
        headless: !true,
        // browserName: "chromium",
        screenshot: "on",
        video: "off",
        // trace: "on",
        baseURL: "https://garrett.testingdxp.com/",
        // baseURL: "https://dev107189.service-now.com/api/now/table/incident",
        extraHTTPHeaders: {
            "Authorization": "Basic YWRtaW46U0NxN2pDb2tDbFI4"
        }
        // baseURL: "",
        // contextOptions: {
        //     permissions: ["clipboard-read"]
        // }
        ,
        launchOptions: {
            args: ["--start-maximized"],

            // logger: {
            //     // isEnabled: (name, severity) => true,
            //     // log: (name, severity, message, args) => console.log(name, severity)
            // }
        }
    },
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
     },
    
    timeout: 120000,
   

    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    // grep: [new RegExp("@smoke"), new RegExp("@reg")],
    testMatch: [
                // "uploadfile.test.ts",
                "TL002MD.test.ts",
                // "mobile.test.ts"
                ],
    retries: 0,
    // reporter: "./customReport/myReporter.ts"
    reporter: [
        ["dot"], // -> console
        ["json", { outputFile: "test-result.json" }], //  -> JSON
        ['html', {
            open: "never"
        }] // -> HTML
    ],
    // globalTeardown: './helper/globalsetup.ts'

 /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
}
export default config;