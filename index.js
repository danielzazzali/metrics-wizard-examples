import { calculateMetrics } from '../metrics/index.js';

(async () => {
    const results = await calculateMetrics({
        codePath: './src',
        //customMetricsPath: './metrics',
        useDefaultMetrics: true
    });

    /*results.forEach(result => {
        console.log('------------------------------------')
        console.log(result.metricName);
        console.log(JSON.stringify(result, null, 2));
    });
    */

    results.forEach(result => {
        if (result.metricName === "Classes Per File") {
            console.log('\x1b[36m%s\x1b[0m', '------------------------------------'); // Cyan color
            console.log('\x1b[32m%s\x1b[0m', result.metricName); // Green color
            console.log('\x1b[32m%s\x1b[0m', result.description); // Green color
            console.log('\x1b[32m%s\x1b[0m', `Version: ${result.version}`); // Green color

            for (const [dir, files] of Object.entries(result.result)) {
                console.log('\x1b[34m%s\x1b[0m', `Directory: ${dir}`); // Blue color
                for (const [file, data] of Object.entries(files)) {
                    console.log('\x1b[35m%s\x1b[0m', `  File: ${file}`); // Magenta color
                    console.log('\x1b[33m%s\x1b[0m', `    Classes: ${data.classes.join(', ')}`); // Yellow color
                }
            }
        }
    });


})();