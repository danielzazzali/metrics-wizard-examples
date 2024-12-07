class MyClass1 {
    constructor() {
        this.name = 'MyClass1';
    }

    greet() {
        console.log(`Hello from ${this.name}`);
        this.utility();
    }

    utility() {
        console.log('Utility method in MyClass1');
        this.helper();
    }

    helper() {
        console.log('Helper method in MyClass1');
    }
}

export { MyClass1 };
