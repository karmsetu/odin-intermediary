console.log(`all set!`)

const myObject = {
    name: `some`,
    type: `none`,
    "discloseType" : function () {
        console.log(type)
    }
}

//  Object constructors
function Player(name,team) {
    this.name = name
    this.team = team 
    this.sayHello = function () {
        console.log(`${name} says hi!`)
        return `${name} says hi!`
    }
}

function Book(title, author, pages, isRead=false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = function () {
        return `${title} by ${author} is ${pages}pages long, ${isRead}`
    }
}  

// the prototype
Book.prototype.howLong = function () {
    if (this.pages > 200) {
        return `long read`
    } else return `short read`
}

// all set!
// panchtantra = new Book(`panchtantra`, `Mp`,20, false) 
// Book {title: 'panchtantra', author: 'Mp', pages: 20, isRead: false, info: ƒ}
// panchtantra.info()
// 'panchtantra by Mp is 20pages long, false'
// panchtantra.getPrototypeOf
// undefined
// panchtantra.prototype
// undefined
// Object.getPrototypeOf(panchtantra)
// {constructor: ƒ}constructor: ƒ Book(title, author, pages, isRead=false)arguments: nullcaller: nulllength: 3name: "Book"prototype: {constructor: ƒ}[[FunctionLocation]]: script.js:21[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2][[Prototype]]: Object
// Book.prototype
// {constructor: ƒ}
// Object.getPrototypeOf(Book.prototype)
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// panchtantra.valueOf()
// Book {title: 'panchtantra', author: 'Mp', pages: 20, isRead: false, info: ƒ}author: "Mp"info: ƒ ()isRead: falsepages: 20title: "panchtantra"[[Prototype]]: Object