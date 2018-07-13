const scraper = require("./scrape");

let obj = scraper(1,"nodemon","a","html");


obj.scrape()
.then(console.log)
.catch(console.log);
