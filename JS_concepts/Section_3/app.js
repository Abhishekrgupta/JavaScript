// // EVENT BUBBLING

// // document.querySelector('.card-title').addEventListener('click', function(){
// //   console.log('card title');
// // });

// // document.querySelector('.card-content').addEventListener('click', function(){
// //   console.log('card content');
// // });

// // document.querySelector('.card').addEventListener('click', function(){
// //   console.log('card');
// // });

// // document.querySelector('.col').addEventListener('click', function(){
// //   console.log('col');
// // });

// // EVENT DELGATION

// // const delItem = document.querySelector('.delete-item');

// // delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//   // if(e.target.parentElement.className === 'delete-item secondary-content'){
//   //   console.log('delete item');
//   // }

//   if(e.target.parentElement.classList.contains('delete-item')){
//     console.log('delete item');
//     e.target.parentElement.parentElement.remove();
//   }
// }



// // Setting local storage
// localStorage.setItem('name', 'aniket');

// // Setting session storage
// sessionStorage.setItem('name', 'abc');

// localStorage.removeItem('name');

//getting local storag
// localStorage.clear();

// let name = localStorage.getItem('name');
// console.log(name);


document.querySelector('form').addEventListener('submit', (e) => {
  let task = document.getElementById('task').value;
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task Saved');
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(task => {
  console.log(task);
});






