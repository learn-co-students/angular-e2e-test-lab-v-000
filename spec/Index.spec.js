var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		// navigate to webpage
    browser.get('http://localhost:8080');

    // click on button to add contact
    element(by.css('[class="button"]')).click();

    // set variable to repeated elements
    var contactList = element.all(by.repeater('contact in vm.contacts'));

    // set expectations of list count and values for second object in array
    expect(contactList.count()).toEqual(4);
    expect(contactList.get(1).element(by.model('contact.name')).getAttribute('value')).toEqual('Tim');
    expect(contactList.get(1).element(by.model('contact.phone')).getAttribute('value')).toEqual('3934203242');
  });
});
