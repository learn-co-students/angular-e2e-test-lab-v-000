var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
		element(by.css('[class="button"]')).click();

		var list = element.all(by.repeater('contact in vm.contacts'));
		expect(list.count()).toEqual(4)
	});
});
