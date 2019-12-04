var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

function Person() {
  this.firstname = 'Default';
  this.lastname = 'Default';
};

Person.prototype.quality = 'happy';

console.log(Person);
let bill = new Person();
console.log(bill.quality);
console.log(bill.__proto__);
