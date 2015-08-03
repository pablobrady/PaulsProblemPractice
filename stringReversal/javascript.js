var reverseCharArray = function(charArray) {
  // IN PLACE REVERSAL
  console.log("LENGTH: " + charArray.length);

  // Walk thru array...
  var len = charArray.length - 1; // 4
  for(var i=0; Math.round(i<charArray.length/2); i++) {
    // Swap first and last chars
    var temp = charArray[len - i];
    charArray[len - i] = charArray[i];
    charArray[i] = temp;
  }


  return charArray;
}

var myArray = ['a', 'b', 'c', 'd', 'e', 'f'];
myArray = reverseCharArray(myArray);
console.log("CONSOLE:  Reversed String = " + myArray );
