
var buildWordCloud = function ( aString ) {
  var retVal = "";

  var tempStr = aString.replace(/[.,:;(){}\[\]?!]/g, '');
  var wordArray = tempStr.split(' ');
  console.log('wordArray = ', wordArray);
  var wordObj = {};

  // Count the word occurences
  var maxCount = 0;
  for(var i=0; i<wordArray.length; i++){
    var wordStr = wordArray[i].toLowerCase();
    wordObj[ wordStr ] = (wordObj[ wordStr ]) ? ++wordObj[wordStr] : 1;

    maxCount = (wordObj[wordStr] > maxCount) ? wordObj[wordStr] : maxCount;
  }

  // Populate the output (reading the workObj this time...)
  for(var element in wordObj) {
    var count = wordObj[element];
    if(count>6) count=6;
    var hCount = maxCount - count + 1;

    console.log('VALUE ' + element + ' COUNT: ' + count );
    var newWord = '<h' + hCount + ' class=tag>' + element + '</h' + hCount + '> ';
    retVal = retVal.concat( newWord );
  }

  return retVal;
};


var sourceArray = [
  'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar. And such...',
  'We came, we saw, we conquered... then we ate Bill\'s (Mille-Feuille) cake.  Bill!  Bill?  Bill came for the cake!'
];



var output1 = buildWordCloud( sourceArray[0] );
var output2 = buildWordCloud( sourceArray[1] );

console.log('output:  ' + output1 + '<br><br>' + output2);

document.getElementById('out1').innerHTML = output1;
document.getElementById('out2').innerHTML = output2;
