// ES6 Module Import
import { functionA } from '../moduleA.js';

// CommonJS Module Import
const moduleC = require('./moduleC/moduleC.js');

// ES6 Module
export const functionB = () => {
    console.log('Function B');
};

export default functionB;