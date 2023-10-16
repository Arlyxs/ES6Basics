/* export the class in the separate file and then import it into another file for use.  prefix the class with the word "export".  In the file that uses the other class at the top of the file use import */

/* for modulation to work adjust Json file to reflect that js files are modules (change extension to .mjs) */

export class Person1 {
  constructor(name) {
      this.name = name;
  }
  
  walk() {
    console.log("walk");
  }
}
const person = new Person1('Mark');
person
console.log(person.name);