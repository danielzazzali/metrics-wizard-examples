function declaredFunction(arg: any) {
    return arg;
}

const expressedFunction = function(arg: any) {
    return arg;
};

const arrowFunction = (arg: any) => {
    return arg;
};

const createGeneratorOne = (arg : any) => function* (arg: any) {
    return arg;
};

const createGeneratorTwo = (arg : any) => async function* (arg: any) {
    return arg;
};


const obj = {
    objectMethod(arg: any) {
        return arg;
    }
};


setTimeout(function* replace_name(arg : any) {
    return arg;
}, 1000);


// Immediately Invoked Function Expression (IIFE)
(function(arg) {
    return arg;
})();


function* generatorFunction(arg : any) {
    yield arg;
}


async function* asyncGeneratorFunction(arg : any) {
    yield arg;
}


async function asyncFunction(arg : any) {
    return arg;
}


const asyncArrowFunction = async (arg : any) => {
    return arg;
};


const functionName = 'computedMethod';
const objWithComputedFunction = {
    async * [functionName](arg : any) {
        return arg;
    }
};



const objBound = {
    x: 42,
    getX: function(arg : any) {
        return this.x * arg;
    }
};

// Should we catch this ???
const unboundGetX = objBound.getX;
const boundGetX = unboundGetX.bind(objBound);

const handler = {
    get: function(target: any, prop: any , receiver: any) {
        if (prop === 'dynamicMethod') {
            return function() {
                console.log('This is a dynamic method in a proxy');
            };
        }
        // @ts-ignore
        return Reflect.get(...arguments);
    }
};

const proxy = new Proxy({}, handler);
proxy.get('dynamicMethod')();


const methodName = 'hi'

class MyClass {
    private arg: any;
    constructor(arg: any) {
        this.arg = arg;
    }

    instanceMethod(arg: any) {
        return arg;
    }

    static staticMethod(arg: any) {
        return arg;
    }

    async asyncMethod(arg: any) {
        return arg;
    }

    get value() {
        return this.arg;
    }

    set value(arg) {
        this.arg = arg;
    }

    _privateMethod(arg: any) {
        return arg;
    }

    publicMethod(arg: any) {
        return this._privateMethod(arg);
    }

    [methodName](arg: any) {
        return arg;
    }

    static expressedMethod = async function* (arg: any) {
        return arg;
    };

    arrowMethod = (arg: any) => {
        return arg;
    };
}