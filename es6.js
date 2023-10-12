// use let instead of var.  var is available in the function block
//let is available only in the block in which they are defined
//use const to define a variable whose value cannot be changed dynamically, so ialways use const to define variablels unless you plan to dynamically change the value of the variable
// function in ES6
function sayLoopy() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  } //let available only here

  //var would also be available here, let is not
  //console.log(i);
}
//call function sayLoopy
sayLoopy();

//const is technically not a variable as it cannot be redefined
const x = 1;
//const x = 3;
console.log(x);
//only the first declared value of x is read

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

//the this keyword
