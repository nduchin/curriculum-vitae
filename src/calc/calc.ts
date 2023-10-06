export function add (...arg: number[]): number {
  return arg.reduce((a, b) => a + b)
}
