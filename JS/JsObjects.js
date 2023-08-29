function Player(name, marker) {
    this.name = name
    this.marker = marker
    this.sayName = function() {
      console.log(name)
    }
  }

  function Book(title, author, pages, read=false){
    let strRead;
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read    
    this.info = function(){
        if (read == false) {
            strRead = `Not read yet`
        } else {strRead = `Read`}
        return (`${title} by ${author}, ${pages}, ${strRead}`)
    }
  }
//   "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
// function Person(name) {
//     this.name = name
//   }
  
//   Person.prototype.sayName = function() {
//     console.log(`Hello, I'm ${this.name}!`)
//   }
  
//   function Player(name, marker) {
//     this.name = name
//     this.marker = marker
//   }
  
//   Player.prototype.getMarker = function() {
//     console.log(`My marker is '${this.marker}'`)
//   }
  
//   // Object.getPrototypeOf(Player.prototype) should
//   // return the value of "Person.prototype" instead
//   // of "Object.prototype"
//   Object.getPrototypeOf(Player.prototype) // returns Object.prototype
  
//   // Now make `Player` objects inherit from `Person`
//   Object.setPrototypeOf(Player.prototype, Person.prototype)
//   Object.getPrototypeOf(Player.prototype) // returns Person.prototype
  
//   const player1 = new Player('steve', 'X')
//   const player2 = new Player('also steve', 'O')
  
//   player1.sayName() // Hello, I'm steve!
//   player2.sayName() // Hello, I'm also steve!
  
//   player1.getMarker() // My marker is 'X'
//   player2.getMarker() // My marker is 'O'
