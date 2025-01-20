function declaredFunction(arg) {
    return arg;
}

const expressedFunction = function(arg) {
    return arg;
};

const arrowFunction = (arg) => {
    return arg;
};

const createGeneratorOne = (arg) => function* (arg) {
    return arg;
};

const createGeneratorTwo = (arg) => async function* (arg) {
    return arg;
};


const obj = {
    objectMethod(arg) {
        return arg;
    }
};


setTimeout(function* replace_name(arg) {
    return arg;
}, 1000);


// Immediately Invoked Function Expression (IIFE)
(function(arg) {
    return arg;
})();


function* generatorFunction(arg) {
    yield arg;
}


async function* asyncGeneratorFunction(arg) {
    yield arg;
}


async function asyncFunction(arg) {
    return arg;
}


const asyncArrowFunction = async (arg) => {
    return arg;
};


const functionName = 'computedMethod';
const objWithComputedFunction = {
    async * [functionName](arg) {
        return arg;
    }
};



const objBound = {
    x: 42,
    getX: function(arg) {
        return this.x * arg;
    }
};

// Should we catch this ???
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
    constructor(arg) {
        this.arg = arg;
    }

    instanceMethod(arg) {
        return arg;
    }

    static staticMethod(arg) {
        return arg;
    }

    async asyncMethod(arg) {
        return arg;
    }

    get value() {
        return this.arg;
    }

    set value(arg) {
        this.arg = arg;
    }

    _privateMethod(arg) {
        return arg;
    }

    publicMethod(arg) {
        return this._privateMethod(arg);
    }

    [methodName](arg) {
        return arg;
    }

    static expressedMethod = async function* (arg) {
        return arg;
    };

    arrowMethod = (arg) => {
        return arg;
    };
}