
var whichNumberTwice = function( anArray ) {
  // Store each value in an object.
  var checkForDup = {};

  var len = anArray.length;
  for(var i=0; i<len; i++) {
    var val = anArray[i];
      if(checkForDup[ val ]) {
      return val;
    }
    checkForDup[val]=true;
  }
  return null;
};


var testArray = [1,2,3,4,5,5,6,7,8];
console.log( "The duplicate number is (O(n)+O(c)time and O(n-1) additional space): " + whichNumberTwice( testArray ) );



var whichNumberTwice_usingMath = function( anArray ) {
  var lastNum = anArray[ anArray.length-1 ];
  var calc = (Math.pow(lastNum,2) + lastNum) / 2;
  
  var len = anArray.length;
  var sum = 0;
  for(var i=0; i<len; i++) {
    sum += anArray[i];
  }

  return sum - calc; // The duplicate number
 
};
console.log( "The duplicate number is (using math / O(n)time and O(1) additional space): " + whichNumberTwice_usingMath( testArray ) );