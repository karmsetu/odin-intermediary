const Person = (name, age) => {
    const intro = () => console.log(`${name} is ${age} years old.`); // factory literals
    const sayHello = () => {return `hello`}
    return {name, age, intro, sayHello} // Object shorthand
}

// second approach- old constructor pattern

const Book = function (title, author, pages, isRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.info = () => {return `${title} is written by ${author},is ${pages}pages, ${isRead}`} 
}

const counterCreator = () => {
    let count = 0;
    return () => {
      console.log(count);
      count++;
    };
  };
  
const Mutant = (name, age, type, bodyPart) => {
    const {sayHello} = Person(name, age)
    const info = () => {return `${name}is ${age}years old, is a type of ${type} and has enhanced ${bodyPart}`}
    return {name, age, type, bodyPart, sayHello, info}
}


// Module
const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();