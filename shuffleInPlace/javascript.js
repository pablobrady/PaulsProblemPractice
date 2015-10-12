
var Shuffler = function( inputIntArray ) {
  this.inputArray = inputIntArray || [];
};

Shuffler.prototype.get_random_index = function (floorIndex, ceilingIndex) {
  var retVal = Math.floor(Math.random()*(ceilingIndex)) + floorIndex;
  return retVal;
};

Shuffler.prototype.swap = function ( index1, index2 ) {
  if(this.inputArray.length === 0) { 
    console.log("ERR:  Nothing to swap.  Please pass an input array into the Constructor."); 
    return;
  }

  var temp = this.inputArray[index1];
  this.inputArray[index1] = this.inputArray[index2];
  this.inputArray[index2] = temp;
};

Shuffler.prototype.shuffleInPlace = function() {
  if(this.inputArray.length === 0) { console.log("ERR:  Please pass an input array into the Constructor."); return; }
  
  var len = this.inputArray.length;

  // Create and evenly distributed random selection.
  for(var i=0; i<len; i++) {
    var index1 = this.get_random_index(0, len); 
    var index2 = this.get_random_index(i, len) - i;  // Subtract the floor value, from the randmized value + floor

    this.swap(index1, index2);
  }

  return this.inputArray;
};
