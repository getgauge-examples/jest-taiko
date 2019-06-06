const { text, focus, highlight, click } = require('/usr/local/bin/taiko');

class SecureArea{

    async getSecureAreaHeader(){
      var header = await text('Secure Area');
      return header;
    }

    async logOut(){
      await click("Logout");
      const { FormAuthentication } = require("../screens/formauthentication.page");
      return new FormAuthentication();
    }

}

module.exports = {SecureArea};
