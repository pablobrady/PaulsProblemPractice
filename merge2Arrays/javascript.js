var mergeTwoArrays = function( array1, array2 ) {
  "use strict";

  var len = array1.length > array2.length ? array1.length : array2.length;
  var outputArray = [];

  var index1 = 0;
  var index2 = 0;
  var val;
  while( index1<=len && index2<=len ) {
    val = -1;
    if(index1<array1.length && index2<array2.length) {
      if( array1[index1] > array2[index2] ) {
        val = array2[index2++];
      } else {
        val = array1[index1++];
      }
    } else if( index1 >= array1.length && index2 >= array2.length ) {
      console.log("End of Search.");
      return outputArray;
    } else if( index1 >= array1.length ) {
      val = array2[index2++];
    } else if( index2 >= array2.length ) {
      val = array1[index1++];
    }
console.log("val = " + val + " i1=" + index1 + " i2=" + index2);
    outputArray.push( val );
  }

  console.log( "Err - empty array. -- outputArray[] = ", outputArray);

  return outputArray;
};




