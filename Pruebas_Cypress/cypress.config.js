const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:2368/ghost/#/signin",
    setupNodeEvents(on, config) {

    },
    parseSpecialCharSequences: false, 
  },
});
