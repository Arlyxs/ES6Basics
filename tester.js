//Object Destructuring
const address = {
    street: '',
    city: '',
    country: ''
};

//sets the property to the address object, {} = destructuring syntax
const { street, city, country } = address;

//can also set an alias and there isno need to call all the properties from the address object
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


