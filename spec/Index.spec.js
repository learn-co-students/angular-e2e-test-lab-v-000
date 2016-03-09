var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		element(by.model('contact.name')).sendKeys('Number 4');
		element(by.model('contact.phone')).sendKeys('000');
		element(by.css('[ng-click="vm.addContact()"]')).click();

		var contacts = element.all(by.repeater('contact in mv.contacts'));
		expect(contacts.count()).toEqual(4);
		expect(contacts.get(1).getText()).toEqual('Tim');
		expect(contacts.get(1).getText()).toEqual('3934203242');

		// Total count of contacts should be 4.
// The name of the second contact should be 'Tim'.
// The phone number of the second contact should be '3934203242'.
	});
});
