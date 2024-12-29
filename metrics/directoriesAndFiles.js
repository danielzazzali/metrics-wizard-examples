const state = {
    metricName: "Print Directories and Files",
    description: "This metric the directories and files",
    version: "1.0",
    result: {},
};

const visitors = {
    Program(pathNode, state) {
        const filePath = pathNode.parent.loc.filePath;
        const fileName = pathNode.node.loc.filename;
        const dirName = filePath.substring(0, filePath.lastIndexOf('/'));


        if (!state.result[dirName]) {
            state.result[dirName] = [];
        }

        state.result[dirName].push(fileName);
    },
};

const postProcessing = (state) => {};

export { state, visitors, postProcessing };