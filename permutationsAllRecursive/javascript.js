console.log("Permutations, ALL (Recursive).");

var insert = function (str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
};


var getAllPermutations = function( inputStr ) {
  var comboArray = [];

  var recurse = function( inputStr, pos ) {
    var mixedWords = [];
    var ch = inputStr[pos];

    // Base Case
    if(pos >= inputStr.length) {
      return comboArray;
    }


    // Remove CH from inputStr.
    var rStr = inputStr.replace(ch, "");
    console.log("BASIC WORD: " + rStr + ", CHAR: " + ch);
    // Place CH in every possible location.
    var len = rStr.length;
    for(var i=0; i<=len; i++) {
      var subWord = insert(rStr, i, ch);
      comboArray = comboArray.concat( subWord );
    }
    pos++;
    recurse( inputStr, pos);

    return comboArray;
  };

  console.log( recurse( inputStr, 0 ) );


  return comboArray;
};

console.log("OUTPUT:  ", getAllPermutations( "BIKE" ) );
