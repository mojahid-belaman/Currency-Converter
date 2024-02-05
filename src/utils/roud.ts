export const roundNumber = (number: number, digits?: number) => {
  return digits
    ? Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits)
    : number;
};
