var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
    element(by.css('.button')).click();
    var contacts = element.all(by.repeater('contact in vm.contacts'));
    expect(contacts.count()).toEqual(4);
    var names = element.all(by.model('contact.name'));
    expect(names.get(1).getAttribute('value')).toEqual('Tim');
    var phoneNums = element.all(by.model('contact.phone'));
    expect(phoneNums.get(1).getAttribute('value')).toEqual('3934203242');
	});
});
