const add = function(...ints) {
	return ints.reduce((sum, current)=> sum += current, 0);
};

const subtract = function(int1, int2) {
	return int1 - int2;
};

const sum = function(arr) {
	return arr.reduce((sum, current)=> sum+= current, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current)=> sum *= current);
};

const power = function(int1, int2) {
	return int1 ** int2;
};

const factorial = function(int) {
	if (int === 0){
    return 1;
  }
  else { return int * factorial(int-1)}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
