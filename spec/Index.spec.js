var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('https://learn-angular-dakotalmartinez.c9users.io/angular-directives/angular-e2e-test-lab-v-000/index.html');
		
		element(by.css('button')).click();
		
		var contacts = element.all(by.repeater('contact in vm.contacts'));
		expect(contacts.count()).toEqual(4);
		expect(contacts.get(1).element(by.model('contact.name')).getAttribute('value')).toEqual('Tim');
		expect(contacts.get(1).element(by.model('contact.phone')).getAttribute('value')).toEqual('3934203242');
	});
});
