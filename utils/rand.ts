export const num = () => Math.random()

export const nums = (length: number): number[] => 
  Array.from({ length }, () => num());
