const {
    By,
    until,
    Builder,
    click,
    Key
} = require("selenium-webdriver");

module.exports = async (query)=>{
    let driver = await new Builder().forBrowser("firefox").build();
    try{
        await driver.get(`https://stackoverflow.com/search?q=${query}`);
        await driver.findElement({className:"question-hyperlink"}).click();
        return await driver.findElement({className:"question-page"}).getAttribute("innerHTML");

    } finally{
        await driver.quit();
    }
}