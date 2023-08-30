const displayDiv = document.querySelector(`.show-case`)
console.log(displayDiv)
const myLibrary = [];

class Book{
  constructor(title, author, pages, read=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// function Book() {
//   // the constructor...
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

function addBookToLibrary(obj) {
  // do stuff here
  myLibrary.push(obj)

}

function showcase() {
  let whileIndex = 0;
  displayDivArray = []
  while (myLibrary.length > whileIndex) {
    whileIndex ++ 
  }
}

a = new Book(`lol1`,`boi`, 123, false)
b = new Book(`lol2`,`boi`, 123, true)
c = new Book(`lol3`,`boi`, 123, false)

addBookToLibrary(a)
addBookToLibrary(b)
addBookToLibrary(c)


// Data Structures

class Book {
  constructor(
    title = 'Unknown',
    author = 'Unknown',
    pages = '0',
    isRead = false
  ) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
}

class Library {
  constructor() {
    this.books = []
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook)
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title)
  }

  getBook(title) {
    return this.books.find((book) => book.title === title)
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title)
  }
}
