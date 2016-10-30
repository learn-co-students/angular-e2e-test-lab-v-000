var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
    expect(todoList.count()).toEqual(4);
    expect(todoList.get(2).getText()).toEqual('Writing tests!!');
	});
});
