const cheerio = require("cheerio"); 
const getHTML = require("./get");


class Scraper{
    constructor(options,query,string,attribute){
        this.options = options;
        this.query = query;
        this.data = async ()=>{
            return await getHTML(query);
        }
        this.string = string;
        this.attribute = attribute;
        this.load = cheerio.load(this.data());
        this.scrape = async ()=>{
            if(attribute === 'text')
                return await this.load(string).text();
            else 
                return await this.load(string).html()
        }
    }
}




module.exports = (options,query,string,attribute)=>{
    return new Scraper(options,query,string,attribute);
}


