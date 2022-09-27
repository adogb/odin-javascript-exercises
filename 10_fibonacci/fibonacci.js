const fibonacci = function(spot) {
  if (+spot===1) {return 1};
  if (+spot <= 0) {return "OOPS"};
  
  let member = 0;
  let n_1 = 1;
  let n_2 = 0;
  
  for (let i=2; i <= +spot; i++){
    member = n_1 + n_2;
    n_2 = n_1;
    n_1 = member;
  }

  return member;
};

// Do not edit below this line
module.exports = fibonacci;
