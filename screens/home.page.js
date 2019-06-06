const { click, link } = require('/usr/local/bin/taiko');
const { FormAuthentication } = require("../screens/formauthentication.page");

class HomePage {

    async clickOnFormAuthentication(){
      await click("Form Authentication");
      return new FormAuthentication();
    }

}

module.exports = {HomePage};
