var path = require('path');

describe('angularjs homepage contact list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		element(by.model('contact.name')).sendKeys('Yonk');
		element(by.model('contact.phone')).sendKeys('Was here!!');

		element(by.css('.button')).click();

		var contactList = element.all(by.repeater('contact in vm.contacts'));

		expect(contactList.count()).toEqual(4);
		expect(contactList.get(1).element(by.model('contact.name')).getAttribute('value')).toBe('Tim');
	});
});
