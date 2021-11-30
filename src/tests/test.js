const { element } = require("protractor");
const HomePage = require('../app/objects/pages/homePage');

describe('Protractor Demo App', function () {
    it('should add one and two', async function () {
        let hp = new HomePage();
        await hp.browse();
        expect(await hp.isDisplayed('mainLogo')).toEqual(true);
       
        let titles = ["Test Like a User", "For Angular Apps", "Automatic Waiting"];
        expect(await hp.getTextForEachElements('columnTitles')).toEqual(titles);
        
        let headerItems = ['Home', 'Quick Start', 'Protractor Setup', 'Protractor Tests', 'Reference'];
        expect(await hp.header.getTextForEachElements('mainItems')).toEqual(headerItems);
    });
});