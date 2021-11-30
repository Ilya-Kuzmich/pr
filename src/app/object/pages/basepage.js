const { element, browser } = require("protractor");
const BaseObject = require('../baseObject');

class BasePage extends BaseObject {
    constructor() {
        super();
        this.baseUrl = 'https://www.protractortest.org/';
    }
    async browse (url){
        await browser.get(`${this.baseUrl}${url || ''}`);
    }

   
}

module.exports = BasePage;