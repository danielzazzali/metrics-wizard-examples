// ES6 Module Import
import { functionA } from '../moduleA';

// CommonJS Module Import
import moduleC = require('./moduleC/moduleC');

// ES6 Module
export const functionB = (): void => {
    console.log('Function B');
};

export default functionB;