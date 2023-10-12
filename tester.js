//ARROW FUNTIONS

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
