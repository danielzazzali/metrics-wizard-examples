import { calculateMetrics } from '../metrics/index.js';


const metricsMOCK = [
    {
        name: "MOCK",
        path: "MOCK.js"
    }
]

async function run() {

    const path = "./src";

    const metrics = [
        {
            name: "Function Declaration",
            path: "/home/daniel/Workspace/metrics/src/metrics/functionDeclaration.js",
        },
        {
            name: "Classes Per File",
            path: "/home/daniel/Workspace/metrics/src/metrics/classesPerFile.js"
        },
        {
            name: "Methods Per File",
            path: "/home/daniel/Workspace/metrics/src/metrics/methodsPerFile.js"
        },
        {
            name: "Fan In Fan Out Per File",
            path: "/home/daniel/Workspace/metrics/src/metrics/fanInFanOutPerFile.js"
        },
        {
            name: "Fan In Fan Out Per Class",
            path: "/home/daniel/Workspace/metrics/src/metrics/fanInFanOutPerClass.js"
        }
    ]

    const results = await calculateMetrics({path});
    console.log(JSON.stringify(results, null, 2));
}

await run()
