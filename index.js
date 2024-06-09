const myLibrary = [];

let booksDOM = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${this.read()}`
  }
}


/*function displayOnShelves() {
  myLibrary.forEach() {

  }
}*/

const book = document.querySelector(".book")

const shelf = document.querySelector(".shelf")

const newBookButton = document.querySelector(".add-book")

const dialog = document.querySelector("dialog");

const dialogClose = document.querySelector(".close-form")

const bookForm = document.getElementById("book-form");

const bookSubmit = document.querySelector(".add-book-dialog")

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.querySelector('input[name="read-status"]:checked').value;


  myLibrary.push(new Book(title, author, pages, read));


  bookForm.reset();
  dialog.close();

  addBookToLibrary();
})


dialogClose.addEventListener("click", () => {
  dialog.close();
})

newBookButton.addEventListener("click", () => {
  dialog.showModal();
});

function addBookToLibrary() {
  shelf.innerHTML = ""
  booksDOM = [];
  myLibrary.forEach((book) => {
    let newBook = 
    ` <div class="book" id="${book.title}">
        <p class="author">${book.author}</p>
        <button class="close-book" id=close${book}>X</button>
        <p class="title">${book.title}</p>
        <p class="pages">Nr. of Pages ${book.pages}</p>
        <div class="read-not-read">
          ${book.read}
        </div>
      </div>`
      shelf.insertAdjacentHTML('beforeend',newBook);
  })
}















