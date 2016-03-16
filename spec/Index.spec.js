var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
    // num contacts = 4
    //second name is Tim
    //second phone is '3934203242'
    element(by.css('[class=button]')).click();
    var contacts = element.all(by.repeater('contact in vm.contacts'));
    expect(contacts.count()).toEqual(4);
    expect(contacts.get(1).element(by.model('contact.name')).getAttribute('value')).toEqual('Tim');
    expect(contacts.get(1).element(by.model('contact.phone')).getAttribute('value')).toEqual('3934203242');
	});
});
