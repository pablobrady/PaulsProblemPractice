var isPalindrome = function(str) {

  var i = 0;
  var k = str.length - 1;
  while(i<str.length/2) {
    console.log( str[i] + " vs " + str[k] );
    if(str[i] != str[k]) {
      return false;
    }
    i++;
    k--;
  }

  return true;
}


var isAnyPermutationAPalindrome = function(inputStr) {
  console.log(inputStr);

  var permutationsObj = {};


  return false;
}
