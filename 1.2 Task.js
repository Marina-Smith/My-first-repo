// Class
class Dog{
    constructor(name, age){
    this.name = name;
    this.age = age;
    }
    bark() {
        console.log("Class dog i barking!");
    }
    birth() {
        let today = new Date();
        return today.getFullYear() - this.age;
    }
}

// Object Constructor
function objDog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log("Obj dog i barking!");
    }
    this.birth = function(){
        let today = new Date();
        return today.getFullYear() - this.age;
    }
}

// Implementation:
const classDog = new Dog("rex", 5);
classDog.bark();
console.log("classDog birth year: " + classDog.birth());

const myDog = new objDog("Spot", 3);
myDog.bark();
console.log("myDog birth year: " + myDog.birth());


/*
const dog = {
    name: "Rex",
    age: 5,
    bark: function(){
        console.log("Bark bark!")
    },
};
*/