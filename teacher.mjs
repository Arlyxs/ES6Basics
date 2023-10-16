/* export the class in the separate file and then import it into another file for use.  prefix the class with the word "export".  In the file that uses the other class at the top of the file use import */

/* for modulation to work adjust Json file to reflect that js files are modules (change extension to .mjs) */

/* can export one or more objects from a given module eg also function is exported and imported into index.mjs module.  to set a default export use default in front of the item.  changes the way import statement is coded */

import { Person1 } from './person.mjs';

export function promote() {};
export default class Teacher extends Person1 {
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
  teacher
  console.log(teacher.name);

