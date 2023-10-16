/* export the class in the separate file and then import it into another file for use.  prefix the class with the word "export".  In the file that uses the other class at the top of the file use import */

/* for modulation to work adjust Json file to reflect that js files are modules (change extension to .mjs) */

/* can export one or more objects from a given module eg also promote function is exported and imported into index.mjs module. to set a default export use default in front of the item.  changes the way import statement is coded.  {} are for importing named exports only.  To import multiple items (named and default) place them in one line as done below */


import Teacher, {promote} from './teacher.mjs';
//import { promote } from './teacher.mjs';
const teacher = new Teacher('Lyxi', 'AAS');
teacher.teach();

teacher
console.log(teacher.degree);
