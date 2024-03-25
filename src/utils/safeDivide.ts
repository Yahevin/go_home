export const safeDivide = (a: number, b: number) => {
  const result = a / b;

  return isNaN(result) ? 0 : result;
};
