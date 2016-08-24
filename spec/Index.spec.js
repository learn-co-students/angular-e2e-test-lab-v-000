var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		element(by.model('contact.name')).sendKeys('Billy Bob');
		element(by.model('contact.phone')).sendKeys('777-777-7777');

		element(by.css('[ng-click="vm.addContact()"]')).click();

		var contacts = element.all(by.repeater('contact in vm.contacts'));
		expect(contacts.count()).toEqual(4);
		expect(contacts.get(1).element(by.model('contact.name')).getAttribute('value')).toEqual('Tim');
		expect(contacts.get(1).element(by.model('contact.phone')).getAttribute('value')).toEqual('3934203242');
		});
});
