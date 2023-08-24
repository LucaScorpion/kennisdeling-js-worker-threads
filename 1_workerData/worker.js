const {parentPort, workerData} = require('worker_threads');

const value = workerData.value;
const squared = value * value;
parentPort.postMessage({value, squared});
