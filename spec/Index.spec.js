var path = require('path');

describe('Add Contact', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

    element(by.buttonText("Add Contact")).click();

    var contactList = element.all(by.repeater('contact in vm.contacts'));
    expect(contactList.count()).toEqual(4);
	});
});
