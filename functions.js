const scraper = require("./scrape");


exports.questions = async (query)=>{
    let obj = scraper(1,query,"text");
    return await obj.scrape("a[class=question-hyperlink]");
}