export function KtoF(K) {
  return Math.round((K - 273.15) * 1.8 + 32);
}
export function inBetween(temp, startAt, size) {
  const range = [...Array(size).keys()].map((i) => i + startAt);
  return !!range.includes(temp);
}
