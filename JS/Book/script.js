const display = document.querySelector(`.show-case`)


const formauthor = document.querySelector(`.author`) 
const formtitle = document.querySelector(`.title`) 
const formpages = document.querySelector(`.pages`) 
const formwetherread = document.querySelectorAll(`.wether-read`) 
const myLibrary = [];

function Book(title, author, pages, isRead) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages= pages
  this.isRead = isRead  
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book)
}

function clear(params) {
  var child = params.lastElementChild; 
  while (child) {
    params.removeChild(child);
    child = params.lastElementChild;
  }
}

function showcase() {
  clear(display)
  for (let index = 0; index < myLibrary.length; index++) {
    let bookCard = document.createElement(`div`)
    bookCard.classList.add(`book`)
    bookCard.classList.add(`book-${index+1}`)
    let displaytitle = myLibrary[index].title
    const displaytitleDiv = document.createElement("div")
    displaytitleDiv.innerText = displaytitle
    bookCard.append(displaytitleDiv)
    let displayauthor = myLibrary[index].author
    const displayauthorDiv = document.createElement("div")
    displayauthorDiv.innerText = displayauthor
    bookCard.append(displayauthorDiv)
    let displaypages = myLibrary[index].pages
    const displaypagesDiv = document.createElement("div")
    displaypagesDiv.innerText = displaypages
    bookCard.append(displaypagesDiv)
    let displayisRead = myLibrary[index].isRead
    const displayisReadDiv = document.createElement("div")
    displayisReadDiv.innerText = displayisRead
    bookCard.append(displayisReadDiv)
    let removeButton = document.createElement(`button`)
    removeButton.innerText = `remove`
    removeButton.classList.add(`remove-button`)
    removeButton.classList.add(`remove-button-${index}`)
    // removeButton.onclick = console.log(`boi`)
    bookCard.append(removeButton)
    display.appendChild(bookCard)
    console.log(typeof(displayauthorDiv))
  }
  const removeCardButton =  document.querySelectorAll(`.remove-button`)
  removeCardButton.forEach(box => {
    box.addEventListener(`click`, function boi(event){
      event.preventDefault()
      boxParent = box.parentElement
      console.log()
      // display.remove()
      boxParent.remove()

    })
  }
  
  
  )
  console.log(removeCardButton)
}


// .addEventListener(`click`, function () {
//   console.log(`hahaha`)
// })

// pa = new Book(`lol`, `boi`, 4000, true)
// LOTR = new Book(`lord of the rings`, `boi`, 3000, true)
// addBookToLibrary(LOTR)
// addBookToLibrary(pa)
// showcase()

function openDialog() {
  document.querySelector(`.dialog`).classList.remove(`close`)
}

const submitButton = document.querySelector(`.submit`)
console.log(submitButton)
const author = document.getElementById(`author`)
console.log(author)
const title = document.getElementById(`title`)
console.log(title)
const pages = document.getElementById(`pages`)
console.log(pages)
const isreadtrue = document.getElementById(`is-read-true`)
const isreadfalse = document.getElementById(`is-read-false`)

boi = []

submitButton.addEventListener("click", function(event){
  event.preventDefault()
  console.log(`hi`)
  console.log(event)
  const authorText =  author.value
  boi.push(authorText)
  const titleText = title.value
  boi.push(titleText)
  const pagesText= pages.value
  boi.push(pagesText)
  // const = .value  
  let some = new Book(titleText, authorText, pagesText)
  addBookToLibrary(some)
  showcase()
});


console.log(boi)