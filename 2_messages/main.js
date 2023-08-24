const {Worker} = require('worker_threads');

const worker = new Worker('./worker.js');
worker.on('message', printResult);
worker.postMessage({value: 42});

function printResult(msg) {
  console.log(`${msg.value} ^ 2 = ${msg.squared}`);
}
