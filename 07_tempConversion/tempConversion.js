const ftoc = function(ftemp) {
  // Math.round() rounds to the nearest integer. So multiplying argument by 10 and dividing the rounded number by 10.
  const ctemp= Math.round((ftemp - 32) * 5/9 *10)/10;
  return ctemp;
};

const ctof = function(ctemp) {
  const ftemp= Math.round((ctemp * 9/5 + 32 )*10)/10;
  return ftemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
