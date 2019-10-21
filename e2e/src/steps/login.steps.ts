import { Before, Given, Then, When } from 'cucumber';
import { LoginPage } from '../pages/login.po';

let page: LoginPage;

Before(() => {
    page = new LoginPage();
  });

  Given(/^I am on the login page$/, async () => {
    await  page.navigateTo();
  });
  
  When(/^When I type username and password$/, async () => {
    await page.setLoginEmail();
    await page.setLoginPassword();
  });
  
  Then(/^Then I should be logged in$/, async () => {
    await page.clickButton();
  });