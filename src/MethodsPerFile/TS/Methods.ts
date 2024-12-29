function declaredFunction(): void {
    console.log('This is a declared function');
}

const expressedFunction = function(): void {
    console.log('This is an expressed function');
};

const arrowFunction = (): void => {
    console.log('This is an arrow function');
};

const obj = {
    objectMethod(): void {
        console.log('This is an object method');
    }
};

const constAnonymousFunction = function(): void {
    console.log('This is an anonymous function');
};

setTimeout(function(): void {
    console.log('This is an anonymous function that is not an IIFE');
}, 1000);

// Immediately Invoked Function Expression (IIFE)
(function(): void {
    console.log('This is an IIFE');
})();

function* generatorFunction() {
    yield 'This is a generator function';
}

async function asyncFunction(): Promise<void> {
    console.log('This is an async function');
}

const asyncArrowFunction = async (): Promise<void> => {
    console.log('This is an async arrow function');
};

const methodName = 'computedMethod';
const objWithComputedMethod = {
    [methodName](): void {
        console.log('This is a computed method');
    }
};

const objBound = {
    x: 42,
    getX: function(): number {
        return this.x;
    }
};
const unboundGetX = objBound.getX;
const boundGetX = unboundGetX.bind(objBound);

const handler = {
    get: function(target: any, prop: string, receiver: any): any {
        if (prop === 'dynamicMethod') {
            return function(): void {
                console.log('This is a dynamic method in a proxy');
            };
        }
        return Reflect.get(target, prop, receiver);
    }
};

const proxy = new Proxy({}, handler);
(proxy as any).get('dynamicMethod')();

// (should be excluded by the metric)
class MyClass {
    classMethod(): void {
        console.log('This is a class method');
    }
}