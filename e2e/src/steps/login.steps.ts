import { Before, Given, Then, When } from 'cucumber';
import { LoginPage } from '../pages/login.po';

let page: LoginPage;

Before(() => {
    page = new LoginPage();
  });

  Given(/^I am on the login page$/, async () => {
    await page.navigateTo();
  });
  
  When(/^I type username and password$/, async () => {
    await page.setLoginEmail();
    await page.setLoginPassword();
  });
  
  Then(/^I should be logged in$/, async () => {
  
    // expect(await page.loginEmail()).to.equal('abc@gmail.com');
    // expect(await page.loginPassword()).to.equal('abc');
    await page.clickButton();
  
    // page.getPasswordTextbox().sendKeys('1234');
  });