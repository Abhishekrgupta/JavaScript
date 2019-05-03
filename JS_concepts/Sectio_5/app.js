// constructors 
/*
function Person(name, dob){
  this.name = name;
  //this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const agediff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(agediff);
    return Math.abs(ageDate.getUTCFullYear()- 1970);  
  }
}

// const ab = new Person('Abh', 23);
const ab = new Person('Abh', '11-23-1995');
console.log(ab.calculateAge());
*/

// Prototypes
/*
//Object.prototype
//Person.prototype
function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName =  lastName;
  //this.age = age;
  this.birthday = new Date(dob);
  
}

Person.prototype.calculateAge = function(){
  const agediff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(agediff);
  return Math.abs(ageDate.getUTCFullYear()- 1970);  
}

Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.firstNameChanged = function(newName){
ab.firstName = newName;
}
// const ab = new Person('Abh', 23);
const ab = new Person('Abhishek', 'Gupta' , '11-23-1995');
console.log(ab);

console.log(ab.calculateAge());
console.log(ab.getFullName());
ab.firstNameChanged('Aniket');
console.log(ab.getFullName());

console.log(ab.hasOwnProperty('getFullName'));

console.log(ab.hasOwnProperty('firstName'));
*/


// Protype Inheritence
/*
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName =  lastName;
}

Person.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName}`;
}

const ab = new Person('Abhishek', 'Gupta' );
console.log(ab.greeting());

function Customer(firstName, lastName, contact, member){
  //call to Person constructor
  Person.call(this, firstName, lastName);
  this.contact = contact;
  this.member =  member;
}
// Inherit person prototype methods
Customer.prototype = Object.create(Person.prototype);

Customer.prototype.constructor = Customer;

const cust = new Customer('BAC', 'BDS', '21212121212','Standard' );

console.log(cust);


Customer.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName}. Welcome to Company`;
}

console.log(cust.greeting());


*/

//Object.create() to craete objects
/*
const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const ab = Object.create(personPrototypes);
ab.firstName = 'abc';
ab.lastName = 'ashahs';
ab.age = 23;

ab.getsMarried('gvsagha');

console.log(ab.greeting());

const de = Object.create(personPrototypes, {
  firstName: {value: 'asasas'},
  lastName: {value: 'asasa'},
  age: {value: 32}
});

console.log(de);

console.log(de.greeting());

*/

// ES6 classes and Inheritence

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    //this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  // calculateAge() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

// const mary = new Person('Mary', 'Williams', '11-13-1980');

// mary.getsMarried('Thompson');

// console.log(mary);

// console.log(Person.addNumbers(1,2));

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

console.log(john.greeting());

console.log(Customer.getMembershipCost());
