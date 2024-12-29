// ES6 Module Imports
import moduleA from './moduleA/moduleA';
import moduleB from './moduleA/moduleB/moduleB';

// CommonJS Module Import
import moduleC = require('./moduleA/moduleB/moduleC/moduleC');

console.log(moduleA, moduleB, moduleC);