var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

    element(by.css('.button')).click();
    
    

    var contacts = element.all(by.repeater('contact in vm.contacts'));
    expect(contacts.count()).toEqual(4);
    expect(contacts.get(1).element(by.model('contact.name')).getAttribute('value')).toEqual('Tim');
    expect(contacts.get(1).element(by.model('contact.phone')).getAttribute('value')).toEqual('3934203242');

	});
});




// We should test that we can click on the "Add" button, and that it adds a new contact to the list.
// Inside of the 'should add a new contact' test, setup the following expectations.
// Total count of contacts should be 4.
// The name of the second contact should be 'Tim'.
// The phone number of the second contact should be '3934203242'.




// element(by.model('todoList.todoText')).sendKeys('Writing tests!!');
//         element(by.css('[value="add"]')).click();
 
//         var todoList = element.all(by.repeater('todo in todoList.todos'));
//         expect(todoList.count()).toEqual(3);
//         expect(todoList.get(2).getText()).toEqual('Writing tests!!');
//     });
// });