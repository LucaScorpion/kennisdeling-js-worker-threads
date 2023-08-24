const {parentPort} = require('worker_threads');

parentPort.on('message', handleMessage);

async function handleMessage(msg) {
  const {value} = msg;
  const squared = value * value;

  // Om langzame processing te simuleren:
  // await sleep(1000);

  parentPort.postMessage({value, squared});
}

async function sleep(ms) {
  await new Promise((res) => setTimeout(res, ms));
}
