const {
    By,
    until,
    Builder,
    click,
    Key
} = require("selenium-webdriver");


let func = async (query)=>{
    let driver = await new Builder().forBrowser("firefox").build();
    try{
        await driver.get(`https://stackoverflow.com/search?q=${query}`);
        await driver.findElement({className:"question-hyperlink"}).click();
        return await driver.findElement({className:"question-page"}).getAttribute("innerHTML");

    } finally{
        await driver.quit();
    }
}


const cheerio = require("cheerio");

let funcc = async ()=>{
    let $ = cheerio.load(await func("mongoose"));
    let answer = $("pre").text()
    let question = $("h1").text();
    return {
        question,
        answer
    }

};

funcc()
.then(console.log)
.catch(console.log)