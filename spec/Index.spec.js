var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
		element(by.css('[value="Add"]')).click();

		var contanctList = element.all(by.repeater('contact in vm.contacts')).element(by.css('h6');
		expect(todoList.count()).toEqual(4);
		expect(todoList.get(3).getText()).toEqual('Writing tests!!');
	});
});


// describe('angularjs homepage todo list', function() {
// 	it('should add a todo', function() {
// 		browser.get('https://angularjs.org');
//
// 		element(by.model('todoList.todoText')).sendKeys('Writing tests!!');
// 		element(by.css('[value="add"]')).click();
//
// 		var todoList = element.all(by.repeater('todo in todoList.todos'));
// 		expect(todoList.count()).toEqual(3);
// 		expect(todoList.get(2).getText()).toEqual('Writing tests!!');
// 	});
// });
