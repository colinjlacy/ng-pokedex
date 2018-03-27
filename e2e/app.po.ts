import { browser, element, by } from 'protractor';

export class NgPokedexPage {
  navigateTo() {
    return browser.get('/home');
  }

  getHeadingText() {
    return element(by.css('.logo')).getText();
  }
}
