const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zmb39p',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
