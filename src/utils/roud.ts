export const roundNumber = (number: number, digits?: number) => {
  console.log(Math.round(number * 100) / 100);

  return digits
    ? Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits)
    : number;
};
