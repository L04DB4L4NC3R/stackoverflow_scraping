const cheerio = require("cheerio"); 
const getHTML = require("./get");


/**
 * @description Initialize an instance of this class to have the cheerio ready
 * 
 * pass the extraction string in scrape method for scraping
 */

class Scraper{
    constructor(options,query,attribute){
        this.options = options;
        this.query = query;
        this.data = async ()=>{
            return await getHTML(query);
        }
        this.attribute = attribute;
        this.scrape = async (string)=>{
            let $ = cheerio.load(await this.data());
            console.log ($(string).text())
            if(attribute === 'text')
                return $(string).text();
            else 
                return $(string).html();
        }
    }
}




module.exports = (options,query,string,attribute)=>{
    return new Scraper(options,query,string,attribute);
}


