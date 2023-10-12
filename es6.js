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
