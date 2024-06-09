const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function() {
    if(read == "read") {
      return "read";
    } else if(read == "not read") {
      return "not read yet";
    } else {
      return "info not available";
    }
  }
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${this.read()}`
  }
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
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

  let author = document.getElementById('author').value;
  let title = document.getElementById('title').value;
  let pages = document.getElementById('pages').value;
  let read = document.querySelector('input[name="read-status"]:checked').value;

  myLibrary.push(new Book(author, title, pages, read));

  console.log(myLibrary)
})


dialogClose.addEventListener("click", () => {
  dialog.close();
})

newBookButton.addEventListener("click", () => {
  dialog.showModal();
});

bookSubmit.addEventListener("click", () => {
  dialog.close();
})















