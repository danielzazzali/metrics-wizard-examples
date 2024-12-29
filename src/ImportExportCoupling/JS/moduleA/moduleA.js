// ES6 Module Import
import { functionB } from './moduleB/moduleB.js';

// CommonJS Module Import
const moduleC = require('./moduleB/moduleC/moduleC.js');

// ES6 Module
export const functionA = () => {
    console.log('Function A');
};

export default functionA;