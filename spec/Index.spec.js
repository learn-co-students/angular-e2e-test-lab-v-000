var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
		element(by.css('[value="add"]')).click();
		var names = element.all(by.model('contact.name'));
		var phones = element.all(by.model('contact.phone'));

		expect(names.count()).toEqual(4);
		expect(names.get(1).getAttribute('value')).toEqual('Tim');
		expect(phones.get(1).getAttribute('value')).toEqual('3934203242');
	});
});
