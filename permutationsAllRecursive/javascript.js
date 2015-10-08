console.log("Show all unique Permutations of letters for each word. (Recursive)");

var insert = function (str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
};


var getAllPermutations = function( inputStr ) {
  var comboObject = {};


  var recurse = function( inputStr, pos ) {
    var ch = inputStr[pos];

    // Base Case
    if(pos >= inputStr.length) {
      return comboObject;
    }

    // Remove char from inputStr.
    var rStr = inputStr.replace(ch, "");

    // Place char in every possible location.
    var len = rStr.length;
    for(var i=0; i<=len; i++) {
      var subWord = "" +  insert(rStr, i, ch);
      if(!comboObject[subWord]) {
        comboObject[subWord] = true;
      } else comboObject[subWord] = false;
    }
    pos++;
    recurse( inputStr, pos);

    return comboObject;
  };
  recurse( inputStr, 0 );


  return comboObject;
};


var origWord1 = "BYE";
var outObj1 = getAllPermutations( origWord1 );
console.log( Object.keys(outObj1) );

origWord2 = "TUNAFISH";
var outObj2 = getAllPermutations( origWord2 );
console.log( Object.keys(outObj2) );