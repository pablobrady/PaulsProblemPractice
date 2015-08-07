var isPalindrome = function(str) {

  var i = 0;
  var k = str.length - 1;
  while(i<str.length/2) {
    if(str[i] != str[k]) {
      return false;
    }
    i++;
    k--;
  }

  return true;
}
// ^ Unneccessary for this problem.


var isAnyPermutationAPalindrome = function(inputStr) {
  var charCountObj = {};

  // Tally the times each character appears.
  for(var i=0; i<inputStr.length; i++) {
    if( charCountObj[ inputStr[i] ] ) {
      charCountObj[ inputStr[i] ]++;
    } else {
      charCountObj[ inputStr[i] ] = 1;
    }
  }

  var isOddLength = (inputStr.length % 2===0) ? false : true;

  // Check the results.
  // Note:  If the string length is odd, one character can appear once.
  var oddCount = 0;
  var isValidPalin = true;
  var isFirstSingleEncounter = true;
  for(var el in charCountObj) {
    // console.log(el + " - " + charCountObj[el] );
    if(charCountObj[el]>2) {
        return false;
    } else if(charCountObj[el]==1) {
      if(isOddLength && isFirstSingleEncounter) {
        isFirstSingleEncounter = false;
      } else {
        return false;
      }
    }
  }
  return isValidPalin;
};

