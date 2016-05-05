var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

    var contacts = element.all(by.repeater('contact in vm.contacts'));

    expect( contacts.count() ).toEqual(4);
    expect(contacts.get(1).getText()).toEqual('Tim');
    expect(contacts.get(1).getText()).toEqual('3934203242');


	});
});


// Total count of contacts should be 4.
// The name of the second contact should be 'Tim'.
// The phone number of the second contact should be '3934203242'.

    // expect(todoList.get(2).getText()).toEqual('Writing tests!!');
