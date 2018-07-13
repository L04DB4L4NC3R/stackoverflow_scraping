const scraper = require("./scrape");

let obj = scraper(1,"nodemon","a","html");


obj.data()
.then(console.log)
.catch(console.log);
