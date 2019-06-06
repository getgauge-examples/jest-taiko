const { Base } = require("../screens/base");
const { openBrowser, goto, write, click, closeBrowser } = require('/usr/local/bin/taiko');


const APP = "http://the-internet.herokuapp.com/";
var base = new Base();
var securePage;

beforeAll(async () => {
  browser = await base.openTheBrowser();
});

afterAll(async () => {
  browser.closeTheBrowser();
});

describe("Form authentication", async () => {

  it("Verifies valid user can log in to Secure Area", async () => {
    securePage = await (
                    await (
                        await browser.navigateToApplication(APP))
                                     .clickOnFormAuthentication())
                                     .login('tomsmith','SuperSecretPassword!');

    expect((await securePage.getSecureAreaHeader()).exists()).toBeTruthy();
  });

  it("Verifies logout from secure area takes user back to login page", async () => {
    loginPage = await securePage.logOut();

    expect((await loginPage.getLoginPageHeader()).exists()).toBeTruthy();
  });

});
