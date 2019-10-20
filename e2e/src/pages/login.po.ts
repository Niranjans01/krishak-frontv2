import { browser, by, element } from 'protractor';

export class LoginPage {

    login = browser.baseUrl + '/login';
    
    navigateTo() {
      return browser.get(this.login);
    }


    setLoginEmail() {
        return element(by.css('#username')).sendKeys('quanto@gmail.com');
      }
    
      setLoginPassword() {
        return element(by.css('#password')).sendKeys('mind');
      }
    
      clickButton() {
        return element(by.css('#btn_login')).click();
      }




}

