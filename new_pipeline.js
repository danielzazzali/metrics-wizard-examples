import { parse } from '@babel/parser'
import fs from 'fs'
import traverse from "@babel/traverse";

const filePath = './src/file1.js'
const fileName = 'file1.js'

const file = fs.readFileSync(filePath, 'utf8');

const ast = parse(file, {sourceType: 'module'})

ast.program.loc.filename = fileName

const traverseAST = traverse.default


const code1 = 'function example1() { return 1; }';
const code2 = 'function example2() { return 2; }';

const ast1 = parse(code1, { sourceType: 'module' });
const ast2 = parse(code2, { sourceType: 'module' });

const sharedState = {
    functionNames: [],
};

const visitors = {
    FunctionDeclaration(path, state) {
        state.functionNames.push(path.node.id.name);
    },
};

const postProcessingState = (state) => {
    state.functionNames = state.functionNames.sort();
}


// Metrica será:

// Objeto State
// Objeto Visitors
// Funcion postProcessing(state)

traverseAST(ast1, visitors, null, sharedState);
traverseAST(ast2, visitors, null, sharedState);

console.log('Nombres de funciones encontradas:', sharedState.functionNames);

