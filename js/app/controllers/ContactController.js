function ContactController() {
    this.contacts = [{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    this.addContact = function (newName, newPhone) {
        this.contacts.push({
            name: newName,
            phone: newPhone
        });
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);