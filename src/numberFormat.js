export const numberFormat = val =>
  Number.isInteger(val) ? val : val.toFixed(2);
