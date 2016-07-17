var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		element(by.css('[class="button"]')).click();
		var addNewContact = element.all(by.repeater('contact in vm.contacts'));

		expect(addNewContact.count()).toEqual(4);
		expect(addNewContact.get(1).element(by.model('contact.name')).getAttribute('value')).toEqual('Tim');
		expect(addNewContact.get(1).element(by.model('contact.phone')).getAttribute('value')).toEqual('3934203242');
	});
});
