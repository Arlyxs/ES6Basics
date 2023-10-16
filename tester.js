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

