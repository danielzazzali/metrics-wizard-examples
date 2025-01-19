import { calculateMetrics } from 'metrics-wizard';

const metrics = await calculateMetrics({
    codePath: 'src',
    useDefaultMetrics: true
});

metrics.forEach(metric => {
    console.log('\x1b[36m%s\x1b[0m', "-".repeat(80));
    console.log('\x1b[32m%s\x1b[0m', metric.metricName);
    console.log('\x1b[32m%s\x1b[0m', metric.description);
    console.log('\x1b[32m%s\x1b[0m', `Version: ${metric.version}`);

    console.log(JSON.stringify(metric.result, null, 2));

    if (metric.unresolved) {
        console.log('\x1b[31m%s\x1b[0m', "Unresolved imports:");
        console.log(JSON.stringify(metric.unresolved, null, 2));
    }
});
