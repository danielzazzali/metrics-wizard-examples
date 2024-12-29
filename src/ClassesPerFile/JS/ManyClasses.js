class FirstClass_Declared {
    constructor() {
        this.name = 'FirstClass_Declared';
    }
}

class SecondClass_Declared {
    constructor() {
        this.name = 'SecondClass_Declared';
    }
}

const ThirdClass_Expressed = class {
    constructor() {
        this.name = 'ThirdClass_Expressed';
    }
}

const instance = new (class {
    constructor() {
        this.name = 'AnonymousClass';
    }
})();

function createClass() {
    return class {
        constructor() {
            this.name = 'FunctionClass';
        }
    };
}