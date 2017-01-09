var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

    element(by.css(".button")).click();

    var allContacts = element.all(by.repeater("contact in vm.contacts"));
    expect(allContacts.count()).toEqual(4)
    var secondContact = allContacts.get(1)
    expect(secondContact.element(by.model("contact.name")).getAttribute('value')).toEqual("Tim")
    expect(secondContact.element(by.model("contact.phone")).getAttribute('value')).toEqual("3934203242")
	});
});
