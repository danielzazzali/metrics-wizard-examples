import { MyClass1 } from './file1.js';
import { MyClass2 } from './file2.js';

class MyClass3 {
    constructor() {
        this.name = 'MyClass3';
        this.myClass1 = new MyClass1();
        this.myClass2 = new MyClass2();
    }

    greet() {
        console.log(`Hello from ${this.name}`);
        this.myClass1.greet(); // Llama al greet de MyClass1
        this.myClass2.greet(); // Llama al greet de MyClass2
    }

    anotherMethod() {
        console.log('Another method in MyClass3');
        this.myClass1.utility();
        this.myFunctionInsideClass3();
    }

    myFunctionInsideClass3() {
        console.log('Function inside MyClass3');
        this.myClass2.myHelper(); // Llama al myHelper de MyClass2
    }
}

export { MyClass3 };

function myFunction() {
    console.log('Declared function');
    new MyClass3().anotherMethod();
}

const myFunctionExpression = function() {
    console.log('Function expression');
    myFunction();
};

const myArrowFunction = () => {
    console.log('Arrow function');
    myFunctionExpression();
};

const myAnonymousFunction = function() {
    console.log('Anonymous function');
    myArrowFunction();
};

myAnonymousFunction(); // Llama al inicio de la cadena
