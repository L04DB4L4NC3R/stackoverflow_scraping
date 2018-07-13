const {
    Builder,
    Key,
    By,
    until,
    click
} = require("selenium-webdriver");


/**
 * @description To get HTML from stackoverflow according to the selected query
 */

let getHTML = async (query)=>{

    let driver = await new Builder().forBrowser("firefox").build();

   try{

        await driver.get(`https://stackoverflow.com/search?q=${query}`);

        let data = await driver.findElement({className:"flush-left"}).getAttribute('innerHTML');

        console.log(data);
   } finally{
       await driver.quit();
   }

}


getHTML("nodemon")