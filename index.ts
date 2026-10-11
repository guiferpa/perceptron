import { rand } from "./utils";

class Neuron {
  constructor(
    public readonly bias: number,
    public readonly weights: number[],
  ) {}

  public compute(xs: number[]): number {
    if (xs.length !== this.weights.length)
      throw new Error("incompatibility in capacity between weights and xs");

    const k =
      xs.reduce((acc, x, i) => {
        const w = this.weights[i];
        return x * w + acc;
      }, 0) + this.bias;

    return k;
  }
}

async function train() {
  const entries = 1;

  // const weights = rand.nums(entries);
  const weights = [2.5];
  // const bias = rand.num();
  const bias = 6;
  const neuron = new Neuron(bias, weights);

  const samples = [
    [0],
    [2],
    [4],
    [6],
    // rand.nums(connections),
    // rand.nums(connections),
  ];

  const ys = samples.map((xs) => {
    console.log(`Sample: [${xs}]: Weight [${neuron.weights}], Bias ${neuron.bias}`);
    return neuron.compute(xs);
  });

  console.log(`Ys: ${ys}`);
}

train();
