var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
    element(by.css('.button')).click();

    var secondElement = element.all(by.repeater('contact in vm.contacts')).get(1);
    expect(secondElement.element(by.model('contact.name')).getAttribute('value')).toEqual('Tim');
    expect(secondElement.element(by.model('contact.phone')).getAttribute('value')).toEqual('3934203242');
    expect(element.all(by.repeater('contact in vm.contacts')).count()).toEqual(4);
	});
});
