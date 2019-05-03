//document.getElementById()
/*
console.log(document.getElementById("task-title"));

//getting things from elements
console.log(document.getElementById("task-title").id);
console.log(document.getElementById("task-title").className);

//setting styles

console.log(document.getElementById("task-title").style.background="#333");
console.log(document.getElementById("task-title").style.color="#fff");
console.log(document.getElementById("task-title").style.padding="10px");
//console.log(document.getElementById("task-title").style.display="none");

// changing contents
console.log(document.getElementById("task-title").textContent="Task List");
console.log(document.getElementById("task-title").innerHTML='<span style="color:red">Taskks</span>');
console.log(document.getElementById("task-title").innerText="My tasks");

//We can also write
const taskTitle = document.getElementById("task-title")

taskTitle.style.background="#333";
taskTitle.style.color="#fff";
taskTitle.style.padding="10px";
//taskTitle.style.display="none";

*/

//document.querySelector()
/*
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color='red';
document.querySelector('ul li').style.color='blue';

document.querySelector('li:last-child').style.color='red';
document.querySelector('li:nth-child(3)').style.color='cyan';
document.querySelector('li:nth-child(4)').textContent='Hello 4th';
document.querySelector('li:nth-child(odd)').style.background='#ccc';
document.querySelector('li:nth-child(even)').style.background='#f4f4f4';

*/

// document.getElementsByClassName()

// let items= document.getElementsByClassName('collection-item');
// console.log(items);
// items[0].style.color='red';
// items[3].textContent="hello";

// console.log(document.querySelector('ul').getElementsByClassName('collection-item'));

// let lis= document.getElementsByTagName('li');
// console.log(lis);
// lis[0].style.color='red';
// lis[3].textContent="hello li";

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach((li, index) => {
//   console.log(li.classname);
//   li.textContent = `lis: ${index} `
  
// });

// document.querySelectorAll()

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(item => {
//   item.textContent = "hello qSAll";
// });


// const liOdd =document.querySelectorAll('li:nth-child(odd)');
// const liEven =document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach( li => {
//   li.style.background = "#ccc";
// });

// for(let i=0; i< liEven.length; i++){
//   liEven[i].style.background= "#f4f4f4";
// }


// let val; 

// let list = document.querySelectorAll('ul.collection');
// let listItem = document.querySelectorAll('li.collection-item:first-child');

// val = list;
// val = listItem;

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeType;
// val = list.childNodes[3].nodeName;

// // 1- Element
// // 2- attribute
// // 3- Text node
// // 8- Comment
// // 9- Document itself
// // 10- Doctype

// // get children Elelment node
// val = list.children;
// val = list.children[1];
// val = list.children[1].textContent = "Hello";

// // Chidren of children

// list.children[3].children[0].id = "test-link"
// val = children[3].children[0]

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;


// val = listItem.parentNode;
// val = listItem.parentElementNode;
// val = listItem.parentElementNode.parentElementNode;

// val = listItem.nextSibling;
// val = listItem.nextElementsibling;
// val = listItem.nextElementsibling.nextElementsibling.nextElementsibling;

// val = listItem.previousSibling;
// val = listItem.previousElementsibling;
// console.log(val);



// Inserting Element using jS
/*
let li  = document.createElement('li');

li.className = 'collection-item';

li.id = "new-li";

li.setAttribute('title', 'new-element');
li.appendChild(document.createTextNode("hello li"));

let link  = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = ' <i class="fa fa-remove"></i>'
li.appendChild(link);
document.querySelector('ul.collection').appendChild(li);
console.log(li);

*/


// replacing Element using jS
/*
let newHead = document.createElement('h2');
newHead.id = 'task-title';

newHead.appendChild(document.createTextNode('Task List'));

let oldHead = document.getElementById('task-title');

let actionCard = document.querySelector('.card-action');

actionCard.replaceChild(newHead, oldHead)

*/

//Removing element

// let lis = document.querySelectorAll('li');
// let list = document.querySelectorAll('ul');

// lis[0].remove();

// remove using child
// list.removeChild(lis[2]);

// Classes and atribute

let firstLi = document.querySelector('li:first-child');
let link = firstLi.children[0];
let val; 

val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

// attribute
val = link.getAttribute('href');
val = link.setAttribute('href','http://google.com/');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
val = link;
console.log(val);

