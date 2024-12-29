import { calculateMetrics } from 'metrics-wizard';

(async () => {
    const results = await calculateMetrics({
        codePath: './src',
        //customMetricsPath: './metrics',
        useDefaultMetrics: true
    });

    console.log(results);
})();