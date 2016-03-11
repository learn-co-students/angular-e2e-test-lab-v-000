var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
    var contacts = element.all(by.repeater('contact in vm.contacts'));
    expect(contacts.count()).toEqual(3);
    element(by.model('contact.name')).sendKeys('A name!!');
    element(by.model('contact.phone')).sendKeys('8675309');
    element(by.css('[value="add"]')).click();

    contacts = element.all(by.repeater('contact in vm.contacts'));
    expect(contacts.count()).toEqual(4);
    //expect(todoList.get(2).getText()).toEqual('Writing tests!!');
	});
});
