const BaseObject = require('../baseObject');
const BasePage = require('./basepage');
const MainHeader = require('../controls/mainHeader');

class HomePage extends BasePage {
    constructor() {
        super();
        this.mainLogo = element(by.css('.protractor-logo'));
        this.columnTitles = element.all(by.css('.col-sm-4>h3'));
    }
    get header() {
        return new MainHeader();
    }
}

module.exports = HomePage;

