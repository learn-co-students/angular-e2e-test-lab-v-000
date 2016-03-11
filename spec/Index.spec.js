var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080'); //get the webpage

		element(by.css('.button')).click(); //click on the css element with the class "button"

		var contacts = element.all(by.repeater('contact in vm.contacts')); //set variable equal to all repeaters "contact in vm.contacts"
		expect(contacts.count()).toEqual(4); //expect array of repeaters to have 4 elements

		expect(contacts.get(1).element(by.model('contact.name')).getAttribute('value')).toBe('Tim'); //expect second contact's name to be "Tim"
		expect(contacts.get(1).element(by.model('contact.phone')).getAttribute('value')).toBe('3934203242'); //expect second contact's phone to be 3934203242
	});
});
