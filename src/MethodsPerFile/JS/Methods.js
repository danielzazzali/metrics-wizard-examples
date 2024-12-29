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

const methodName = 'computedMethod';
const objWithComputedMethod = {
    [methodName]() {
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

// (should be excluded by the metric)
class MyClass {
    classMethod() {
        console.log('This is a class method');
    }
}