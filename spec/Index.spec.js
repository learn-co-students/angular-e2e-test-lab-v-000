var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

    element(by.model('vm.newName')).sendKeys('Liz');
    element(by.model('vm.newPhone')).sendKeys('8675309');
    element(by.css('.button')).click();
 
    var contacts = element.all(by.repeater('contact in vm.contacts'));
        expect(contacts.count()).toEqual(4);
        expect(contacts.get(1).getInnerHtml()).toEqual('<h4 class="ng-binding">Name: Tim</h4><h6 class="ng-binding">Phone: 3934203242</h6>');
	});
});
