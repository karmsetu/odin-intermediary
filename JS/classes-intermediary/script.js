// Property getters and setters
// There are two kinds of object properties.

// The first kind is data properties. We already know how to work with them. All properties that we’ve been using until now were data properties.

// The second type of property is something new. It’s an accessor property. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.

let user = {
    name: "John",
    surname: "Smith",
    get fullName() {
        return `${this.name}${this.surname}`
    } ,// getter function `GETS` the value
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },// setter function `SETS` the value
  };

//   Please note that a property can be either an accessor (has get/set methods) or a data property (has a value), not both.

// Smarter getters/setters
// Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.

// For instance, if we want to forbid too short names for user, we can have a setter name and keep the value in a separate property _name

let Player = {
    get name(){
        return this._name;
    },
    set name(params){
        if(params.length < 4){
            console.error(`name too short`);
            return
        }
        this._name = params;
    } 
}

// So, the name is stored in _name property, and the access is done via getter and setter.

// Technically, external code is able to access the name directly by using user._name. But there is a widely known convention that properties starting with an underscore "_" are internal and should not be touched from outside the object.

function human(name, age) {
    this.name = name;
    this.age = age;
    // assume a situation where you have to know th ebirth year of the human class, but you only have name and age as parameters, 
    // if you add birthyear parameter, the old dataset will spoil
    // for this purpose we will use getter for birthyear, which will be derived from age parameter. 
    Object.defineProperty(this, `birthYear`, {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.age
        }
    })
  }
  
  let john = new human("John", 25);


  // class syntax
class Animal {
    constructor(name, type){
        this.name = name
        this.type = type     
    }
    intro(){
        return `${this.name} is a ${this.type}`
    }
}
let tom = new Animal(`tom`, `feline`)
console.log(tom.intro())
console.log(typeof Animal)


// making a class on demand

function makeclass(params) {
    return class {
        sayHi() {console.log(params)}
    }
}

let someClass = makeclass("Hello");
new someClass().sayHi()