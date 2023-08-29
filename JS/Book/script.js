const myLibrary = [];

function Book(title, author, pages, read=false) {
  // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  let newBook = new Book(title, author, pages, read);
  myLibrary.concat = newBook;
}
