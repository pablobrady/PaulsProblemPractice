var rand5 = function () {
  var floorIndex = 1, ceilingIndex = 5;
  var retVal = Math.floor(Math.random()*(ceilingIndex)) + floorIndex;
  return retVal;
};



/*
"Rand" Table Mockup
  
  1 2 3 4 5
  6 7 1 2 3
  4 5 6 7 1
  2 3 4 5 6 
  7 1 2 3 4  // Toss out these last 4 boxes
 */

var rand7viaRand5 = function( sampleSize ) {
  var r7Results = {};
  var r7;

  // Build "Random" Matrix
  var randTable = [];
  var tableCounter = 1;
  for(var x=0; x<5; x++) {
    randTable[x] = [];
    for(var y=0; y<5; y++) {
      randTable[x][y] = tableCounter++;
      if(tableCounter>7) tableCounter=1;
    }
  }

  // Select randomly from randTable matrix
  var rx, ry;
  for(var k=1; k<=sampleSize; k++) {

    rx = rand5()-1;
    ry = rand5()-1;
    if(rx===4 && ry>0) continue; // Toss out last 4 boxes

    r7 = randTable[rx][ry];
    r7Results[r7] = ++r7Results[r7] || 1;

  }

  return r7Results;
};

console.log("RUNNNING rand7viaRand5()...");
console.log("", rand7viaRand5(1000) );
console.log("rand7viaRand5() is now complete.");

