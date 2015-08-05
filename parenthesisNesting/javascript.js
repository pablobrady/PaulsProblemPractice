/*
 Are the following sets of parenthesis nested evenly?

  "{ [ ] ( ) }" should return True
  "{ [ ( ] ) }" should return False
  "{ [ }" should return False

 */

var areParensBalanced = function(string) {
  // Walk thru string, pushing/popping found parens from a stack.
  var parenStack = [];

  for(var i=0; i<string.length; i++){
    var char = string[i];
    //if(char===" ") continue;
    if(char==="{" || char==="[" || char==="(") {
      parenStack.push(char);
    } else {
      if( ( char==="}" && parenStack[parenStack.length-1]==="{" ) ||
          ( char==="]" && parenStack[parenStack.length-1]==="[" ) ||
          ( char===")" && parenStack[parenStack.length-1]==="(" ) ) {
        var popped = parenStack.pop()
      }
    }
  }
  return parenStack.length===0 ? true : false;
}
