/* export the class in the separate file and then import it into another file for use.  prefix the class with the word "export".  In the file that uses the other class at the top of the file use import */

/* for modulation to work adjust Json file to reflect that js files are modules (change extension to .mjs) */

import { Person1 } from './person.mjs';

export class Teacher extends Person1 {
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

