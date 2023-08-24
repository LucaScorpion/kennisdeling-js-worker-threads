import {Worker} from 'worker_threads';

/** @type Worker[] */
const workers = []

for (let i = 0; i < 4; i++) {
  const worker = new Worker('./worker.js');
  workers.push(worker);
  worker.on('message', handleResult);
}

function handleResult(msg) {
  console.log(`${msg.value} ^ 2 = ${msg.squared}`);
}

function stopWorkers() {
  workers.forEach((w) => w.terminate());
}

for (let i = 0; i < 100; i++) {
  // TODO
}
