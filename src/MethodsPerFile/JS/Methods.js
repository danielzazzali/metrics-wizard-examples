function declaredFunction() {
    console.log('This is a declared function');
}

const expressedFunction = function() {
    console.log('This is an expressed function');
};

const arrowFunction = () => {
    console.log('This is an arrow function');
};

const obj = {
    objectMethod() {
        console.log('This is an object method');
    }
};

const constAnonymousFunction = function() {
    console.log('This is an anonymous function');
};

setTimeout(function() {
    console.log('This is an anonymous function that is not an IIFE');
}, 1000);

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('This is an IIFE');
})();

function* generatorFunction() {
    yield 'This is a generator function';
}

async function asyncFunction() {
    console.log('This is an async function');
}

const asyncArrowFunction = async () => {
    console.log('This is an async arrow function');
};

const functionName = 'computedMethod';
const objWithComputedFunction = {
    [functionName]() {
        console.log('This is a computed method');
    }
};

const objBound = {
    x: 42,
    getX: function() {
        return this.x;
    }
};
const unboundGetX = objBound.getX;
const boundGetX = unboundGetX.bind(objBound);

const handler = {
    get: function(target, prop, receiver) {
        if (prop === 'dynamicMethod') {
            return function() {
                console.log('This is a dynamic method in a proxy');
            };
        }
        return Reflect.get(...arguments);
    }
};

const proxy = new Proxy({}, handler);
proxy.get('dynamicMethod')();

class MyClass {
    constructor(name) {
        this.name = name;
    }

    instanceMethod() {
        return `Hello, ${this.name}!`;
    }

    static staticMethod() {
        return 'This is a static method.';
    }

    async asyncMethod() {
        const data = await fetch('https://api.example.com/data');
        return data.json();
    }

    get value() {
        return this._value; // Getter
    }

    set value(newValue) {
        this._value = newValue; // Setter
    }

    #privateMethod() {
        return 'This is private!';
    }

    publicMethod() {
        return this.#privateMethod();
    }

    [methodName]() {
        return 'This is a dynamically named method.';
    }

    expressedMethod = function () {
        return 'This is a function expression.';
    };

    arrowMethod = () => {
        return `Arrow function: ${this.constructor.name}`;
    };
}