var source = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";

var detectClosingParen = function( source ) {
  // Walk string, counting +1 for '(', and
  // -1 for ')'
  var pStack = 0;
  var retVal = -1;
  for(var i=0; i<source.length; i++) {
    var char = source[i];
    if(char==='(') {
      pStack++;
    } else if(char===')') {
      pStack--;
      if(pStack===0) {
        retVal = i;
      }
    }
  }
  return retVal;
};

console.log("Closing Parenthesis:  " + detectClosingParen(source) );
