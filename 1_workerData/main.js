const {Worker} = require('worker_threads');

const worker = new Worker('./worker.js', {workerData: {value: 42}});
worker.on('message', printResult);

function printResult(msg) {
  console.log(`${msg.value} ^ 2 = ${msg.squared}`);
}
