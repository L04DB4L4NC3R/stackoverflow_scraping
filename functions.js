const scraper = require("./scrape");

let obj = scraper(1,"nodemon","text");

exports.questions = async ()=>{
    return await obj.scrape("a[class=question-hyperlink]");
}