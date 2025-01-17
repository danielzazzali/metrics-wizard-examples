// ES6 Module Imports
import moduleA from './moduleA/moduleA.js';
import moduleB from './moduleA/moduleB/moduleB.js';

// CommonJS Module Import
const moduleC = require('./moduleA/moduleB/moduleC/moduleC.js');

console.log(moduleA, moduleB, moduleC);