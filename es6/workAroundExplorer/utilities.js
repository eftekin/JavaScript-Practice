export const formatNumber = (number) => {
  let numStr = String(Math.floor(number));
  for (let i = numStr.length - 3; i > 0; i -= 3) {
    numStr = numStr.slice(0, i) + "," + numStr.slice(i);
  }
  return numStr;
};
