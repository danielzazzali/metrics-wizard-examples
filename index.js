import { calculateMetrics } from 'metrics-wizard';

(async () => {
    const results = await calculateMetrics({
        codePath: './src',
        //customMetricsPath: './metrics',
        useDefaultMetrics: true
    });

    results.forEach(result => {
        console.log('------------------------------------')
        console.log(result.metricName);
        console.log(JSON.stringify(result, null, 2));
    });
})();