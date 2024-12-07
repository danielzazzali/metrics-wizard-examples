import { calculateMetrics } from '../metrics/index.js';

async function run() {

    const metricsConfig = {
        metrics: [
            /*
            {
                name: "calculateFanInFanOutPerFile",
                path: "../metrics/src/metrics/fanInFanOutPerFile.js"
            },
            {
                name: "calculateFanInFanOutPerClass",
                path: "../metrics/src/metrics/fanInFanOutPerClass.js"
            },

            */
            {
                name: "calculateClassesPerFile",
                path: "../metrics/src/metrics/classesPerFile.js"
            },
            /*
            {
                name: "calculateMethodsPerFile",
                path: "../metrics/src/metrics/methodsPerFile.js"
            }
            */
            /*{
                //name: "calculateFanInFanOutPerClassMethod",
                //path: "../metrics/src/metrics/fanInFanOutPerClass.js"
            }*/
        ]
    };

    const options = {
        path: './src',
        metricsConfig
    };

    const results = await calculateMetrics(options);
    console.log(JSON.stringify(results, null, 2));
}

run().then(() => console.log('Done!'));
