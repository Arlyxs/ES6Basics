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
