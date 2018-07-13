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
        this.scrape = async ()=>{
            let $ = cheerio.load(await this.data());
            console.log ($(string).text())
            if(attribute === 'text')
                return $(string).text();
            else 
                return $(string).html()
        }
    }
}




module.exports = (options,query,string,attribute)=>{
    return new Scraper(options,query,string,attribute);
}


