var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		element(by.css('.button')).click();

		var contactList = element.all(by.repeater('contact in vm.contacts'));

		element.all(by.model('contact.name')).last().sendKeys('Han Lee');
		element.all(by.model('contact.phone')).last().sendKeys('3216540987');

		expect(contactList.count()).toEqual(4);
		expect(element.all(by.model('contact.name')).get(1).getAttribute('value')).toEqual('Tim');
		expect(element.all(by.model('contact.phone')).get(1).getAttribute('value')).toEqual('3934203242');

	});
});
