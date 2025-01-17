class ClassDeclared {}

const ClassExpressed = class {}

const instance = new (class {
    constructor() {}
})();

function createClass() {
    return class {
        constructor() {}
    };
}