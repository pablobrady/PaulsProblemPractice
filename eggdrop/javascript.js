

var guessHighestFloor = function ( secretAnswer ) {
  var MAX_FLOOR = 100;
  var MIN_FLOOR = 0;
  var retVal = 0;
  var eggsLeft = 2;
  var lastBestGuess = 0;


  var recurseFloors = function( lo, hi ) {
    var newGuess = Math.floor( lo + (hi - lo) / 2);

    if( newGuess===secretAnswer ) {
      return newGuess;
    } else if( eggsLeft<=0 ) {
      return newGuess;
    }

    // Test the Egg...
    if( newGuess < secretAnswer ) {
      lastBestGuess = newGuess;
      // No egg cracks!
      return recurseFloors( lastBestGuess, hi );
    } else {
      // Egg cracked!  newguess too high!
      eggsLeft--;
      return recurseFloors( lo, newGuess );
    }

  };

  return recurseFloors( 1, 100 );
}

