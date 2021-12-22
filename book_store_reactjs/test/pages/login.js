const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
require("dotenv").config();
const userInput = require("./bookstore.json");
async function Login() {
  var search = "ind";

  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

  //To fetch http://google.com from the browser with our code.
  await driver.get(process.env.LOGIN_URL);

  //To send a search query by passing the value in searchString.
  await driver
    .findElement(By.id("emailId"))
    .sendKeys(userInput.userCredentials.email, Key.RETURN);
  await driver.sleep(2000);

  await driver
    .findElement(By.id("password"))
    .sendKeys(userInput.userCredentials.password, Key.RETURN);
  await driver.sleep(2000);

  await driver.findElement(By.id("SignIn-btn")).click();
  await driver.sleep(2000);

  await driver.findElement(By.id("search-bar")).sendKeys(search, Key.RETURN);
  await driver.sleep(2000);

  await driver.findElement(By.id("add-cart-btn")).click();
  await driver.sleep(2000);

  await driver.findElement(By.id("cart-btn")).click();
  await driver.sleep(2000);

  await driver.findElement(By.id("purchase-btn")).click();
  await driver.sleep(2000);

  await driver.findElement(By.id("continue-btn")).click();
  await driver.sleep(2000);

  await driver.findElement(By.id("order-btn")).click();
  await driver.sleep(3000);

  //Verify the page title and print it
  var title = await driver.getTitle();
  console.log("Title is:", title);

  //It is always a safe practice to quit the browser after execution
  await driver.quit();
}
Login();
