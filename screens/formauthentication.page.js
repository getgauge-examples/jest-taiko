const { click, write, into, focus, inputField, text } = require('/usr/local/bin/taiko');
const { SecureArea } = require("../screens/securearea.page");

class FormAuthentication {

    async getLoginPageHeader(){
      var header = await text('Login Page');
      return header;
    }

    async login(username, password){
      await focus(inputField('Username'));
      await write(username, into('Username'));
      await focus(inputField('Password'));
      await write(password, into('Password'));
      await click("Login");
      return new SecureArea();
    }

}

module.exports = {FormAuthentication};
