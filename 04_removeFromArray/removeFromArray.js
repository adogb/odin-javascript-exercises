const removeFromArray = function(arr, ...args) {
  for (let arg of args){
    if (arr.includes(arg)){
      let argIndex = arr.indexOf(arg);
      arr.splice(argIndex, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
