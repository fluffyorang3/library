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

function displayOnShelves() {
  myLibrary.forEach() {
    
  }
}