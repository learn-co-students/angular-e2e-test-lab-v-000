var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
		var contacts = element.all(by.repeater('contact in vm.contacts'));
		expect(contacts.get(1).element(by.model('contact.name')).getAttribute('value')).toEqual('Tim');
		expect(contacts.get(1).element(by.model('contact.phone')).getAttribute('value')).toEqual('3934203242');
		expect(contacts.count()).toEqual(3);
		element(by.css('.button')).click();
		expect(contacts.count()).toEqual(4);
	});
});
