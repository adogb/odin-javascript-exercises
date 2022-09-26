const sumAll = function(int1, int2) {
  if (int1 < 0 || int2 < 0 || typeof int1 !== "number" || typeof int2 !== "number") return "ERROR";

  const arrLength = Math.abs(int1 - int2)+1;
  const minIndex = Math.min(int1, int2);
  const arr = [];
  for (let i=0; i<arrLength; i++){
    arr[i] = minIndex + i;
  }
  let finalSum = arr.reduce((sum, current) => sum += current, 0);
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
