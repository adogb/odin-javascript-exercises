const ftoc = function(ctemp) {
  // Math.round() rounds to the nearest integer. So multiplying argument by 10 and dividing the rounded number by 10.
  const ftemp= Math.round((ctemp - 32) * 5/9 *10)/10;
  return ftemp;
};

const ctof = function(ftemp) {
  const ctemp= Math.round((ftemp * 9/5 + 32 )*10)/10;
  return ctemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
