var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

    element(by.css('[class="button"]')).click();

    var contactList = element.all(by.repeater('contact in vm.contacts'));
    expect(contactList.count()).toEqual(4);
    expect(contactList.get(1).element(by.model('contact.name')).getAttribute('value')).toBe('Tim');
    expect(contactList.get(1).element(by.model('contact.phone')).getAttribute('value')).toBe('3934203242');

	});
});



// Using the files we have provided in this repo, edit spec/Index.spec.js to test our application.

// We should test that we can click on the "Add" button, and that it adds a new contact to the list.

// Inside of the 'should add a new contact' test, setup the following expectations.

// Total count of contacts should be 4.
// The name of the second contact should be 'Tim'.
// The phone number of the second contact should be '3934203242'.