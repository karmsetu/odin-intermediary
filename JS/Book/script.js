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
  while (myLibrary.length() > 0) {
    console.log(myLibrary[whileIndex])
    whileIndex ++ 
  }
}