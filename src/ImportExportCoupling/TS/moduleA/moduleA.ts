// ES6 Module Import
import { functionB } from './moduleB/moduleB';

// CommonJS Module Import
import moduleC = require('./moduleB/moduleC/moduleC');

// ES6 Module
export const functionA = (): void => {
    console.log('Function A');
};

export default functionA;