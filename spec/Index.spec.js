var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
  	browser.get('http://localhost:8080');

    element(by.css('.button')).click();

    var contact = element.all(by.repeater('contact in vm.contacts'));
    expect(contact.count()).toEqual(4);

    element(by.model('contact.name')).sendKeys('Tim');
    element(by.model('contact.phone')).sendKeys('3934203242');

	});
});
