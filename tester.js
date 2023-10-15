//Classes, constructor
const person8 = {
  name: "Clair",
  walk() {
    console.log("walk");
  },
};

/* when a method is duplicated runs the risk of causing problems in all statements that use the method eg - if we wish to create another person object */

/* a blueprint to create object of the same type is done using classes.  
classes use post call naming convention (every word starts with caps eg class = CoolPerson.
use a constructor to create the objects in the class (with parameters) */
class Person {
    constructor(name) {
        this.name = name;
    }
    
    walk() {
      console.log("walk");
    }
}

//when creating an object from a class need to use the new operator.
const person = new Person('Clair2');
console.log(person.name);
console.log(person.walk);
console.log(person8.name);
