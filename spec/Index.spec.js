var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
    element(by.css('[value="add"]')).click();

    var contacts = element.all(by.repeater('contact in vm.contacts'));
    expect(contacts.count()).toEqual(4);
    expect(contacts.get(1).getText()).toContain('Tim');
    expect(contacts.get(1).getText()).toContain('3934203242');
	});
});

