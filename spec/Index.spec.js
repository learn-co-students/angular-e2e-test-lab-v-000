var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080'); // visit this url in the browser

    element(by.css('.button')).click(); // find and click the button element for "Add"

    var todoList = element.all(by.repeater('contact in vm.contacts')); // select all the contacts via ng-repeat
    expect(todoList.count()).toEqual(4); // there should now be 4 contacts

    expect(todoList.get(1).element(by.model('contact.name')).getAttribute('value')).toBe('Tim'); // use the 'element' function and grab from our ng-model
    expect(todoList.get(1).element(by.model('contact.phone')).getAttribute('value')).toBe('3934203242');

	});
});
