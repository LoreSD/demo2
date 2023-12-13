
const {Builder, Browser, By, Key} = require('selenium-webdriver');

describe('Login', () => {
    it("Login with standard_user credentials", async() => {
        let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('standard_user', Key.RETURN);
        await driver.findElement(By.css('#password')).sendKeys('secret_sauce', Key.RETURN);
        await driver.findElement(By.css('[data-test="login-button"]')).click()
        await driver.sleep(5000)
        await driver.quit();
    });
});




/** 
const { Builder, By } = require("selenium-webdriver");

describe('Login', () => {
    it("Login with standard_user credentials", async() => {
        let driver = new Builder().forBrowser('chrome').build();
        await driver.get('https://www.saucedemo.com/')
        await driver.findElement(By.id('user-name')).sendKeys('standard_user')
        await driver.findElement(By.css('#password')).sendKeys('secret_sauce')
        await driver.findElement(By.css('[data-test="login-button"]')).click()
        await driver.sleep(5000)
        await driver.quit();
    });
});
*/
