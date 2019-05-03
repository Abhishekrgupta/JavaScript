// console.log(121);
// console.log("hello");
// console.log(true);
// var greet ="hello";
// console.log(greet);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2})
// console.warn("this is warnig");
// console.error("This is error");
// console.time("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
// console.timeEnd("hello");
// console.clear();


// type Conversion
/*
let val;

// number to string

val= String(5);
val = String(4+4);

// boolean to string

val = String(true);
val = String([1,2,3,4]); 
val = String(new Date());

/// toString()

val = (10).toString();
val = (true).toString();

/// Conversion to number

val = Number('10');
val = Number(true);
val= Number(false);
val= Number(null); // 0
val = Number([1,2,3,4]); //NaN
val = Number('hello'); //NaN

val = parseInt("100");
val = parseFloat("100.50");

//Output
console.log(val);
console.log(typeof val);
//console.log(val.length); work only for String
console.log(val.toFixed()); //can give decimal points to print number
*/

// Type Coversion
/*
let v1 = String(10);
let v2= 20;

let sum = v1+ v2; // 1020
sum = parseInt(v1+v2) // 1020 but as number
console.log(sum);
*/

/* Math Operation 

let v1 = 100;
let v2= 20;

let val;

// Math opertion
val = v1 + v2;
val = v1 - v2;
val = v1 * v2;
val = v1 / v2;
val = v1 % v2;

// Math Operation

val = Math.PI;
val = Math.E;
Val = Math.floor(2.4);
val = Math.ceil(2.4);
val = Math.round(2.4);
val = Math.abs(-4);
val = Math.pow(6,2);
val = Math.sqrt(64);
val = Math.min(55,56,3,5,67809,-27,3);//-27
val = Math.max(55,56,3,5,67809,-27,3);// 67809

val = Math.random();

val = Math.random() * 20 + 1 // number 1-20 with decimal point
val = Math.floor(Math.random() * 20 + 1); 

console.log(val);

*/

// String Operations 
/*
const firstName = "AbhisheK";
const lastName= "Gupta";
let val;
const str = "hello this is split";
const str1 = "MCS, BCS, MBA";
// escaping
val = 'that\'s awesome, i\'ll be there';
// length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Case Change

val=  firstName.toLowerCase();
val = firstName.toUpperCase();
val = firstName[3];

// indexOf()

val = firstName.indexOf('i');
val = firstName.lastIndexOf('i');

// charAt()

val = firstName.charAt('3');
val = firstName.charAt(firstName.length-1);

//substring()
val = firstName.substring(0,5);

//slice()
val = firstName.slice(0,5);
val = firstName.slice(-3);

//split()
val =  str.split(" ");
val = str1. split(",");

// replace()
val = str.replace('hello', 'Everyone');

// includes
val = str.includes("hello");// returns true or false

console.log(val);

*/


// Template Literals
/*
const name ="Abhishek";
const age = 23;
const city = "pune";
const job = "developer";

let html;

// Before with ES5 it would used to be done by concatinating
// in ES6 we use Template literals

function hello(){
  return "Hello World"
}
 
html = `
      <ul>
        <li>${name}</li>
        <li>${age}</li>
        <li>${city}</li>
        <li>${job}</li>
        <li>${hello()}</li>
        <li>${5+5}</li>
        <li>${age > 20 ? "Over 20" : "Below 20"}</li>  
      </ul>
`

document.body.innerHTML = html;
*/


