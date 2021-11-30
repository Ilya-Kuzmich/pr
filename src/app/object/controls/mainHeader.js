const { element } = require("protractor");
const BaseObject = require("../baseObject");

class MainHeader extends BaseObject {
constructor(){
    super();
    this.container = element(by.css('.navbar-collapse'));
    this.mainItems = this.container.all(by.css('.navbar-nav'));

}
}

module.exports = MainHeader;