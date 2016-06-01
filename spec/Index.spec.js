var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		// element(by.model('contact.name')).sendKeys("JOE!");
		// element(by.model('contact.phone')).sendKeys("1234567890");
		element(by.css('.button')).click();

		var contact = element.all(by.repeater('contact in vm.contacts'));
		expect(contact.count()).toEqual(4);
		expect(contact.get(1).element(by.model('contact.name')).getAttribute('value')).toBe("Tim");
		expect(contact.get(1).element(by.model('contact.phone')).getAttribute('value')).toBe('3934203242');
	});
});


//REQUIREMENTS
// Total count of contacts should be 4.
// The name of the second contact should be 'Tim'.
// The phone number of the second contact should be '3934203242'.
