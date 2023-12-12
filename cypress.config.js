const { defineConfig } = require("cypress");

module.exports = defineConfig({  
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  e2e: {
    supportFile: false
  },
  /*
  env: {
    times: 1,     // number of consecutive tests
    host: '',     // host to visit
    user: '',     // login username
    pass: '',     // login password
    selector: '', // selector to click
    needle: ''    // check for this string exists in the page
  } 
  */
 env: require('./env.json') 
});
