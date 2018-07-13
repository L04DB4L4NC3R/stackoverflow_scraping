const scraper = require("./scrape");

let obj = scraper(1,"nodemon","text");


obj.scrape("a[class=question-hyperlink]")
.then(console.log)
.catch(console.log);
