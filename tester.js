//MODULES Egmont script 6 ES6
/* instead of writing all the code in one file splitting the code into different files makes it easier to read the code.  The split code is called modules.

Once modulated the files have to be made "public" so that they become visible to other separate files */

/* export the class in the separate file and then import it into another file for use.  prefix the class with the word "export".  In hte file that uses the other class at the top of the file use import */
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
teacher.

