var path = require('path');

describe('contact list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
		element(by.css('button')).click();

		var contactList = element.all(by.repeater('contact in vm.contacts'));
		expect(contactList.count()).toEqual(4);
		// browser.pause();
		expect(contactList.get(1).element(by.model("contact.name")).getAttribute("value")).toEqual('Tim');
		expect(contactList.get(1).element(by.model("contact.phone")).getAttribute("value")).toEqual('3934203242');
	});
});
