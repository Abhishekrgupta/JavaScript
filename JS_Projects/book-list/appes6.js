class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{

  addBookToList(book){
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

  removeItem(target){

    if(target.className == 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  showAlert(msg,classname){

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
  
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

}


// Local Storage class 
class Store{
  static getBook(){
    let books;
    if(localStorage.getItem('books') === null){
      books =[];
    }else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    
    return books;
  }

  static displayBook(){
    const books = Store.getBook();
    books.forEach( book => {
      const ui = new UI();
      ui.addBookToList(book);
    })

  }

  static addBook(book){
    
    const books = Store.getBook();  
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));

  }

  static removeBook(isbn){
    const books = Store.getBook();  
    books.forEach( (book, index) => {
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

//DOM on loaded 
document.addEventListener('DOMContentLoaded', Store.displayBook);

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
Store.addBook(book);
ui.clearFields();
ui.showAlert('Book Added to List', 'success');
}
e.preventDefault();
});


document.getElementById('book-list').addEventListener('click', function(e){

  ui = new UI();
  ui.removeItem(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  ui.showAlert('Deleted Successfully','success');
  e.preventDefault();
});
