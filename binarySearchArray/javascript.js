var findInList = function( findMe, myList ) {
  "use strict";

  // ex. [1,3,5,9,11,15];
  //      0 1 2 3  4  5

  var retBool = false;
  var len = myList.length;


  // Recursive Function
  var bSearch = function(startIdx, endIdx) {
    // Base case
    console.log( startIdx + " to " + endIdx );
    if ( startIdx === endIdx-1 || startIdx === endIdx+1 || startIdx === endIdx) {
      if ( myList[startIdx]===findMe || myList[startIdx-1]===findMe || myList[startIdx+1]===findMe ) {
        return true;
      } 
      return false;
    }

    var mid = Math.round( (endIdx - startIdx)/2 + startIdx );
    console.log("----> MID = " + mid + " VAL: " + myList[mid]);

    if ( myList[ mid ]<findMe ) {
      return bSearch(mid, endIdx);
    } else if ( myList[ mid ]>findMe ) {
      return bSearch(startIdx, mid);
    } else {
      return true;
    }
  }


  retBool = bSearch(0, len-1);

  return retBool;
};


