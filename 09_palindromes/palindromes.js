const palindromes = function (string) {
  const letterRegExp = /[a-z|A-Z]/g;
  // g needed to return all matching results, not just the first match
  const lettersArr = string.match(letterRegExp);
  const lowLettersArr = lettersArr.map(letter=>letter.toLowerCase());

  const stop = Math.floor(lowLettersArr.length/2 - 1);

  for (let i = 0; i <= stop; i++){
    // javascript does not use negative indexing for arrays, therefore we use .at()
    if (lowLettersArr[i]!==lowLettersArr.at(-i-1)){
      return false;
    }
    
  }
  
  return true;
};

// Do not edit below this line
module.exports = palindromes;
