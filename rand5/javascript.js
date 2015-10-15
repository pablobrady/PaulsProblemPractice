var rand7 = function () {
  var floorIndex = 1, ceilingIndex = 7;
  var retVal = Math.floor(Math.random()*(ceilingIndex)) + floorIndex;
  return retVal;
};


var rand5viaRand7 = function( sampleSize ) {
  var r5Results = {};
  for(var k=1; k<=sampleSize; k++) {
    // var r7 = rand7() - 1; // New range:  0 to 6;
    var r5 = Math.floor( 
        ( 
          ((rand7() - 1) * (100/7)) + 
          ((rand7() - 1) * (14/7)) + 
          ((rand7() - 1) / 3.5 )
          ) / (100/5) 
        ) + 1; 
        // Convert to range 1 to 100, evenly disbursed.  Then
        // shrink it down to the 1 to 5 range.

    r5Results[r5] = ++r5Results[r5] || 1;

  }
  console.log( "rand5viaRand7() results in SampleSize of " + sampleSize + ":\nNUM : COUNT");
  for (var elem in r5Results) {
    console.log( elem + " : " + r5Results[elem]);
  }

  return r5Results;
};

console.log("RUNNNING rand5viaRand7()");
rand5viaRand7(1000);
console.log("rand5viaRand7() complete.");


/*
SIMPLE SOLUTION!

  while result > 5:
    result = rand7()

Just ignore every rand number outside of our new range (1 to 5).  SO EASY!

 */