let form = document.querySelector('#task-form');
let taskList = document.querySelector('.collection');
let clearBtn = document.querySelector('.clear-tasks');
let filter = document.querySelector('#filter');
let taskInput = document.querySelector('#task');


loadEventListeners();

function loadEventListeners(){

  // To reload the DOM
  document.addEventListener('DOMContentLoaded', getTasksFromLS);
  //Add a task to list
  form.addEventListener('submit', addTasks);
  // Remove from list
  taskList.addEventListener('click', removeTask);
  // Remove all tasks
  clearBtn.addEventListener('click', clearTask);
  // Filter the List Items
  filter.addEventListener('keyup', filterList );
}

// Get tasks From LS
function getTasksFromLS(e){
  let tasks; 
  if(localStorage.getItem('tasks') === ''){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach((task) => {
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(task));
  let link = document.createElement('a');
  link.classList = 'delete-item secondary-content';
  link.innerHTML = '<i class = "fa fa-remove"><i>';
  li.appendChild(link);
  taskList.appendChild(li);
});
}

// To add task to list
function addTasks(e){
  if(taskInput.value === ''){
    alert('Add a task');    
  }else{
  const li = document.createElement('li')
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  let link = document.createElement('a');
  link.classList = 'delete-item secondary-content';
  link.innerHTML = '<i class = "fa fa-remove"><i>';

  li.appendChild(link);

  taskList.appendChild(li);
  // Store task to lacal storage
  storeTaskInLocalStorage(taskInput.value);

  taskInput.value = ''; 
  }
  e.preventDefault();
}

function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];
  } else { 
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}



// Remove Tasks
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure')){    e.target.parentElement.parentElement.remove();
    removeItemFromLS(e.target.parentElement.parentElement);
  }
}
}

function removeItemFromLS(taskItem){
  //console.log(taskItem);
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];
  } else { 
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach((task,index) => {
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTask(e){
  //one way 
  // taskList.innerHTML = '';

  //another way
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
  //Clear all tasks from LS
  clearTasksFromLS();
}


//Clear all tasks Form LS
function clearTasksFromLS(){
  localStorage.clear();
}


function filterList(e){
  let text = e.target.value.toLowerCase();
  //console.log(text);
  document.querySelectorAll('.collection-item').forEach((task) => {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text)!= -1){
        task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
    
  });
  
}