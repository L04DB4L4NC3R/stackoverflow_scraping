const {
    Builder
} = require("selenium-webdriver");

const cheerio = require("cheerio");

let getData = async ()=>{
    let driver = new Builder().forBrowser('firefox').build();
    try{
        await driver.get("https://stackoverflow.com/questions?sort=votes");
        return await driver.findElement({id:"mainbar"});
    } finally{
        await driver.quit();
    }
}


module.exports = async ()=>{
    let $ = cheerio.load(await getData());
    return $("a[class=question-hyperlink]").text();
}