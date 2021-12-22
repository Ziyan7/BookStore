const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
require("dotenv").config();
const userInput = require("./bookstore.json");
async function Registration() {
  
    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
  
    //To fetch http://google.com from the browser with our code.
    await driver.get(process.env.REG_URL);
  
    //To send a search query by passing the value in searchString.
    await driver.findElement(By.id("firstName")).sendKeys(userInput.registerUser.firstName, Key.RETURN);
    await driver. sleep(1000)
    await driver.findElement(By.id("lastName")).sendKeys( userInput.registerUser.lastName, Key.RETURN);
    await driver. sleep(1000)
    await driver.findElement(By.id("email")).sendKeys( userInput.registerUser.email, Key.RETURN);
    await driver. sleep(1000)
    await driver.findElement(By.id("password")).sendKeys( userInput.registerUser.password, Key.RETURN);
    await driver. sleep(1000)
    await driver.findElement(By.id("confirm")).sendKeys( userInput.registerUser.confirm, Key.RETURN);
    await driver. sleep(1000)
    await driver.findElement(By.id("signUp-btn")).click();
    await driver. sleep(1000)
    await driver.switchTo().alert().accept()
    await driver. sleep(1000) 
    await driver.findElement(By.id("login-redirect")).click();
    await driver. sleep(1000)

  
    //Verify the page title and print it
    var title = await driver.getTitle();
    console.log("Title is:", title);
    
    //It is always a safe practice to quit the browser after execution
    await driver.quit();
  }
  Registration()