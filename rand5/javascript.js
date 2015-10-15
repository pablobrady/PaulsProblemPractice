var rand7 = function () {
  var floorIndex = 1, ceilingIndex = 7;
  var retVal = Math.floor(Math.random()*(ceilingIndex)) + floorIndex;
  return retVal;
};


var rand5viaRand7 = function( sampleSize ) {
  var r5Results = {};
  for(var k=1; k<=sampleSize; k++) {
    // var r7 = rand7() - 1; // New range:  0 to 6;
    var r5 = Number.MAX_VALUE;
    while( r5 > 5 ) {
      r5 = rand7();
    } // Only allow in the 1 to 5 range.

    // { Random-Number : Count }
    r5Results[r5] = ++r5Results[r5] || 1;

  }

  console.log( "rand5viaRand7() results in SampleSize of " + sampleSize + ":\nNUM : COUNT");

  return r5Results;
};

console.log("RUNNNING rand5viaRand7()");
console.log("", rand5viaRand7(1000) );
console.log("rand5viaRand7() complete.");


/*
SIMPLE SOLUTION!

  while result > 5:
    result = rand7()

Just ignore every rand number outside of our new range (1 to 5).  SO EASY!

 */