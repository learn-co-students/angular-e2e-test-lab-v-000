var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
		element(by.css('[ng-click="vm.addContact()"]')).click();

		var contactsList = element.all(by.repeater('contact in vm.contacts'));
		expect(contactsList.count()).toEqual(4);
		browser.enterRepl()


		//expect(todoList.get(1).element(by.model('contact.name')).getAttribute('value')).toBe('Tim');
		//expect(todoList.get(1).element(by.model('contact.phone')).getAttribute('value')).toBe('3934203242');
		//expect(contactsList.get(1).getText()).toEqual('')
	});
});
