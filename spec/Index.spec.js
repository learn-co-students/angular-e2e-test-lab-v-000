var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

	element(by.model('contact.name')).sendKeys('Tim');
	element(by.model('contact.phone')).sendKeys('3934203242');
	element(by.css('.button')).click();



	var totalContact = element.all(by.repeater('contact in vm.contacts'));
	expect(totalContact.count()).toEqual(4);
	 expect(totalContact.get(1).element(by.model('contact.name')).getAttribute('value')).toBe('Tim');
	 expect(totalContact.get(1).element(by.model('contact.phone')).getAttribute('value')).toBe('3934203242');
//  expect(totalContact.get(3).getText()).toEqual('3934203242');
	});
});
