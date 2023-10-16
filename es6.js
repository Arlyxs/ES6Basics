// use let instead of var.  var is available in the function block
//let is available only in the block in which they are defined
//use const to define a variable whose value cannot be changed dynamically, so ialways use const to define variablels unless you plan to dynamically change the value of the variable
// function in ES6
function sayLoopy() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //let available only here

  //var would also be available here, let is not
  //console.log(i);
}
//call function sayLoopy
sayLoopy();

//const is technically not a variable as it cannot be redefined
const x = 1;
//const x = 3; would return an error
console.log(x);
//only the first declared value of x is readable

//Objects are collections of key value pairs
//name is the key: 'Lyxi' is the value
//a funttion inside a an object (walk), is a method in the person object
const person = {
  name: 'Lyxi',
  walk: function () {},
};

//in es6 the cleaner way ot define a method in the object is to do as follows
const person2 = {
  firstName: 'Carrol',
  walk() {},
  talk() {},
};

//to access the function can use the dot notation
console.log(person.name);
person.walk();

console.log(person2.firstName);

//The this keyword
//this always returns a reference to the current object
const person3 = {
  name: 'Mosh',
  walk() {
    console.log(this);
  },
};

//this will search for the window object in strict mode
person3.walk();
//const walk = person3.walk;
//walk();
//returns undefined as is searching for global object

//using bind so this always returns a reference to the person object

const walk = person3.walk.bind(person3);
walk();
console.log(walk());

//ARROW FUNCTIONS
//the old way
const squares4 = function (number) {
  return number * number;
};
console.log(squares4(4));

//the es6 new way arrow function;
//if only one parameter can exclude the parenthesis
//const squares4 = number => {}
//if zero parameters need to add parenthesis to the function
//const squares4 = () => {}
//if the body of the function contains a single line and returns a valuecan make the function even simplier
//const squares5 = number => number * number

const squares5 = (number) => number * number;
console.log(squares5(6));

//Arrow function simplify array search; filter functionn iterates over parameters
const jobs = [
  {id: 1, isActive: true},
  {id: 2, isActive: false},
  {id: 3, isActive: true},
];

const activeJobs = jobs.filter(function(job) {return job.isActive;});
//the es6 new way
const activeJobs1 = jobs.filter(job => job.isActive);
console.log(activeJobs);
console.log(activeJobs1);

//set timeout executes the referenced function with a delay in miliseconds.  1000ms = 1 second
//by defining self as this in the talk function it binds the this keyword to the talk function as opposed to the global window.

const person6 = {
  talk() {
    let self = this;
    setTimeout(() => {
        console.log('this', this);
    }, 1000);
 }
};
    
person6.talk();

/* Arrays Map - used often in React/Map method of array is used to render a list of items from the array  */

/* old function expression
const items = colors.map(color => '<li>' + color + '<li>');es6 uses temperate literals to get rid of the concatinations by defining a template for output
const items = colors.map(color => '<li' + color + '<li>'); 
${} is an argument placeholder.  what is placed in the curly braces willbe rendered dynamically at runtime*/
const colors = ['red', 'green', 'blue' ];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

//Object Destructuring
const address = {
  street: '',
  city: '',
  country: ''
};

//sets the property to the address object, {} = destructuring syntax
const { street, city, country } = address;

//can also set an alias and there is no need to call all the properties from the address object
const {street: st} = address;

//spread operator (uses ellipsis [...].
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined1 = [...first, ...second];

console.log (combined);
console.log(combined1);
//with the spread operator can add elements tot eh array
const combination = [...first, 'a', ...second, 'b'];
console.log(combination);

//the spread operator can be used to easily clone an array
const clone = [...first];
const clone2 = [...combined];
console.log('first', first);
console.log('clone', clone);
console.log('clone2', clone2);

//the spread operator can also be used to clone and combine objects (note use of {} instead of array []
const firstOb = {name: 'Lyxi'};
const secondOb = {job: 'instructor'};

const combo = {...firstOb, ...secondOb, location: 'Trinidad'};
console.log('combo', combo);

//Classes constructor
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
const persons = new Person('Clair2');
console.log(persons.name);
console.log(persons.walk);
console.log(person8.name);

//INHERITANCE in classes
class Person1 {
  constructor(name) {
      this.name = name;
  }
  
  walk() {
    console.log("walk");
  }
}

/* The new Teacher class inherits the methods defined in the Person1 class using the extend keyword.  If a constructor is used in Teacher class then need to use the "super" keyword to activate the parameter from the parent class. */
class Teacher extends Person1 {
  constructor(name, degree) {
      super(name);
      this.degree = degree;
  }
  
  teach() {
      console.log('teach');
  }
}
//pass arguments to teacher, "teacher." has all parameters of Person and Teacher classes
const teacher = new Teacher('Lyxi', 'AAS');

/* for modulation to work adjust Json file to reflect that js files are modules (change extension to .mjs) */

