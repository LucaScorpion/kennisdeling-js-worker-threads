const {Worker} = require('worker_threads');

/** @type Worker[] */
const workers = []

for (let i = 0; i < 4; i++) {
  const worker = new Worker('./worker.js');
  workers.push(worker);
  worker.on('message', (m) => handleResult(worker, m));
}

// De "workload", alle getallen van 0 tot 10.
let workload = 0;
const workloadMax = 10;

let results = [];

// Start alle workers.
workers.forEach((w) => w.postMessage({value: workload++}));

function handleResult(worker, msg) {
  console.log(`${msg.value} ^ 2 = ${msg.squared}`);
  results.push(msg);

  // Stuur de volgende workload zodra een worker klaar is.
  if (workload < workloadMax) {
    worker.postMessage({value: workload++});
  }

  // Check of alle resultaten binnen zijn.
  if (results.length === workloadMax) {
    stopWorkers();
  }
}

function stopWorkers() {
  workers.forEach((w) => w.terminate());
}
