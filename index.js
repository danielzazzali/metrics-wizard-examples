import { calculateMetrics } from '../metrics/index.js';

async function run() {

    const codePath = "./src";
    const useDefaultMetrics = true;

    const results = await calculateMetrics({codePath, useDefaultMetrics});
    console.log(JSON.stringify(results, null, 2));
}

await run()
