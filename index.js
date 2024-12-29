import { calculateMetrics } from 'metrics-wizard';

(async () => {
    const results = await calculateMetrics({
        codePath: './src',
        //customMetricsPath: './metrics',
        useDefaultMetrics: true
    });

    results.forEach(result => {
        console.log('\x1b[36m%s\x1b[0m', '------------------------------------');
        console.log('\x1b[32m%s\x1b[0m', result.metricName);
        console.log('\x1b[32m%s\x1b[0m', result.description);
        console.log('\x1b[32m%s\x1b[0m', `Version: ${result.version}`);

        console.log(JSON.stringify(result.result, null, 2));
    });
})();

