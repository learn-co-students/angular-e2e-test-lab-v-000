var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
		element(by.css('.button')).click();
		var contactList = element.all(by.repeater('contact in vm.contacts'));
		var second = element.all(by.model('contact.name')).get(1).getAttribute('value');
		var secondNum = element.all(by.model('contact.phone')).get(1).getAttribute('value');
		expect(contactList.count()).toEqual(4);
 		expect(second).toEqual('Tim');
		expect(secondNum).toEqual('3934203242');
	});
});
