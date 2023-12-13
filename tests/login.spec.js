const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get('https://www.saucedemo.com/');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user', Key.RETURN);
    await driver.findElement(By.css('#password')).sendKeys('secret_sauce', Key.RETURN);
    await driver.findElement(By.css('[data-test="login-button"]')).click()
    await driver.wait(until.titleIs('webdriver - Google Search'), 5000);
  } finally {
    await driver.quit();
  }
})();


