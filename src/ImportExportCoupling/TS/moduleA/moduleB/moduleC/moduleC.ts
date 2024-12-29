// ES6 Module Imports
import { functionA } from '../../moduleA';
import { functionB } from '../moduleB';

// CommonJS Module
module.exports = {
    functionC: (): void => {
        console.log('Function C');
    }
};