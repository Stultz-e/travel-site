var $ = require('jquery');
/* var Person = require('./modules/Person.js'); old wai */
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $0 in taxes. ");
    }
}

alert("slut puck poop ninny")

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "ass");
jane.greet();
jane.payTaxes();
