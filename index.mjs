/* export the class in the separate file and then import it into another file for use.  prefix the class with the word "export".  In the file that uses the other class at the top of the file use import */

/* for modulation to work adjust Json file to reflect that js files are modules (change extension to .mjs) */

import { Teacher } from './teacher.mjs';

const teacher = new Teacher('Lyxi', 'AAS');
teacher.teach();

teacher
console.log(teacher.degree);
