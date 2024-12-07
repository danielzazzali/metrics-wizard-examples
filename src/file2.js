import { MyClass1 } from './file1.js';

class MyClass2 {
    constructor() {
        this.name = 'MyClass2';
        this.myClass1 = new MyClass1();
        for (let i = 0; i < 10; i++) {
            this.loopExample();
        }
    }

    greet() {
        console.log(`Hello from ${this.name}`);
        this.myClass1.greet(); // Llama al greet de MyClass1
        this.myHelper();
    }

    myHelper() {
        console.log('Helper method in MyClass2');
    }

    loopExample() {
        console.log('Loop example in MyClass2');
    }
}

export { MyClass2 };
