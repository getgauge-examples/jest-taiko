const { openBrowser, goto, closeBrowser } = require('/usr/local/bin/taiko');
const { HomePage } = require("../screens/home.page")

class Base {

   async openTheBrowser(){
    await openBrowser({headless: false});
    jest.setTimeout(30000);
    return new Base();
  }

  async closeTheBrowser(){
    await closeBrowser();
    return "Browser is Closed!"
 }


  async navigateToApplication(appURL){
    await goto(appURL);
    return new HomePage();
  }

}

module.exports = {Base};
