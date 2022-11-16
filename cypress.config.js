const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 50000,
  reporter: 'mochawesome',
  env: {
    url: 'https://rahulshettyacademy.com/angularpractice/',
  },
  //below lines are to retry to run twice the test once failed, to make sure it is not anyhting about config of environmrnt
  retries: {
    runMode: 1,
  },
  projectId: "khm3tk",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      //return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/examples/*.js',
  },
})
