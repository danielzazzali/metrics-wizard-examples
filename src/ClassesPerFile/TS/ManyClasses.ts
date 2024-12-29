class FirstClass_Declared {
    name: string;

    constructor() {
        this.name = 'FirstClass_Declared';
    }
}

class SecondClass_Declared {
    name: string;

    constructor() {
        this.name = 'SecondClass_Declared';
    }
}

const ThirdClass_Expressed = class {
    name: string;

    constructor() {
        this.name = 'ThirdClass_Expressed';
    }
}

const instance = new (class {
    name: string;

    constructor() {
        this.name = 'AnonymousClass';
    }
})();

function createClass() {
    return class {
        name: string;

        constructor() {
            this.name = 'FunctionClass';
        }
    };
}