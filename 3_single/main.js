const {Worker, isMainThread, workerData, parentPort} = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename, {workerData: {value: 77}});
  worker.on('message', printResult);
} else {
  const {value} = workerData;
  parentPort.postMessage({
    value,
    squared: value * value
  });
}

function printResult(msg) {
  console.log(`${msg.value} ^ 2 = ${msg.squared}`);
}
