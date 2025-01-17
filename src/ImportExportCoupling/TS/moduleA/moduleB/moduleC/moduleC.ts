import { functionA } from '../../moduleA';
import { functionB } from '../moduleB';

module.exports = {
    functionC: (): void => {
        console.log('Function C');
    }
};