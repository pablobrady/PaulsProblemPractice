var findInList = function(s, arr) {
  'use strict';

  var len = arr.length;
  var isFound = false;

  var recurse = function(beg, end) {
      console.log("Beg=" + beg + " End:" + end);

      // Base
      if(beg===end) {
          return false;
      } else if(arr[beg]===s || arr[end]===s) {
          return true;
      } else if(s<arr[beg] || s>arr[end]) {
          return false; // value before BEG or after END
      }

      // Process
      var mid = Math.round( (end - beg)/2 );

      if(s<arr[mid]) {
          return recurse(beg+1, mid);
      } else if(s>arr[mid]) {
          return recurse(mid, end-1);
      } else {
          // Found!
          return true;
      }


  }

  isFound = recurse(0, arr.length-1);

  return isFound;
};
