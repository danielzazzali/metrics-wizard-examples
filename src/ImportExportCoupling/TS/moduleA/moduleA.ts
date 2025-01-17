import { functionB } from './moduleB/moduleB';

import * as moduleC from './moduleB/moduleC/moduleC';

export const functionA = (): void => {
    console.log('Function A');
};