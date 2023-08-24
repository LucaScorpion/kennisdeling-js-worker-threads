const {parentPort} = require('worker_threads');

parentPort.on('message', handleMessage);

function handleMessage(msg) {
  const {value} = msg;
  const squared = value * value;
  parentPort.postMessage({value, squared});

  process.exit();
  // Of: parentPort.once
}
