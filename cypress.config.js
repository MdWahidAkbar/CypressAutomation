const { defineConfig } = require('cypress')

module.exports = defineConfig({
  //reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com/angularpractice/',

    first_name: "Sarah"
  },
  //below lines are to retry to run twice the test once failed, to make sure it is not anyhting about config of environmrnt
  retries: {

    runMode: 0,
    openMode: 1
  },
  projectId: "khm3tk",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/examples/*.js',
    specPattern: 'cypress/integration/*/*.js',
    specPattern: 'cypress/e2e/**/*.js',
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/2-advanced-examples/*.js",
    baseUrl: "http://www.webdriveruniversity.com",

    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    videoUploadOnPasses: true,
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 120000,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    }
  },
})
