var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		element(by.model('newContact.name')).sendKeys("Broseph");
		element(by.model('newContact.phone')).sendKeys("8675309");
		element(by.css('.button')).click();

		var contactsList = element.all(by.repeater('contact in vm.contacts'));
		expect(contactsList.count()).toEqual(4);
		expect(contactsList.get(1).getText()).toEqual('Tim\n3934203242');
	});
});
