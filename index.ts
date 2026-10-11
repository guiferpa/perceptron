import { rand } from "./utils";

class Neuron {
  constructor(
    public readonly bias: number,
    public readonly weights: number[],
    private activate: (k: number) => number,
  ) {}

  public compute(xs: number[]): number {
    if (xs.length !== this.weights.length)
      throw new Error("incompatibility in capacity between weights and xs");

    const k =
      xs.reduce((acc, x, i) => {
        const w = this.weights[i];
        return x * w + acc;
      }, 0) + this.bias;

    return this.activate(k);
  }
}

function identity(k: number): number {
  return k;
}

/* Cost function */
function cost(ys: number[], labels: number[]): number {
  if (ys.length !== labels.length)
    throw new Error("incompatibility in capacity between sys and ys");

  const s = labels.reduce((acc, label, i): number => {
    const y = ys[i];
    return Math.pow(y - label, 2) + acc;
  }, 0);

  // return s / labels.length;
  return s;
}

async function train() {
  const entries = 1;

  // const weights = rand.nums(entries);
  const weights = [2.5];
  // const bias = rand.num();
  const bias = 6;
  const neuron = new Neuron(bias, weights, identity);

  const samples = [
    [0],
    [2],
    [4],
    [6],
    // rand.nums(connections),
    // rand.nums(connections),
  ];

  const labels = [6, 11, 16, 21];

  const ys = samples.map((xs) => {
    console.log(`Sample: [${xs}]: Weight [${neuron.weights}], Bias ${neuron.bias}`);
    return neuron.compute(xs);
  });

  console.log(`Ys: ${ys}`);

  const r = cost(ys, labels);

  console.log(`Cost: ${r}`);
}

train();
