class Profile{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    sayHello(){
        return this.name    
    }

    get name(){
        return this._name;
    }

    set name(value){
        if (value.length < 4){
            console.log(`Name is too short`);
            return;
        }
        this._name = value;
    }

    [`say`+`Hi`](){
        console.log(`${this.name}Age`)
    }
    [`${this.name}Age`](){
        console.log(this.age)
    }
}
// alert(Object.getOwnPropertyNames(Profile.prototype));

class Animal{
    constructor(name, speed=0){
        this.name = name
        this.speed = speed
    }
    run(){
        // this.speed = speed;
        console.log(`${this.name} runs withe speed of ${this.speed}`);
    }
    stop(){
        this.speed = 0;
        console.log(`${this.name} stands still`)
        console.log(`Super/root class`)
    }
}

class Human extends Animal {
    hide(){
        console.log(`${this.name} hides !`)
    }
    stop(){
        console.log(`Human stands still`)

    }
    parentStop(){
        super.stop();  // Calls parent function
    }
}


class Mutant extends Animal {
    constructor(name, speed, type, bodyPart) {
        // super(...args); // mutating the inherited attributes
        // this.name = name
        // this.speed = speed
        // Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        //     at new Mutant (script.js:65:9)
        //     at <anonymous>:1:9
        // Mutant @ script.js:65
        // (anonymous) @ VM1010:1
        super(name, speed)
        this.type= type
        this.bodyPart = bodyPart        
    }
}

// a = new Animal(`bear`)
// Animal {name: 'bear', speed: 0}
// a.speed = 40
// 40
// a
// Animal {name: 'bear', speed: 40}
// a.run()
// script.js:39 bear runs withe speed of 40
// undefined
// a.stop()
// script.js:43 bear stands still
// undefined
// boi = new Human(`Shourya`)
// Human {name: 'Shourya', speed: 0}
// boi.hide()
// script.js:49 Shourya hides !
// undefined