// Array methods
/*
const num1= [23,45,6,67,899,44];
const num2 = new Array(34,56,77,33,2,33,32);
const fruits = ["Apple", "mango", "orange", "pineapple"];
const mixed = [44, "ABC", true, null, undefined, {a:1, b:2}, new Date()];

let val;

// Get array length
val = num1.length;

// check if araay
val = Array.isArray(num1);

//Get single value
val = num1[3];
val = num1[0];

// find index of value
val = num1.indexOf(6);

// insert in array
num1[2] = 100;

// Mutating array
// // Add to end 
// val = num1.push(200);
// // Add to front
// val = num1.unshift(300);

// // take out from last/end
// val = num1.pop();
// // take out from front
// val = num1.shift();

// splice
val =  num1.splice(1,4);

console.log(val);
console.log(num1);
// reverse
val = num1.reverse();

//
val = fruits.sort();
val = num1.sort();

val = num1.sort(function(x,y){

    return x-y;
});

val = num1.sort(function(x,y){

  return y-x;
});
console.log(val);
val = num1.find(under50 => under50 < 50);

// console.log(num1);
console.log(val);
*/


//Object literals
/*
const person = {
  firstName : "Abhishek",
  lastName: "Gupta",
  age: 23,
  address: {
    state: "Maharashtra",
    city:  "pune"
  },
  hobbies: ["Swimming", "reading"],
  
  getBirtYear: function(){
    return 2019- this.age;
  }
}
let val;
val = person;

// console.log(person.firstName);
// console.log(person["lastName"]);
// console.log(person.age);
// console.log(person.hobbies[1]);
// console.log(person.address.city);
// console.log(person.address["state"]);
// console.log(person.getBirtYear());

// console.log(val);

const people = [
  {name: "Amol", age: 23},
  {name: "Rohan", age: 23},
  {name: "Anjali", age: 23}  
]

for( let i in people){
  console.log(people[i].name);
}

*/

// date operations
/*
const today = new Date();

let birth = new Date("11-23-1995");
birth = new Date("11/23/1995");
birth = new Date("November 23 1995");
let val;

val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getMonth();
val = today.getTime();

birth.setMonth(10);
birth.setDate(23);
birth.setFullYear(1995);
birth.setHours(11);
birth.setMinutes(23)
birth.setSeconds(45);


console.log(birth);

*/


//Functions

/*
// let sqrt = function(val){

//   console.log(val*val);

//   (function(){
//     console.log("IIfe....ran");
    
//   })()
  
// }

// sqrt(2);


let todo = {
  add: function(){
    console.log("added todo");
    return 0;
  },
  edit: function(){
    console.log("edited todo");
    return 0;
  }
}

todo.delete = function(){
  console.log("deleted todo");
  return 0;
}

console.log(todo.add());
console.log(todo.edit());
console.log(todo.delete());

*/

// Loops
/*
const cars = ["honda", "toyota", "mercedes", "ford","volkswagan" ];

// forEach loop

// cars.forEach(function(car, index, array){
//   console.log(car);  
//   console.log(`${index} : ${car}`);
//   console.log(`${index} : ${car} : ${array}`);
// });


// Map function

// const peoples = [
//   {name: "Amol", age: 23},
//   {name: "Rohan", age: 23},
//   {name: "Anjali", age: 23}  
// ]


// let name = peoples.map(function(peoples){
//   return peoples.name;
// })

// console.log(name);

// for in loop

// const user =  {
//     name: "Amol", 
//     age: 23,
//     city: "pune"
//   };

// for(let i in peoples){
//   console.log(`${i}: ${user[i]}`);
  
// }

// const peoples = [
//     {name: "Amol", age: 23},
//     {name: "Rohan", age: 23},
//     {name: "Anjali", age: 23}  
//   ]

//   for(let i in peoples){
//     console.log(`${i}: ${peoples[i].name}: ${peoples[i].age}`);
    
//   }*/


// Window object
/*
//prompt
// let input = prompt();
// alert(input);

// confirm

// if (confirm("are you sure")){
//   console.log("yes");
// }else{
//   console.log("no");
// }


// window methods
let val;
// outer window
val =window.outerHeight;
val =window.outerWidth;

// inner window 
val =window.innerHeight;
val =window.innerWidth;

//Scroll points
val =window.scrollY;
val =window.screenX;

// window location object

val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// // redirect
// window.location.href = "http://google.com/";
// // relod
// window.location.reload();

// History Object
// window.history.go(-1);
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion
val = window.navigator.vendor;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.language;

console.log(val);
*/

