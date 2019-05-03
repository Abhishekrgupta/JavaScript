// Book constructor
 function Book(title, author, isbn){
   this.title = title;
   this.author = author;
   this.isbn = isbn;
 }

// UIconstructor
function UI(){}

UI.prototype.addBookToList= function(book){
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href= "#" class = "delete">x</a></td>
  `;
  list.appendChild(row);
}

UI.prototype.removeItem = function(target){

  if(target.className == 'delete'){
    target.parentElement.parentElement.remove();
  }
}

UI.prototype.showAlert = function(msg,classname){

  const div = document.createElement('div');
  div.className = `alert ${classname}`;
  div.appendChild(document.createTextNode(msg));

  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');

  container.insertBefore(div, form);

  setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 3000);
  
}

UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}



// geting the value
document.getElementById('book-form').addEventListener('submit', function(e){

  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

const book = new Book(title, author, isbn);

const ui= new UI();

if(title === '' || author === '' || isbn ===''){
ui.showAlert('Please fill all fields', 'error');
}else{
ui.addBookToList(book);
ui.clearFields();
ui.showAlert('Book Added to List', 'success');
}
e.preventDefault();
});


document.getElementById('book-list').addEventListener('click', function(e){

  ui = new UI();
  ui.removeItem(e.target);
  ui.showAlert('Deleted Successfully','success');
  e.preventDefault();
});

  
  